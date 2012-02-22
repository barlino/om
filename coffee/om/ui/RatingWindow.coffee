om.ui.createRatingWindow = (_args) ->
  win = Ti.UI.createWindow()
  
  om.ui.ratingView = require('otiga/ui/RatingView')
  
  ratingView = new om.ui.ratingView.createRatingView(3.5, 6)
  ratingView.top = 10
  ratingView.left = 30
  
  win.add(ratingView)
  
  win.addEventListener 'ratingChanged', (e) ->
    Otiga.info(e.currentValue)
    false
  win