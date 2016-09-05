
var windowAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.onRequestAnimationFrame || window.msRequestAnimationFrame || null;
var allElementsInView = [];
var bpad = new Bpad();
var stickFigure = new Element(0,0, 'img/stick_figure.png', 'theStickFigure', 'sprite');
var animate = new Animate();
var viewport = document.documentElement;
var fullScreen = function(element)   {
  if(viewport.requestFullScreen) {
    viewport.requestFullScreen();
  } else if(viewport.webkitRequestFullScreen ) {
    viewport.webkitRequestFullScreen();
  } else if(viewport.mozRequestFullScreen) {
    viewport.mozRequestFullScreen();
  }
};
jQuery(function(){
jQuery('.fullscreen-button').on('click', fullScreen);
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