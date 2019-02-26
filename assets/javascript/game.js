//Global variables
var randomNumber;
var wins= 0;
var losses= 0;
var previous= 0;

var setupGame= function(){
$(".crystals").empty();   
var images=[
    'url("../images/soul.JPG")',
    'url("../images/reality.JPG")',
    'url("../images/space.JPG")',
    'url("../images/time.JPG")'
] 
randomNumber = Math.floor(Math.random() * 69) + 30;
console.log("Random Nummber:" + randomNumber);

$(".number").html('Random Number: ' + randomNumber);

for (var i=0; i < 4; i++){

     var randomCrystalValue=Math.floor(Math.random() * 11) + 1;
     console.log(randomCrystalValue); 

     

    var crystal= $("<div>");
         crystal.attr({
             "class": 'crystal',
            "randomData": randomCrystalValue});

            crystal.css({
                "background-image": "url('" + images[i] + "')",
                "background-size": "cover"
            });
    
            $(".crystals").append(crystal);
    }
    $(".myScore").html("My Score:" + previous);
};

setupGame();


//Event Deligation
$(document).on('click', ".crystal", function(){

    var result;

    var num= parseInt($(this).attr('randomData'));

    previous+= num;

    $(".myScore").html("My Score:" + previous);
    console.log(previous);

    if(previous > randomNumber){
        lost++;
        $(".losses").html("Losses:" + losses);
        previous= 0;
        setupGame();

        console.log("You Lose!!")
    }
    else if(previous === randomNumber){
        win++;
        $(".win").html("Wins:" + wins);
        previous= 0;
        setupGame();
        console.log("You Win!!")
    }
});