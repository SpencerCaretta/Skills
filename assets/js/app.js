// Initialize Firebase - going to save user data (skills and experience)
var config = {
    apiKey: "AIzaSyCHazuiREUNSuQohL-1AD8coodrbfoFP1E",
    authDomain: "skills-project-5439a.firebaseapp.com",
    databaseURL: "https://skills-project-5439a.firebaseio.com",
    projectId: "skills-project-5439a",
    storageBucket: "skills-project-5439a.appspot.com",
    messagingSenderId: "13726624235"
};
firebase.initializeApp(config);

var database = firebase.database();

//on load, make stopwatch function
window.onload = function() {
    $("#finish").on("click", stopwatch.finish);
    $("#pause").on("click", stopwatch.pause);
    $("#reset").on("click", stopwatch.reset);
    $("#start").on("click", stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 0,

  reset: function() {

    stopwatch.time = 0;

    // DONE: Change the "display" div to "00:00."
    $("#display").text("0");

  },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },
  pause: function() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  finish: function() {

    var hours = stopwatch.time / 3600

    var experienceGained = hours * 100
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    // var converted = stopwatch.timeConverter(stopwatch.time);
    //Grab current time in "time-doing-skill" and added our converted stopwatch time
    $("#time-doing-skill").text("You have gained: " + experienceGained + " experience!");

    //Add experience to firebase

    //Logs total experience

  },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    // var converted = stopwatch.timeConverter(stopwatch.time);
    // console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(stopwatch.time);
  },
  // timeConverter: function(t) {

  //   var minutes = Math.floor(t / 60);
  //   var seconds = t - (minutes * 60);

  //   if (seconds < 10) {
  //     seconds = "0" + seconds;
  //   }

  //   if (minutes === 0) {
  //     minutes = "00";
  //   }
  //   else if (minutes < 10) {
  //     minutes = "0" + minutes;
  //   }

  //   return minutes + seconds;
  // }
};

$("#add-button").on("click", function(event) {
    //Don't refresh the page!
    event.preventDefault();
    //Add the Skill that the user types
    var input = $("#skillInput").val() + " <button>+</button>";
    var skills = "</br> <div>" + input + "</div>"
    $("#added-skill").append(skills);
})
