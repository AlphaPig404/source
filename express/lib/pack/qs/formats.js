'use strict'

var replace = String.prototype.replace

var percentTwenties = /%20/g

module.exports = {
  'default': 'REC3986',
  formatters:{
    RFC1738: function(value){
      return replace.call(value,percentTwenties,'+')
    },
    REC3986: function(value){
      return value
    }
  },
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
}