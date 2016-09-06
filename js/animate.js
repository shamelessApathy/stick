var Animate = function(){
	this.borderCheck = function(el){
		var element = el;
		var x = el.x;
		var y = el.y;
		var outerHeight = $(element.sprite).outerHeight();
		var outerWidth = $(element.sprite).outerWidth();
		var bottomY = el.y + outerHeight;
		
		var downTest = function(){
			if (el.y + outerHeight >= 300)
			{
				return true;
			}
			else {
				return false;
			}
		};
		var upTest = function(){
			if( el.y <= -10 )
			{
				console.log('up test returning true');
				return true;
			}
			else {
				return false;
			}
		};
		var leftTest = function(){
			if( el.x <= -6 )
			{
				return true;
			}
			else {
				return false;
			}
		};
		var rightTest = function(){
			if( el.x  + outerWidth >= 555 )
			{
				return true;
			}
			else {
				return false;
			}
		};
		if (downTest() && leftTest())
		{
			return ['down','left'];
		}
		else if (upTest() && leftTest())
		{
			return ['up','left'];
		}
		else if (rightTest() && upTest())
		{
			return ['up','right'];
		}
		else if (rightTest() && downTest())
		{
			return ['down','right'];
		}
		else if (downTest())
		{
			return ['down'];
		}
		else if (upTest())
		{
			console.log('uptest firing');
			return ['up'];
		}
		else if (leftTest())
		{
			return ['left'];
		}
		else if (rightTest())
		{
			return ['right'];
		}
		else
		{
			return [];
		}
	};	
	this.figure = function(){
	
		if(bpad.isDown('up') === 0 && this.borderCheck(stickFigure).indexOf('up') === -1)
		{
			stickFigure.y -= 2;
			stickFigure.draw();
		}
		if(bpad.isDown('down') === 0 && this.borderCheck(stickFigure).indexOf('down') === -1)
		{
			stickFigure.y += 2;
			stickFigure.draw();
		}
		if(bpad.isDown('left') === 0 && this.borderCheck(stickFigure).indexOf('left') === -1)
		{
			stickFigure.x -= 2;
			stickFigure.draw();
		}
		if(bpad.isDown('right') === 0 && this.borderCheck(stickFigure).indexOf('right') === -1)
		{
			stickFigure.x += 2;
			stickFigure.draw();
		}
	};
	this.animLoop = function(){
		this.figure();
	}.bind(this);
	var int = setInterval(function(){

	}, 1000);
}