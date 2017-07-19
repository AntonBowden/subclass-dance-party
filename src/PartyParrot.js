var PartyParrot = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<img src="./Assets/middleparrot.gif"></img>').addClass("partyP");

  this.$node.mouseover(function(event) {
    $(this).animate({marginLeft: Math.random() * 200, marginTop: Math.random() * 200});
  });
};

PartyParrot.prototype = Object.create(makeDancer.prototype);

PartyParrot.prototype.constructor = PartyParrot;

PartyParrot.prototype.step = function() {
    //console.log(this.step);
    //var result = this.step;
    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    //this.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

};