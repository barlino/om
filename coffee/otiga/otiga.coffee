###
initialal
###
Otiga = 
  debug : require('otiga/helpers/util').debug
  warn : require('otiga/helpers/util').warn
  info : require('otiga/helpers/util').info
  error : require('otiga/helpers/util').error
  getConfig : require('otiga/helpers/util').getConfig
  setConfig : require('otiga/helpers/util').setConfig
  alert : require('otiga/ui/dialog').alert
  confirm : require('otiga/ui/dialog').confirm
  ajax : require('otiga/helpers/ajax').ajax
  mix :  require('otiga/helpers/util').mix

this.Otiga = Otiga
