var windowAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.onRequestAnimationFrame || window.msRequestAnimationFrame || null;
var allElementsInView = [];
var bpad = new Bpad();
var stickFigure = new Element(50,50, 'img/stick_figure.png', 'theStickFigure', 'sprite');
var animate = new Animate();
jQuery(function(){

var Game = function(){
	this.initialize = function(){
		container = jQuery('#viewport');
		container.append(stickFigure.sprite);
		this.runLoop();
	};
	this.runLoop = function()
	{
		if (windowAnimFrame)
		{
			this.mainLoop();
			windowAnimFrame(this.runLoop.bind(this));
		} else {
			var fps = 1000 / 60; // 60 fps
			setInterval(this.mainLoop, fps);
		}
	};
	this.mainLoop = function(){
		animate.animLoop();
	};
	this.initialize();
};
var game = new Game();
});