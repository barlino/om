otiga = this.otiga
###
* helper to find an element, can be used when there are
* multiple elements in a row and you need to find one
*
* @param _o {Object} parent object to find elements in
* @param _i {String} id of the element you are looking for
###

otiga.util.findElement = (_o, _i) ->
	for x in _o.children
		if x.id is _i
			return x
	return ""


