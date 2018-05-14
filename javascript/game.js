//character stats and global variables
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
const characters = [Kaede, Kirumi, Miu, Monokuma];
var countSelect = 0;
var countEnemy = 0;
var characterSelected = Kaede;
var enemySelected = Kaede;
var totalAttack = 0;
var powerUp = 0;
console.log(Kaede.health);
console.log(Monokuma.attack);
//Attack power function
var atkPower = function(x){
        x += characterSelected.attack;
        return x;
    }
//Document check
$(document).ready(function() {
    $('.enemy').hide();
    $('.defender').hide();
    

    
    //song ignore this it was just for fun lol
    // var audioElement = document.createElement("audio");
    //     audioElement.setAttribute("src", "images/soundtrack.mp3");    
    // $(".column").on("click", "#character1", function() {
    //       audioElement.play();
    //     }).on("click", "#character2", function() {
    //       audioElement.pause();
    //     });
    





    //on.click starts here for character selection, hides unselected characters.
    $(".container").on("click", ".select", function() {
    // $(".container").on("click", "#character1", function() {
        if (countSelect === 1){
            return;
        }
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
   		let userPick = $(this).val();
        characterSelected = characters[userPick];
        //hides unclicked buttons and keeps character selection.
        $('.character').hide();
        $(this).show();
        //shows enemies
        $('.enemy').show();
        hideChosen(userPick);
        console.log(userPick);
        console.log(characterSelected);
        countSelect++;

    });// End of .on(click) function

    $(".container").on("click", ".enemy", function() {
        if (countEnemy === 1){
            return;
        }
        $(this).hide();
        const showChosen = function(x){
        if (x == 0){
            $('#defender1').show();
        } else if (x == 1){
            $('#defender2').show();
        } else if (x == 2){
            $('#defender3').show();
        } else {
            $('#defender4').show();
        }}
        let userPick = $(this).val();
        enemySelected = characters[userPick];
        showChosen(userPick);
        countEnemy++;
    // }).on("click", "#character2", function() {
    //     }).on("click", "#character3", function() {
    //         }).on("click", "#character4", function() {

    });// End of .on(click) function


    //Begin on.click section to attack.
    $('#attack').on('click', function(){
        powerUp = atkPower(characterSelected.attack);
        totalAttack += powerUp;
        console.log(totalAttack);
        console.log(characterSelected);
        














    });//end of attack click






}); // Document.ready ends here.