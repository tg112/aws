import { Stack, StackProps } from "aws-cdk-lib"
import { Construct } from "constructs";
import { Code, Function as LambdaFunction, Runtime } from 'aws-cdk-lib/lib/aws-lambda';
import { join } from 'path';
import { LambdaIntegration, RestApi } from "aws-cdk-lib/lib/aws-apigateway"
import { GenericTable } from "./GenericTable";
// esbuildの利用
import { NodejsFunction } from 'aws-cdk-lib/lib/aws-lambda-nodejs';
import { PolicyStatement } from "aws-cdk-lib/lib/aws-iam";


export class SpaceStack extends Stack {

  private api = new RestApi(this, 'SpaceApi');
  private spaceTable = new GenericTable(
    'SpacesTable',
    'spaceId',
    this
  )

  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    // Lambdaの定義
    const helloLambda = new LambdaFunction(this, 'helloLambda', {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset(join(__dirname, '..', 'services', 'hello')),
      handler: 'hello.main'
    });

    // esbuild
    const helloLambdaNodeJs = new NodejsFunction(this, 'helloLambdaNodeJs', {
      entry: (join(__dirname, '..', 'services', 'node-lambda', 'hello.ts')),
      handler: 'handler'
    });


    // Policy、権限の付与
    const s3ListPolicy = new PolicyStatement();
    s3ListPolicy.addActions('s3:ListAllMyBuckets');
    s3ListPolicy.addResources('*');
    helloLambdaNodeJs.addToRolePolicy(s3ListPolicy);


    // ApiGatewayとlambdaの統合
    const HelloLambdaIntegration = new LambdaIntegration(helloLambdaNodeJs);
    // Resourceの生成
    const helloLambdaResource = this.api.root.addResource('hello');
    // Methodの追加
    helloLambdaResource.addMethod('GET', HelloLambdaIntegration);
  }
}