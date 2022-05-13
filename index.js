// JS Stuff Here
//Variables
var textBoxClicked = 0;

var textChat = document.getElementById('text-Chat');
var textBoxContainer = document.getElementById('text-Box');
var pictureDisplay = document.getElementById('graphics-Pane');

var temporaryText = document.getElementById('text-Chat').textContent;

var introCounter = -1;
var introText = [
  "Once again... Awoken in your bed on your birthday. All alone in your room.",
  "Will there ever be a time where this scene will have changed?",
  "No, I won't let this be my fate. I am determined to find some friends to call family!",
  "I must set out on a quest to make some friends...",
  "There have been reaccuring rumors about a door between realities that leads to a land of all the friends you could ever imagine!",
  "Maybe I should head out to the village nearby to procure more information of this 'door'."
];

//Functions
  function introSequence() {
    pictureDisplay.src = './Pictures/Backgrounds/CabinBG.png';
    if(introCounter <= 6) {
      //Set Intro to 0 to start text if it isnt already.

      if(introCounter == -1) {
        introCounter = 0;
      }
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(25)
        .typeString(introText[introCounter])
        .start();
        textBoxClicked = 1;
        introCounter++;
      } else {
        //textChat.textContent='';
        //
        typewriter
        .deleteAll(1)
        .start();
        //
        textBoxClicked = 0;
      }
    }
  }

//Code
var typewriter = new Typewriter(textChat, {
  loop: false,
  deleteSpeed: 1,
  delay: 75,

});

textBoxContainer.addEventListener('click', ()=> {
//Intro handling
  introSequence();
})
