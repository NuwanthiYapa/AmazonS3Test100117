let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
    
    ddb.put({
        TableName: 'nuwanthi_table',
        Item: {}
    }, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Data", data);
        }
    });


}