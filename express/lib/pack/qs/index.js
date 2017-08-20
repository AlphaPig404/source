"use strict"

var stringify = require('./stringify')

var parse = require("./parse")

var formats = require("./formats")

// 返回qs的三个方法
module.exports = {
  formats: formats,
  parse: parse,
  stringify: stringify
}