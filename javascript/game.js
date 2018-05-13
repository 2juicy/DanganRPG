//character stats and global variables
const characters = {
    Kaede: {
    health: 100,
    attack: 10,
    counter: 15,
},
    Kirumi: {
    health: 120,
    attack: 8,
    counter: 17
},
    Miu: {
    health: 150,
    attack: 6,
    counter: 19,
},
    Monokuma: {
    health: 180,
    attack: 6,
    counter: 22,
    }
}
console.log(characters.Kaede.health);
console.log(characters.Monokuma.attack);
//Document check
$(document).ready(function() {
    //functions
   

    
    //song
    var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "images/soundtrack.mp3");    
    $(".column").on("click", "#character1", function() {
          audioElement.play();
        }).on("click", "#character2", function() {
          audioElement.pause();
        });
    











    //on.click starts here for character selection, hides unselected characters.
    $(".container").on("click", ".character", function() {
    // $(".container").on("click", "#character1", function() {
   		var userPick = $(this).val();

        $('.character').hide();
        $(this).show();
        // $(this).hide();
        console.log(userPick);

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