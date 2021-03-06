// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  makeDancer.prototype.step.call(this);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(this.top, this.left);
}




makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(){
  // var styleSettings = {
  //   top: top,
  //   left: 0
  // };
  //this.$node.css(styleSettings);
  this.$node.animate({left:'0'}, 2000)
};

makeDancer.prototype.scatter = function(){
  // var styleSettings = {
  //   top: top,
  //   left: left
  // };
  //this.$node.css(styleSettings);
  this.$node.animate({left: this.left}, 2000)
};



makeDancer.prototype.removeNode = function(){
  this.$node.remove();
};