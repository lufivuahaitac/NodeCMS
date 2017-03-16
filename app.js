"use strict";

global.APP_DIR = __dirname;
global.appConfigFile = '/config.js';

global.appConfigs = require(APP_DIR + appConfigFile);

var express = require('express')
var admin = require('./admin/index');
var app = express()
app.use(express.static('./admin/views/public'))
app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.use('/admin',admin);

app.listen(appConfigs.preload.port, function () {
  console.log('Example app listening on port 3000!')
})
