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
var leftChoiceBox1 = document.getElementById('left-Option-Box1');
var leftChoiceBox2 = document.getElementById('left-Option-Box2');
var rightChoiceBox1 = document.getElementById('right-Option-Box1');
var rightChoiceBox2 = document.getElementById('right-Option-Box2');

var modalBack = document.getElementById('modal-backdrop');
var modalCreate = document.getElementById('modal-container');
var modalExit = document.querySelector('.modal-close-button');
var nameText = document.getElementById('name-text-input');
var textSpeed = document.getElementById('text-speed-input');

var temporaryText = document.getElementById('text-Chat').textContent;

//Story Variables
var nameSelector = 1;
var characterNames = [
  "",
  "Player",
  "Grob",
  "Wick",
  "Pilz",
  "Witch"
];
var introCounter = -1; //-1 means that this sequence hasnt been started yet.
var introText = [
  "Once again... Awoken in your bed on your birthday. All alone in your room.",
  "Will there ever be a time where this scene will have changed?",
  "'No, I won't let this be my fate. I am determined to find some friends to call family!''",
  "'I must set out on a quest to make some friends...''",
  "There have been reaccuring rumors about a door between realities that leads to a land of all the friends you could ever imagine!",
  "'Maybe I should head out to the village nearby to procure more information of this 'door'.'",
  //Outside time.
  "Opening the door comes with it a brisk of wind that causes your hair to fly back vertically.",
  "Your stimuli are a little overwhelmed by the cool breeze and warming sunshine.",
  "After a couple minutes of adjusting to this unexpectedly hostile enviromnent, you are able to come to your senses.",
  "'Wow... The village was a lot closer than I remember.'",
  "You are faced with the shut gate to the village. You decide to knock on the hardened wood of the gate.",
  "Waiting for a call.",
  "...",
  "Yet no one answers.",
  "You look around and notice a strange sewer grate outside the village walls.",
  "'Hmmm, what should I do?'"
  //Then the first choice happens.
];

var sewerText = [
];

//Functions
function removeHidden(el) {
 el.classList.remove('hidden');
}

function addHidden(el) {
 el.classList.add('hidden');
}

  function introSequence() {
    //Image checks.
    if (introCounter < 6) {
      pictureDisplay.src = './Pictures/Backgrounds/CabinBG.png';
      leftBar.style.backgroundColor = "#4F3A2B";
      rightBar.style.backgroundColor = "#4F3A2B";
    }
    else if ( (introCounter < 9) && (introCounter >= 6) ) {
      pictureDisplay.src = './Pictures/Backgrounds/Outside1.png';
      leftBar.style.backgroundColor = "white";
      rightBar.style.backgroundColor = "white";
    }
    else if (introCounter <= 15) {
      pictureDisplay.src = 'Village Picture WIP';
      leftBar.style.backgroundColor = "green";
      rightBar.style.backgroundColor = "green";
    }

    characterNameDisplay.textContent = characterNames[nameSelector];
    if(introCounter <= 15) {
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
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }
    else {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      introCounter = -2; //-2 means that this sequence has been done.
      leftChoiceBox1.textContent = "Give up and go back home.";
      rightChoiceBox1.textContent = "Go into the sewers.";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
    }
  }

//Code

var typewriter = new Typewriter(textChat, {
  loop: false,
  deleteSpeed: 1,
  delay: 75,
});

  //Where the main stuff happens.
textBoxContainer.addEventListener('click', ()=> {
//Intro handling
  if (introCounter != -2) {
    introSequence();
    return;
  }
  console.log('Finished intro sequence');
});

leftChoiceBox1.addEventListener('click', ()=> {
  console.log('Option 1 chosen');
});

rightChoiceBox1.addEventListener('click', ()=> {
  console.log('Option 2 chosen');
});

extraButton.addEventListener('click', ()=> {
  removeHidden(modalBack);
  removeHidden(modalCreate);
});

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
});
