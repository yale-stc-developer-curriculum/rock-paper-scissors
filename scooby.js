$(document).ready(function() {
    var snewsClicks = 0; //keeps track of clicks on snews button
    var data = new Array(); //store list of snews
    data[0] = "Shots fired in New Haven, Camera battery dies";
    data[1] = "Voldemort tired of walking barefoot, Asks cobbler to mend his sole";
    data[2] = "Laundry room ghost now single, Looking for ghoul mate";
    data[3] = "Halloween season approaching, Salovey mustaches flying off the shelves";
    data[4] = "Gym Trainer has Years of Experience Under Belt, Also Too Many Adipose Cells";
    data[5] = "\"Google\" Not Yet Adverb, World Still OK";
    data[6] = "New Study Shows Life Correlated With Death";
    data[7] = "New Study Shows 50% of Studies Redundant";
    data[8] = "Computer Beats Human at Scrabble, Loses at Boxing";
    data[9] = "Poopetrator Still On the Loose, Also His Bowels";
    data[10] = "Student Finishes Chapstick Before Losing It";
    data[11] = "Rosa Parks Commemorated on Black Friday";
    data[12] = "Edward Snowden Takes a Leak";
    data[13] = "Student Reads Payne Whitney Email";
    data[14] = "Line for Men's Room Longer than for Women's Room";
    data[15] = "Student In Dining Hall Picks Up Spoon on First Try";

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

    $("#iList").click(function() {
        window.location = "https://dl.dropboxusercontent.com/u/12532289/cList.pdf";
    });

    $("#iCartoon").click(function() {
        window.location = "./media/iCartoon.jpg";
    });

    var timer = setInterval(function() {
        $("#carousel ul").animate({marginLeft:-1200},1000,function(){
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({marginLeft:0});
        })
    }, 3000); //update freq in ms
});