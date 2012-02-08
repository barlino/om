otiga = this.otiga
### 
Our custom rating view component takes an initial
rating, and a maximum value for the rating, which
will be used to render the view
###
otiga.ui.createRatingView = (initialRating, max) ->
  #create and populate the rating object
  instance = Ti.UI.createView(
    layout:'horizontal'
    height:30
  )
  
  ###
  instance variable indicating rating. 
  this data is private to the object, 
  since it is declared in this constructor function
  ###
  rating = 0
  firstStarLeftOffset = 45
  
  ###
  another instance variable containing an array of 
  ImageView objects representing the stars of the rating
  ###
  stars = []
  
  #Create the necessary view structures to represent the
  #current value of the rating
  for i in [0...max]
    star = Ti.UI.createImageView(
      height:24
      width:24
      left:5
      id: i + 1
    )

    (->
      ###
      we need to capture the value of "i"
      for use in click handler functions
      on our image views.  To do this, we
      use a closure (this self-calling function)
      ###
      index = i
      star.addEventListener('click', ->
        # setRating(index+1)
      )

      star.addEventListener('touchstart', (e) ->
        setRating(e.source.id)
        otiga.util.logger.debug(e)
      )
      star.addEventListener('touchmove', (e) ->
        i = (e.globalPoint.x - firstStarLeftOffset - star.left ) / star.width
        setRating(i)
      )
      star.addEventListener('touchend', (e) ->
        # setRating(e.source.id)
        otiga.util.logger.debug(e)
      )  



      false
    )()
    
    stars.push(star)
  
  instance.add(stars)
  
  textValue = Ti.UI.createLabel(
    text:rating
    height:24
    width:'auto'
    left:5
    color:'#787878'
    font:
      fontSize:12
  )
  instance.add(textValue)
  
  setRating = (newRating) ->
    rating = newRating
    
    instance.fireEvent('ratingChanged', 
      currentValue:rating
    )
    
    textValue.text = String(rating).replace('.0','')
    for i in [0...stars.length]
      if i >= rating
        stars[i].image = 'images/star_off.png'
      else if rating > i and rating < i+1
        stars[i].image = 'images/star_half.png'
      else
        stars[i].image = 'images/star.png'

  instance.changeRating = setRating;
  
  setRating(initialRating);
  return instance

