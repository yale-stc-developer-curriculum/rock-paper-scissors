$(document).ready(function() {
    var snewsClicks = 0; //keeps track of clicks on snews button
    var data = new Array(); //store list of snews
    data[0] = "rock";
    data[1] = "paper";
    data[2] = "scissors";

    $("#snews").click(function() {
        if(snewsClicks<5){
            var snewsText = data[Math.floor(Math.random() * data.length)]; //randomly select string from array
            $("#snewsText").val(snewsText);
            snewsClicks++;
        }else{ //rickroll
            window.location = "http://goo.gl/uw6jv4"
            snewsClicks=0;
        }
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