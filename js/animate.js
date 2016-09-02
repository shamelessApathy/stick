var Animate = function(){
	
	this.figure = function(){
		console.log(bpad.isDown('up'));
		if(bpad.isDown('up') === 0)
		{
			stickFigure.y -= 1;
			console.log(stickFigure.y);
		}
		if(bpad.isDown('down') === 0)
		{
			stickFigure.y += 1;
			console.log(stickFigure.y);
		}
		stickFigure.draw();
	}
	this.animLoop = function(){
		this.figure();
	}.bind(this);
	var int = setInterval(function(){
	//console.log(this.bpad.isDown('up'));
	}, 1000);
}