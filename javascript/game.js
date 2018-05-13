//character stats and global variables
const characters = ['Kaede', 'Kirumi', 'Miu', 'Monokuma'];
const Kaede = {
    health: 100,
    attack: 10,
    counter: 15,
};
const Kirumi = {
    health: 120,
    attack: 8,
    counter: 17
};
const Miu = {
    health: 150,
    attack: 6,
    counter: 19,
};
const Monokuma = {
    health: 180,
    attack: 5,
    counter: 22,
    };
console.log(Kaede.health);
console.log(Monokuma.attack);
//Document check
$(document).ready(function() {
    $('.enemy').hide();
    //functions
    
    
    //song ignore this it was just for fun lol
    var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "images/soundtrack.mp3");    
    $(".column").on("click", "#character1", function() {
          audioElement.play();
        }).on("click", "#character2", function() {
          audioElement.pause();
        });
    











    //on.click starts here for character selection, hides unselected characters.
    $(".container").on("click", ".select", function() {
    // $(".container").on("click", "#character1", function() {
        const hideChosen = function(x){
        if (x == 0){
            $('#enemy1').hide();
        } else if (x == 1){
            $('#enemy2').hide();
        } else if (x == 2){
            $('#enemy3').hide();
        } else {
            $('#enemy4').hide();
        }}
   		var userPick = $(this).val();
        var characterSelected = characters[userPick];
        //hides unclicked buttons and keeps character selection.
        $('.character').toggle();
        $(this).show();
        //shows enemies
        $('.enemy').show();
        hideChosen(userPick);
        console.log(userPick);
        console.log(characterSelected);

        var characterBtn = $("<button>");





        






















    }).on("click", "#character2", function() {
        }).on("click", "#character3", function() {
            }).on("click", "#character4", function() {







});// End of .on(click) function





    //Begin on.click section to attack.
    $('#attack').on('click', function(){
        counter += 1;














    });//end of attack click














}); // Document.ready ends here.