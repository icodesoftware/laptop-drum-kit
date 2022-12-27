
var keySound = {
  "w": "tom-1.mp3",
  "a": "tom-2.mp3",
  "s": "tom-3.mp3",
  "d": "tom-4.mp3",
  "j": "snare.mp3",
  "k": "crash.mp3",
  "l": "kick-bass.mp3"
};

function playKeySound(char){
  // creats a new audio object and adds sound file assigned to that char in the keySound variable.
  if (char in keySound){
     // uses the play() function in the Audio obj to play the sound file.
     (new Audio("sounds/"+keySound[char])).play()
  }

}

var leng = document.getElementsByClassName("drum").length;
for (var i = 0; i < leng; i++){
  document.getElementsByClassName("drum")[i].addEventListener("click", function (){

    // loops through each button and adds this function

    var x = this.innerHTML; // gets the innerHTML of the current button in which the loop is at
    playKeySound(x); // gets that innerHTML char and creats a unique audio obj for that button
    buttonAnimation(x);

  });
}

document.addEventListener("keydown", function (event){

  /*** adds sound to the key that is pressed down.
  The 'event' input (the actual event that triggerd this function) in the function gives various info about the keyboard press including the "key" which was pressed,
  by taping in the event.key we can get the char pressed and add the function to that key. ***/

  var x = event.key; // get the name of the key pressed.
  playKeySound(x);
  buttonAnimation(x);

/*** clear solution:
    var audio = "audio" + i;
    var x = event.key; // get the name of the key pressed.
    var audio = new Audio("sounds/"+keySound[x]);
    audio.play(); ***/

});

function buttonAnimation(currentKey){
  if (currentKey in keySound){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
  }
}
