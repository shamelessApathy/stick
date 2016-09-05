

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
  this.clearOpacity = function(){
    this.upButton.css({'opacity':'0'});
    this.rightButton.css({'opacity':'0'});
    this.downButton.css({'opacity':'0'});
    this.leftButton.css({'opacity':'0'});
  };
  this.isNewTargetDpadButton = function(target){
    var id = target.id;
    var button = ['bpad-up', 'bpad-right', 'bpad-down', 'bpad-left'];
   
    this.clearOpacity();
    switch (id)
    {
      case 'bpad-right': this.startHandler('right', this.rightButton)
      break;
      case 'bpad-down': this.startHandler('down', this.downButton)
      break;
      case 'bpad-left': this.startHandler('left', this.leftButton)
      break;
      case 'bpad-up': this.startHandler('up', this.upButton)
      break;

    }

  }
  this.buttonsDown = [];
      this.upButton = jQuery('#bpad-up');
      this.rightButton = jQuery('#bpad-right');
      this.downButton = jQuery('#bpad-down');
      this.leftButton = jQuery('#bpad-left');

// Touch Start Handlers  ---- Starts the startHandler 
// function that pushes to the buttonsDown array and also adds opacity over the dpad button being pressed
      this.upButton.on('touchstart', function(){
        this.startHandler('up', this.upButton);
      }.bind(this));
      this.rightButton.on('touchstart', function(){
        console.log('right button touchstart firing');
        this.startHandler('right', this.rightButton);
      }.bind(this));
      this.downButton.on('touchstart', function(){
        this.startHandler('down', this.downButton);
      }.bind(this));
      this.leftButton.on('touchstart', function(){
        this.startHandler('left', this.leftButton);
      }.bind(this));
      // Touch End Handlers
      this.upButton.on('touchend', function(){
        this.endHandler('up', this.upButton);
      }.bind(this));
      this.rightButton.on('touchend', function(){
        this.endHandler('right', this.rightButton);
      }.bind(this));
      this.downButton.on('touchend', function(){
        this.endHandler('down', this.downButton);
      }.bind(this));
      this.leftButton.on('touchend', function(){
        this.endHandler('left', this.leftButton);
      }.bind(this));
// touchMove and the like down here, trying to write it so that you can keep your finger on the screen
// and still be able to move to another direction on the dpad
      this.upButton.on('touchmove', function(e){
        var event = e;
        var myLocation = event.originalEvent.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        this.endHandler('up', this.upButton);
        this.isNewTargetDpadButton(realTarget);
      }.bind(this));
      this.rightButton.on('touchmove', function(e){
        console.log('touchmove firing for rightbutton');
        var event = e;
        var myLocation = event.originalEvent.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        this.endHandler('right', this.rightButton);
        this.isNewTargetDpadButton(realTarget);
      }.bind(this));
      this.downButton.on('touchmove', function(e){
        var event = e;
        var myLocation = event.originalEvent.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        this.endHandler('down', this.downButton);
        this.isNewTargetDpadButton(realTarget);
      }.bind(this));
      this.leftButton.on('touchmove', function(e){
        var event = e;
        var myLocation = event.originalEvent.changedTouches[0];
        var realTarget = document.elementFromPoint(myLocation.clientX, myLocation.clientY);
        this.endHandler('left', this.leftButton);
        this.isNewTargetDpadButton(realTarget);
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
   this.startHandler = function(button, buttonVar)
   {  
      buttonVar.css({'opacity':'0.8'});  
      this.buttonsDown.push(button);
   };

   this.endHandler = function(button, buttonVar)
   {
          buttonVar.css({'opacity':'0'});
          var index = this.buttonsDown.indexOf(button);
          this.buttonsDown.splice(index, 1);
   };


   this.initialize();
};

