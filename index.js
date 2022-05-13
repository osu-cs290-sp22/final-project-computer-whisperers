// JS Stuff Here
//Variables
var textBoxClicked = 0;
var playerName = "Player";
var customTextSpeed = 25;

var textChat = document.getElementById('text-Chat');
var textBoxContainer = document.getElementById('text-Box');
var pictureDisplay = document.getElementById('graphics-Pane');
var extraButton = document.getElementById('settings-Button');
var characterNameDisplay = document.getElementById('text-Focus');
var leftBar = document.getElementById('left-Option-Bar');
var rightBar = document.getElementById('right-Option-Bar');

var modalBack = document.getElementById('modal-backdrop');
var modalCreate = document.getElementById('create-twit-modal');
var modalExit = document.querySelector('.modal-close-button');
var nameText = document.getElementById('name-text-input');
var textSpeed = document.getElementById('text-speed-input');

var temporaryText = document.getElementById('text-Chat').textContent;

var nameSelector = 1;
var characterNames = [
  "",
  "Player",
  "Grob"
];
var introCounter = -1;
var introText = [
  "Once again... Awoken in your bed on your birthday. All alone in your room.",
  "Will there ever be a time where this scene will have changed?",
  "No, I won't let this be my fate. I am determined to find some friends to call family!",
  "I must set out on a quest to make some friends...",
  "There have been reaccuring rumors about a door between realities that leads to a land of all the friends you could ever imagine!",
  "Maybe I should head out to the village nearby to procure more information of this 'door'."
];
var villageText = [
];

//Functions
function removeHidden(el) {
 el.classList.remove('hidden');
}

function addHidden(el) {
 el.classList.add('hidden');
}

  function introSequence() {
    pictureDisplay.src = './Pictures/Backgrounds/CabinBG.png';
    characterNameDisplay.textContent = characterNames[nameSelector];
    leftBar.style.backgroundColor = "#4F3A2B";
    rightBar.style.backgroundColor = "#4F3A2B";
    if(introCounter <= 6) {
      //Set Intro to 0 to start text if it isnt already.

      if(introCounter == -1) {
        introCounter = 0;
      }
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
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

extraButton.addEventListener('click', ()=> {
  removeHidden(modalBack);
  removeHidden(modalCreate);
})

modalExit.addEventListener('click', ()=> {
  addHidden(modalBack);
  addHidden(modalCreate);
  if( nameText.value != '' ) {
    playerName = nameText.value;
    characterNames[1] = playerName;
    console.log('Player name set to: ', playerName);
  }

  if( textSpeed.value != '' ) {
    customTextSpeed = textSpeed.value;
    console.log('Text Speed set to: ', customTextSpeed);
  }
})
