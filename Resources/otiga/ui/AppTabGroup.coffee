exports.AppTabGroup = ->
  self = Ti.UI.createTabGroup()
  for argument in arguments
    tab = Ti.UI.createTab(argument)
    self.currentTab = tab if _i is 0
    self.addTab(tab)
  
  self.addEventListener 'focus', (e) ->
    self.currentTab = e.tab
  
  self.open()
  self
