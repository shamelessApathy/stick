

Bpad = function() 
{

   this.initialize = function()
   {
    // This is a way to prevent the dialog box in google chromes device spoofer from popping up on a long touch event 
  window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
};
  this.buttonsDown = [];
      this.upButton = jQuery('#bpad-up');
      this.rightButton = jQuery('#bpad-right');
      this.downButton = jQuery('#bpad-down');
      this.leftButton = jQuery('#bpad-left');

// Touch Start Handlers  ---- Starts the startHandler 
// function that pushes to the buttonsDown array and also adds opacity over the dpad button being pressed
      this.upButton.on('touchstart', function(){
        this.upButton.css({'opacity':'0.8'});
        this.startHandler('up');
      }.bind(this));
      this.rightButton.on('touchstart', function(){
        this.startHandler('right');
        this.rightButton.css({'opacity':'0.8'});
      }.bind(this));
      this.downButton.on('touchstart', function(){
        this.startHandler('down');
        this.downButton.css({'opacity':'0.8'});
      }.bind(this));
      this.leftButton.on('touchstart', function(){
        this.startHandler('left');
        this.leftButton.css({'opacity':'0.8'});
      }.bind(this));
      // Touch End Handlers
      this.upButton.on('touchend', function(){
        this.endHandler('up');
        this.upButton.css({'opacity':'0'});
      }.bind(this));
      this.rightButton.on('touchend', function(){
        this.endHandler('right');
        this.rightButton.css({'opacity':'0'});
      }.bind(this));
      this.downButton.on('touchend', function(){
        this.endHandler('down');
        this.downButton.css({'opacity':'0'});
      }.bind(this));
      this.leftButton.on('touchend', function(){
        this.endHandler('left');
        this.leftButton.css({'opacity':'0'});
      }.bind(this));
   };
   /*this.opacity(button)
   {
    switch (button)
    {
      case 'up': this.upButton.attr
    }
   }*/
   this.isDown = function(button)
   {
       return this.buttonsDown.indexOf(button);
   };
   this.startHandler = function(button)
   {    
      this.buttonsDown.push(button);
   };

   this.endHandler = function(e, button)
   {
           var index = this.buttonsDown.indexOf(button);
           this.buttonsDown.splice(index, 1);
   };


   this.initialize();
};

