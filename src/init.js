$(document).ready(function() {
  window.dancers = [];

  $('.toggleBackground').on('click', function(event) {
    $('body').toggleClass('on')
  });

  $('.addParrot').on('click', function(event) {
      var context = this;
      var parrotMaker = function() {
      var dancerMakerFunctionName = $(context).data('dancer-maker-function-name');
      var dancerMakerFunction = window[dancerMakerFunctionName];
      var dancer = new dancerMakerFunction(
        $("body").height() * Math.random(),
        $("body").width() * Math.random(),
        Math.random() * 1000
      );

      window.dancers.push(dancer);

      $('body').append(dancer.$node);
    }

    var i = 50;
    while(i > 0){
      parrotMaker();
      i--;
    }
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker fun ctions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);
  });



  $('.spreadOut').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var dancer1 = window.dancers[i];
        for (var j = 1; j < window.dancers.length; j++){
          var dancer2 = window.dancers[j];

          var verticalSq = Math.pow((dancer1.top - dancer2.top), 2);
          var horizontalSq = Math.pow((dancer1.left - dancer2.left), 2);
          var distance = Math.sqrt(verticalSq + horizontalSq);
          if (distance < 300) {
            dancer1.$node.animate({ "margin-left": 100, "margin-top": 100}, 2000)
            dancer2.$node.animate({ "margin-left": 100, "margin-top": 100}, 2000)
            console.log("Moving away!");
          }
        }
      }
  });



  $('.lineUp').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
    }
  });

  $('.scatter').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      console.log(window.dancers[i])
      var currentDancer = window.dancers[i];
      //animate({left:'0'}, 2000)
      currentDancer.scatter();
      //currentDancer.setPosition(currentDancer.top, currentDancer.left);
    }
  });

  $('.reset').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].removeNode();
    }
  });


});

