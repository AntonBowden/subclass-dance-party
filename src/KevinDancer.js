var KevinBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('kevin');

  var colors = ['#ff0000', '#00ff00', '#0000ff'];
  var random_color = colors[Math.floor(Math.random() * colors.length)];

  // this.$node.css('border', random_color);

  this.$node.hover(function(event) {
    $(this).fadeOut( 500 ).fadeIn( 500 );
  });

};

KevinBlinkyDancer.prototype = Object.create(makeDancer.prototype);

KevinBlinkyDancer.prototype.constructor = KevinBlinkyDancer;

// KevinBlinkyDancer.prototype.step = function() {
//     //console.log(this.step);
//     //var result = this.step;
//     // call the old version of step at the beginning of any call to this new version of step
//     makeDancer.prototype.step.call(this);
//     //this.step.call(this);
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     // this.$node.animate({marginLeft:'0px'})
//     // this.$node.animate({marginLeft:'200px'})
// };