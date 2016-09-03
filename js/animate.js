var Animate = function(){
	this.borderCheck = function(el){
		var element = el;
		var x = el.x;
		var y = el.y;
		var outerHeight = $(element.sprite).outerHeight();
		var outerWidth = $(element.sprite).outerWidth();
		var bottomY = el.y + outerHeight;
		console.log(x);
		if (el.y + outerHeight >= 309 || el.y <= -10 || el.x <= -7 || el.x  + outerWidth >= 555 )
		{
			return false;
		}
		else
		{
			return true;
		}
	};	
	this.figure = function(){
		console.log(bpad.isDown('up'));
		if(bpad.isDown('up') === 0)
		{
			stickFigure.y -= 2;
		}
		if(bpad.isDown('down') === 0)
		{
			stickFigure.y += 2;
		}
		if(bpad.isDown('left') === 0)
		{
			stickFigure.x -= 2;
		}
		if(bpad.isDown('right') === 0)
		{
			stickFigure.x += 2;
		}
		if(this.borderCheck(stickFigure))
		{
		stickFigure.draw();
		}
		else
		{
			console.log('you have gone outside the border!!');
		}
	};
	this.animLoop = function(){
		this.figure();
	}.bind(this);
	var int = setInterval(function(){
	//console.log(this.bpad.isDown('up'));
	}, 1000);
}