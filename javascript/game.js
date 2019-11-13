//character stats and global variables
function Character(health, attack, counter) {
  this.health = health;
  this.attack = attack;
  this.counter = counter;
}
const Kaede = new Character(100, 12, 5);
const Kirumi = new Character(120, 8, 10);
const Miu = new Character(150, 4, 20);
const Monokuma = new Character(180, 2, 25);
const characters = [Kaede, Kirumi, Miu, Monokuma];
let countSelect = 0;
let countEnemy = 0;
let characterSelected = Kaede;
let enemySelected = Kaede;
let totalAttack = 0;
let powerUp = 0;
let clickOn = false;
let enemySlain = 0;
//Document check
$(document).ready(function() {
  $("#winOrLose").text("Select your character");
  $(".enemy").hide();
  $("#enemies").hide();
  $(".defender").hide();
  $("#defenders").hide();
  $("#reset").hide();
  //on.click starts here for character selection, hides unselected characters.
  $(".container").on("click", ".select", function() {
    $("#enemies").show();
    if (countSelect === 1) {
      return;
    }
    const hideChosen = function(x) {
      if (x == 0) {
        $("#enemy1").hide();
      } else if (x == 1) {
        $("#enemy2").hide();
      } else if (x == 2) {
        $("#enemy3").hide();
      } else {
        $("#enemy4").hide();
      }
    };
    let userPick = $(this).val();
    characterSelected = characters[userPick];
    //hides unclicked buttons and keeps character selection.
    $(".character").hide();
    $(this).slideDown();
    //shows enemies
    $(".enemy").show();
    hideChosen(userPick);
    countSelect++;
    $("#winOrLose").text("Select your opponent! Defeat all enemies to win!");
  }); // End of .on(click) function, start enemy selection and hide.
  $(".container").on("click", ".enemy", function() {
    $("#defenders").show();
    if (countEnemy === 1) {
      return;
    }
    $("#winOrLose").text("");
    $(this).hide();
    const showChosen = function(x) {
      if (x == 0) {
        $("#defender1").slideDown();
      } else if (x == 1) {
        $("#defender2").slideDown();
      } else if (x == 2) {
        $("#defender3").slideDown();
      } else {
        $("#defender4").slideDown();
      }
    };
    let userPick = $(this).val();
    enemySelected = characters[userPick];
    $(".enemyhp").text(enemySelected.health);
    showChosen(userPick);
    countEnemy++;
    clickOn = true;
    if (enemySlain === 2) {
      $("#enemies").hide();
    }
  }); // End of .on(click) function, begin on.click section to attack.
  $("#attack").on("click", function() {
    if (clickOn === false) {
      $("#winOrLose").text("No enemy here");
      return;
    }
    powerUp = characterSelected.attack;
    totalAttack += powerUp;
    characterSelected.health -= enemySelected.counter;
    $(".yourhp").text(characterSelected.health);
    enemySelected.health -= totalAttack;
    $(".enemyhp").text(enemySelected.health);
    $("#winOrLose").text(
      "You did " +
        totalAttack +
        " damage! Your enemy did " +
        enemySelected.counter +
        " damage to you!"
    );
    if (enemySelected.health <= 0) {
      $("#winOrLose").text(
        "You did " + totalAttack + " damage! You defeated your enemy!"
      );
      characterSelected.health += enemySelected.counter;
      $(".yourhp").text(characterSelected.health);
      $(".defender").fadeOut(666);
      countEnemy = 0;
      enemySlain++;
      clickOn = false;
      $("#enemies").show();
      if (enemySlain === 3) {
        $("#reset").slideDown(666);
        $("#attack").slideUp(155);
        $("#winOrLose").text("Victory! Game Over!");
        $("#enemies").hide();
      }
    }
    if (characterSelected.health <= 0) {
      $("#winOrLose").text("Defeat! Game Over!");
      $(".yourhp").text("0");
      $("#reset").slideDown(666);
      $("#attack").slideUp(155);
    }
  }); //end of attack click
}); // Document.ready ends here.
