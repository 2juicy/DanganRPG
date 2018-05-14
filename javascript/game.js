//character stats and global variables
var Kaede = {
    health: 100,
    attack: 12,
    counter: 5,
};
var Kirumi = {
    health: 120,
    attack: 8,
    counter: 10
};
var Miu = {
    health: 150,
    attack: 4,
    counter: 20,
};
var Monokuma = {
    health: 180,
    attack: 2,
    counter: 25,
    };
var characters = [Kaede, Kirumi, Miu, Monokuma];
var countSelect = 0;
var countEnemy = 0;
var characterSelected = Kaede;
var enemySelected = Kaede;
var totalAttack = 0;
var powerUp = 0;
var clickOn = false;
var enemySlain = 0;
//Document check
$(document).ready(function() {
    $('.enemy').hide();
    $('.defender').hide();
    $('#reset').hide();
    //on.click starts here for character selection, hides unselected characters.
    $(".container").on("click", ".select", function() {
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
        $(this).slideDown();
        //shows enemies
        $('.enemy').show();
        hideChosen(userPick);
        countSelect++;
    });// End of .on(click) function
    $(".container").on("click", ".enemy", function() {
        if (countEnemy === 1){
            return;
        }
        $(this).hide();
        const showChosen = function(x){
            if (x == 0){
                $('#defender1').slideDown();
            } else if (x == 1){
                $('#defender2').slideDown();
            } else if (x == 2){
                $('#defender3').slideDown();
            } else {
                $('#defender4').slideDown();
            }}
        let userPick = $(this).val();
        enemySelected = characters[userPick];
        $(".enemyhp").text(enemySelected.health);
        showChosen(userPick);
        countEnemy++;
        clickOn = true;
    });// End of .on(click) function
    //Begin on.click section to attack.
    $('#attack').on('click', function(){
        if (clickOn === false){
            $("#winOrLose").text('No enemy here');
            return;
        }
        powerUp = characterSelected.attack;
        totalAttack += powerUp;
        characterSelected.health -= enemySelected.counter;
        $(".yourhp").text(characterSelected.health);
        enemySelected.health -= totalAttack;
        $(".enemyhp").text(enemySelected.health);
        $("#winOrLose").text('You did ' + totalAttack + ' damage! Your enemy did ' + enemySelected.counter + ' damage to you!');
        if (enemySelected.health <= 0){
            characterSelected.health += enemySelected.counter;
            $(".yourhp").text(characterSelected.health);
            $('.defender').hide();
            countEnemy = 0;
            enemySlain++;
            clickOn = false;
            if (enemySlain === 3){
                $('#reset').show();
                $('#attack').hide();
                $("#winOrLose").text('Victory! Game Over!');
            }
        }
        if (characterSelected.health <= 0){
            $("#winOrLose").text('Defeat! Game Over!');
            $(".yourhp").text('0');
            $('#reset').show();
            $('#attack').hide();
            countEnemy = 1;
        }
    });//end of attack click
}); // Document.ready ends here.