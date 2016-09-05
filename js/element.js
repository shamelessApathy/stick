// Base class for any element in the game
var Element = function(x, y, imagePath, id , className)
{
	this.initialize = function(){
		this.x = x;
		this.y = y;
		this.className;
		this.id = id;
		// If ID is undefined then assign a random string for ID
		if (typeof this.id === 'undefined' )
		{
			this.id = Math.random().toString(36).substring(7);
		};					
		this.imagePath = imagePath;
		this.sprite = jQuery("<img id='"+ this.id +"' src='" + this.imagePath + "''>");
		allElementsInView.push(this);
	};
	this.initialize();
	this.draw = function(){
		this.sprite.css({
			'top' : this.y,
			'left': this.x
		});
	};
}