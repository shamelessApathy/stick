var Animate = function(){
	this.borderCheck = function(el){
		var element = el;
		var x = el.x;
		var y = el.y;
		var outerHeight = $(element.sprite).outerHeight();
		var outerWidth = $(element.sprite).outerWidth();
		var bottomY = el.y + outerHeight;
		console.log(x);
		if (el.y + outerHeight >= 300)
		{
			return 'down';
		}
		else if( el.y <= -10 )
		{
			return 'up';
		}
		else if( el.x <= -6 )
		{
			return 'left';
		}
		else if( el.x  + outerWidth >= 555 )
		{
			return 'right';
		}
	};	
	this.figure = function(){
		console.log(bpad.isDown('up'));
		if(bpad.isDown('up') === 0 && this.borderCheck(stickFigure) !== 'up')
		{
			stickFigure.y -= 2;
			stickFigure.draw();
		}
		if(bpad.isDown('down') === 0 && this.borderCheck(stickFigure) !== 'down')
		{
			stickFigure.y += 2;
			stickFigure.draw();
		}
		if(bpad.isDown('left') === 0 && this.borderCheck(stickFigure) !== 'left')
		{
			stickFigure.x -= 2;
			stickFigure.draw();
		}
		if(bpad.isDown('right') === 0 && this.borderCheck(stickFigure) !== 'right')
		{
			stickFigure.x += 2;
			stickFigure.draw();
		}
	};
	this.animLoop = function(){
		this.figure();
	}.bind(this);
	var int = setInterval(function(){
	//console.log(this.bpad.isDown('up'));
	}, 1000);
}