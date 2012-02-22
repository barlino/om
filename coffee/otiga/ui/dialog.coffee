exports.alert = (_setting) ->
  setting = 
    title: ''
    message: ''
    okLabel: 'OK'
    ok: null
    
  setting = require('otiga/helpers/util').mix setting, _setting
  alertDialog = Titanium.UI.createAlertDialog(
    title: setting.title
    message: setting.message
    buttonNames: [setting.okLabel]
  )
  alertDialog.addEventListener 'click', (e) ->
    if typeof setting.ok is 'function'
      setting.ok.call()
      
  alertDialog.show()

exports.confirm = (_setting) ->
  setting = 
    title: ''
    message: ''
    okLabel: 'OK'
    cancelLabel: 'Cancel'
    ok: null
    cancel: null
    cancelIndex: 1
    
  setting = require('otiga/helpers/util').mix setting, _setting
  confirmDialog = Titanium.UI.createAlertDialog(
    title: setting.title
    message: setting.message,
    buttonNames: [setting.cancelLabel, setting.okLabel]
    cancel: 0
  )
  confirmDialog.addEventListener 'click', (e) ->
    Otiga.info(e.type)
    if e.cancel is e.index
      if typeof setting.cancel is 'function'
        setting.cancel.call(@)
    else
      if typeof setting.ok is 'function'
        setting.ok.call(@)
  confirmDialog.show()