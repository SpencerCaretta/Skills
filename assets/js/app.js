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



$("#add-button").on("click", function(event) {
    //Don't refresh the page!
    event.preventDefault();

    var skill = $("#skillInput").val() + " <button>+</button>";
    var skills = "</br> <div>" + skill + "</div>"
    $("#added-skill").append(skills);
})