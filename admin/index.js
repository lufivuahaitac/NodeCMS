var express = require('express')
var router = express.Router()
require('marko/node-require').install();
var adminTpl = require('./views/default.marko');
var index = require('./views/index.marko')
var newpost = require('./views/newpost.marko')

router.get('/', function (req, res) {
  tView('./views/default.marko',{},res)
})

router.get('/newpost', function (req, res) {
  tView('./views/newpost.marko',{},res)
})

tView = function(view, data, out) {
  var viewFile = require(view);
  viewFile.render(data, out)
}
module.exports = router
