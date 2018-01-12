let AWS = require('aws-sdk');
const sqs = new AWS.SQS();
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {

    ddb.put({
        TableName: 'hiruS3Sample123',
        Item: {}
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

    sqs.sendMessage({
        MessageBody: 'your message body should be assigned here',
        QueueUrl: 'https://sqs.us-east-1.amazonaws.com/492230085248/nuwanthi_queue1',
        DelaySeconds: '0',
        MessageAttributes: {
            "name": {
                "DataType": "String",
                "StringValue": "hiru"
            },
            "name": {
                "DataType": "String",
                "StringValue": "thuva"
            }
        }
    }, function (err, data) {
        if (err) {
            console.log("Receive Error", err);
            // your logic (logging etc) to handle failures, should be here
        } else {
            // your logic (logging etc) to handle successful completion, should be here
        }
    });



}