var https = require('https');
var async = require('async');
var sslLabsApi = require('./ssllabs-api');

var testhost = 'www.f5.com';
var sslApi = new sslLabsApi(testhost);
// var intervalObj = undefined;
sslApi.on('analyzeData', function(data){
	sslApi.getEndpointData(sslApi.getEndpointIpAddr(data));
});

sslApi.on('response', function(data){
	console.log('Received general response data: "' + JSON.stringify(data) + '"');
});

sslApi.on('endpointData', function(data){
	console.log('Received endpoints data: "' + JSON.stringify(data) + '"');
});

sslApi.on('statusCodesData', function(data){
	console.log('Received status-codes data: "' + JSON.stringify(data) + '"');
});

sslApi.info();
sslApi.analyzeHostNew();

