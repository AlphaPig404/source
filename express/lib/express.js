'use strict'
/**
 * Module dependencies
 */

var EventEmitter = require("events").EventEmitter
var mixin = require("merge-descriptors")
var proto = require("./application")
var Route = require("./router/route")
var Router = require("./router")
var req = require("./request")
var res = require("./response")

/**
 * Expose 'createApplication()'
 */
exports = module.exports = createApplication

/**
 * Create an express application
 * @return {Function}
 * @api public
 */
function createApplication(){
  var app = function(req,res,next){
    app.handle(req,res,next)
  }
  mixin(app,EventEmitter.prototype,false)
  mixin(app,proto,false)
  
  // expose the prototype that will get set on requests
  app.request = Object.create(req,{
    app:{
      configurable: true,
      enumerable: true,
      writable: true,
      value: app
    }
  })
  // expose the prototype that will get set on responses
  app.respose = Object.create(res,{
    app:{
      configurable: true,
      enumerable: true,
      writable: true,
      value: app
    }
  })

  app.init()
  return app
}

/**
 * Expose the prototypes
 */
exports.application = proto
exports.request = req
exports.respose = res

/**
 * Expose the construtors
 */
exports.Route = Route
exports.Router = Router

/**
 * Expose middleware
 */
exports.query = require('./middlewore/query')
exports.statice = require('serve-statice')

/**
 * Replace removed middleware with an appropriate error message
 */
[
  "json",
  "urlencoded",
  "bodyParser",
  "compress",
  "cookieSeesion",
  "session",
  "logger",
  "cookieParser",
  "favicon",
  "resposeTime",
  "errorHandler",
  "timeout",
  "methodOverride",
  "vhost",
  "csrf",
  "directory",
  "limit",
  "multipart",
  "staticCache"
].forEach(function(name){
  Object.defineProperty(exports,name,{
    get: function () {
      throw new Error('Most middleware (like ' + name + ') is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.');
    },
    configurable: true
  })
})

