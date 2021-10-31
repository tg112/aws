# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## AWS CDK
[公式](https://aws.amazon.com/jp/cdk/#:~:text=AWS%20Cloud%20Development%20Kit%20(AWS,%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%96%8B%E7%99%BA%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%A7%E3%81%99%E3%80%82)

[github](https://github.com/aws/aws-cdk)

[ドキュメント](https://docs.aws.amazon.com/cdk/api/latest/docs/aws-construct-library.html)

## commands
### start project
`cdk init app --language typescript`

### cloudfromation templateの作成
`cdk synth`
### アカウント内にcloudformationのstackの作成
`cdk bootstrap`
### stackのデプロイ
`cdk deploy`
### 全てのstackのデプロイ
`cdk deploy --all`
### stackの確認
`cdk list`
### ローカルとリモートのdiffの確認
`cdk diff`
### stackの削除
`cdk destroy <stack名>`
### stackのエラーのヘルプ
`cdk doctor`
### CfnParameterで作成したparameterの変更
`cdk deploy --parameters duration=9`  
```
const duration = new CfnParameter(this, 'duration', {
  type: 'Number',
  default: 6,
  minValue: 1,
  maxValue: 10
})
```