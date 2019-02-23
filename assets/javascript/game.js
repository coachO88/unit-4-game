//Global variables
var randomNumber;
var wins= 0;
var losses= 0;
var previous= 0;

var setupGame= function(){
$(".crystals").empty();    
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
    
            $(".crystals").append(crystal);
    }
};

setupGame();

$(".crystal").on('click', function(){

    var result;

    var num= parseInt($(this).attr('randomData'));

    previous+= num;
    console.log(previous);

    if(previous > randomNumber){
        lost++;
        $(".losses").html(losses);
        setupGame();

        console.log("You Lose!!")
    }
    else if(previous === randomNumber){
        win++;
        $(".win").html(wins);
        setupGame();
        console.log("You Win!!")
    }
});