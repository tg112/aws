import { Stack } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/lib/aws-dynamodb';

export class GenericTable {

    public constructor(
        private name: string,
        private primarykey: string,
        private stack: Stack,
    ) {
        this.initialize();
    }
    
    private initialize() {
        this.createTable();
    }
    
    private createTable() {
        new Table(this.stack, this.name, {
            partitionKey: {
                name: this.primarykey,
                type: AttributeType.STRING
            },
            tableName: this.name
        })
    }
}