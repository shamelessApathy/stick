
var windowAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.onRequestAnimationFrame || window.msRequestAnimationFrame || null;
var allElementsInView = [];
var bpad = new Bpad();
var stickFigure = new Element(0,0, 'img/anime.gif', 'theStickFigure', 'sprite');
var animate = new Animate();
var doc = document.documentElement;
var canvas = document.getElementsByTagName('canvas')[0];
var spritesheet = new SpriteSheet('img/anime.gif', 65, 96, 5, 5);
var ctx = canvas.getContext('2d');
var fullScreen = function(element)   {
  if(doc.requestFullScreen) {
    doc.requestFullScreen();
  } else if(doc.webkitRequestFullScreen ) {
    doc.webkitRequestFullScreen();
  } else if(doc.mozRequestFullScreen) {
    doc.mozRequestFullScreen();
  }
};
jQuery(function(){
jQuery('.fullscreen-button').on('click', fullScreen);
var Game = function(){
	this.initialize = function(){
		container = jQuery('#viewport');
		container.append(spritesheet.draw(0,0));
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