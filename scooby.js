$(document).ready(function() {
    var snewsClicks = 0; //keeps track of clicks on snews button
    var data = new Array(); //store list of snews
    data[0] = "rock";
    data[1] = "paper";
    data[2] = "scissors";
    $("#p1move").val("---");
    $("#p2move").val("---");

    $("#p1").click(function() {
        var text = data[Math.floor(Math.random() * data.length)]; //randomly select string from array
        $("#p1move").val(text);
        showWinner();
    });

    $("#p2").click(function() {
        var text = data[Math.floor(Math.random() * data.length)]; //randomly select string from array
        $("#p2move").val(text);
        showWinner();
    });

    $("#feedback").click(function() {
        $("#feedbackText").val("Thanks for your feedback");
    });

    //click on carousel images for more
    $("#iShort").click(function() {
        window.location = "https://dl.dropboxusercontent.com/u/12532289/cShort.pdf";
    });

    var timer = setInterval(function() {
        $("#carousel ul").animate({marginLeft:-1200},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    }, 3000); //update freq in ms
});


// void showWinner() {
//     if ($("#p1move").text != "---" && $("#p2move").text != "---")
//         alert("asdfasdf");
// }