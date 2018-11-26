$("#add-button").on("click", function(event) {
    //Don't refresh the page!
    event.preventDefault();

    var skill = $("#skillInput").val() + "<button>+</button>";
    var skills = "</br> <div>" + skill + "</div>"
    $("#added-skill").append(skills);
})