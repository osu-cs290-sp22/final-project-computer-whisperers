// JS Stuff Here
//Variables
var textBoxClicked = 0;
var playerName = "Player";
var customTextSpeed = 25;
var grobItem = 0;

var textChat = document.getElementById('text-Chat');
var textBoxContainer = document.getElementById('text-Box');
var pictureDisplay = document.getElementById('graphics-Pane');
var extraButton = document.getElementById('extras-Button');
var settingsButton = document.getElementById('settings-Button');
var characterNameDisplay = document.getElementById('text-Focus');
var leftBar = document.getElementById('left-Option-Bar');
var rightBar = document.getElementById('right-Option-Bar');
var leftChoiceBox1 = document.getElementById('left-Option-Box1');
var leftChoiceBox2 = document.getElementById('left-Option-Box2');
var rightChoiceBox1 = document.getElementById('right-Option-Box1');
var rightChoiceBox2 = document.getElementById('right-Option-Box2');

var modalBack = document.getElementById('modal-backdrop');
var modalCreate = document.getElementById('modal-container');
var modalExtrasContent = document.getElementById('extras-content');
var modalSettingsContent = document.getElementById('settings-content');
var modalExit1 = document.getElementById('extras-close');
var modalExit2 = document.getElementById('settings-close');
var nameText = document.getElementById('name-text-input');
var textSpeed = document.getElementById('text-speed-input');
var grobItemContainer = document.getElementById('inv-item1');

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
  "'No, I won't let this be my fate. I am determined to find some friends to call family!",
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
var introBadEndCounter = -1;
var introBadEnd = [
  "'What was I thinking? No one will ever become my friend if they wont even open a gate for me. Clearly they do not want company such as mine.'",
  "With your ambitions lost and slight blindness from stepping outside, you turn around and head home.",
  "You return to your cozy bed and fancy red balloon. Maybe this is where you are meant to be...",
  "'Even though I failed to make friends, maybe I should try to make the best of what I have.'",
  "You seem to become more content with your situation. You have decided that you will make the best of life with yourself and this red balloon.",
  "With each day that passes you and the balloon become closer together.",
  //Player:
  "'I can't believe I thought I was alone this whole time! I was just looking for friends in the one place I didn't expect to find any. My home.'",
  //Bubbly:
  "*squeek* *scritch* *squee*",
  //Player:
  "'I am so glad that you agree with me Bubbly!'",
  //Bubbly:
  "*sqwish* *squee* *squeek*",
  //Player:
  "'What Bubbly? You would love to move together into a cabin in front of a lake with beautiful starry nights?'",
  //Bubbly:
  "*SQUEE* *SQUEE*",
  "It took several months, but you went in search of the perfect place for you and Bubbly.",
  "Eventually you found a location that would please Bubbly.",
  "You spend the next several years routinely gardening, reading, and playing fetch with Bubbly.",
  "...",
  //Maybe I should end it here if it gets too sad...
  "One day, when you were playing fetch with Bubbly, you noticed that they were floating a little lower than usual.",
  "Upon further inspection it is reavealed that Bubbly is starting to wrinkle and has become soft to the touch.",
  "...",
  "You start to count the days as Bubbly's condition worsens.",
  "...",
  "Eventually, it is time to say goodbye to Bubbly.",
  "You feel a sense of dread. Losing your one and only friend in life.",
  "But what you fear the most is what you will do being all alone again, without Bubbly.",
  "Even though you will being losing your best friend... You will cherish the moments that made them truely the best.",
  "*pffffffff*",
  "[THE END]"
];
var sewerIntroCounter = -1;
var sewerIntroText = [
    "You decide that braving the sewers' unkown is worth the risk to potentialy find information of this 'door'.",
    "So you lift the sewer grate and start down the steps of the ladder.",
    "While descending the ladder darkness slowly consumes you.",  //2 - dim BG
    "Upon reaching the bottom it is completely pitch black.",   //3 - black BG
    "You decide to stand around for a couple of minutes to let your eyes adjust to the setting.",
    "During your wait you hear something shift and stir in the darkness.",
    "As your eyes slowly adjust to the darkness you can make out a faint moving shape not too far in front of you.", //6 - dimmed sewerBG
    "It has an odd shape, similar to that of an upside down triangle...",
    "Suddenly a bright light turns on.", //8 - bright lightBG
    //Grob:
    "'Suprise! Oh my Grob~, I can't beleive I have a visitor!!!", //9 - fully lit sewerBG w/GrobNormal
    //Narrator (aka no name)
    "To your suprise that shape was not a foe.",
    "But instead a very strange and enthusiastic creature.",
    //Grob:
    "'Uhhh ohhh, I hope I didn't scare you. I only meant to give you a good welcome.'", //12 - w/GrobUhhh
    "...",
    "'Oh geez, now I feel really bad. Please tell me you don't hate me like the rest of those townsfolk above!", //14 - w/GrobWorried
    "'They put me down here because they thought I was really annoying.'",
    //Player:
    "'Sorry I was just a little suprised to see someone... like yourself.'",
    "'I was actually coming into town to see if I could aquire more information about a door of interdimensional friendship.'",
    "'Do you perhaps know anything about it?'",
    //Grob:
    "'Ha ha, thats really funny! Man that was so awkward. I'm incredibly glad you didn't come here to stab me with a pitchfork ha ha!", //19 - w/GrobHaha
    "'I have not heard about this door of friendship. Sounds very interesting... And full of awesome nice people!'", //20 - w/GrobNormal
    "'Where ever this door is I would love to come along and help find it! Not like im wanted here anyways.'",
    //Player:
    "'I guess that is fine for you to tag along, but do you have any ideas where in town we could find some information on the 'door'?",
    //Grob:
    "Sure, let me think...",
    "...",  //24 - GrobThinking
    "...",
    "...",
    "'Aha, how about the local tavern? Tons of traveling folk move through there. One of them ought to have heard of it!'", //Grob Normal
    //Choice Time!
];
var sewerGrob1Counter = -1;
var sewerGrob1Text = [ //Take Grob
  //Grob:
  "'Thats great! Even though people don't really like me up there I'll trust you and tag along.'",
  //Player:
  "'Your'e not that bad, I hope we can find some nice people at the tavern who are willing to help.'",
  //No Name
  "[Grob joins your party]", //2 - Grob item added to inventory
  "You head towards the next nearest ladder leading up.", //3 - Black Screen
  "Your new founded party then proceeds up a ladder that leads into the inner walls of the town.",
  "Luckly the sewer grate you chose to go up through with Grob happened to lead directly into the tavern." //5 - Tavern BG
  //Begin Tavern Intro
];
var sewerGrob2Counter = -1;
var sewerGrob2Text = [ //Betray Grob
  //Grob:
  "'Oh ok, i'll just wait here for you to come back!'",
  "'I already trust you way more than those people up there. Maybe I will finally be able to find a nice place to stay because of you!'",
  //No name
  "You head towards the next nearest ladder leading up.", //2 - Black Screen
  "You then begin heading up the ladder that leads into what you imagine to be the inner walls of the town.",
  "As you were heading up the ladder one of your feet slip and you fall down to your death.",
  "Maybe if you didnt plan on being so mean to Grob this bad luck wouldn't have happened.",
  "[GAME OVER]" //6 - Gamer over BG
];
var sewerGrob3Counter = -1;
var sewerGrob3Text = [
  //Grob:
  "'Its ok I guess... At least I enjoyed your short company. So thank you for that!'",
  //No name
  "You faintly hear sobbing as you head towards the nearest ladder leading upwards.", //1 - Black Screen
  "You then begin heading up the ladder that leads into what you imagine to be the inner walls of the town.",
  "Luckly the sewer grate you chose to go up through with Grob happened to lead directly into the tavern." //3 - Tavern BG
  //Begin Tavern Intro
];

var tavernIntroCounter = -1;
var tavernIntroText = [
  "'Lorum Ipsum'"
];

//Functions
function removeHidden(el) {
 el.classList.remove('hidden');
};

function addHidden(el) {
 el.classList.add('hidden');
};

function changeDisplay(source) {
  pictureDisplay.src = source;
};

function changeBars(color) {
  leftBar.style.backgroundColor = color;
  rightBar.style.backgroundColor = color;
};

function changeLeftBar(color) {
  leftBar.style.backgroundColor = color;
};

function changeRightBar(color) {
  rightBar.style.backgroundColor = color;
};

  function introSequence() {
    //Image checks.
    if (introCounter < 6) {
      changeDisplay('./Pictures/Backgrounds/CabinBG.png');
      changeBars("#4F3A2B");
    } else if ( (introCounter < 9) && (introCounter >= 6) ) {
      changeDisplay('./Pictures/Backgrounds/Outside1.png');
      changeBars('white');
    } else if (introCounter <= 15) {
      changeDisplay('./Pictures/Backgrounds/VillageGate.png');
      changeBars('green');
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
      characterNameDisplay.textContent = " ";
    }
  };

  function introBadEndSequence() {
    if(introBadEndCounter < 28) {
      if (introBadEndCounter < 2) {
        changeDisplay('./Pictures/Backgrounds/VillageGate.png');
        changeBars("green");
      } else if ( (introBadEndCounter < 6) && (introBadEndCounter >= 2) ) {
        changeDisplay('./Pictures/Backgrounds/CabinBG.png');
        changeBars("#4F3A2B");
      } else if ( (introBadEndCounter <12 ) && (introBadEndCounter >= 6) ) {
        changeDisplay('./Pictures/Backgrounds/BubblyBG.png');
        changeBars("#1c1c1c");
        //set names
        if( (introBadEndCounter == 6) || (introBadEndCounter == 8) || (introBadEndCounter == 10) ) {
          characterNameDisplay.textContent = playerName;
        }
        if( (introBadEndCounter == 7) || (introBadEndCounter == 9) || (introBadEndCounter == 11) ) {
          characterNameDisplay.textContent = "Bubbly";
        }

      } else if ( (introBadEndCounter < 27) && (introBadEndCounter >= 12) ) {
        characterNameDisplay.textContent = " ";
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars("#1c1c1c");
      } else if (introBadEndCounter == 27) {
        changeDisplay('./Pictures/Backgrounds/GameOver.png');
        changeBars("#1c1c1c");
        introBadEndCounter = -2;
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(introBadEnd[introBadEndCounter])
        .start();
        textBoxClicked = 1;
        introBadEndCounter++;
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
    introBadEndCounter = -2; //-2 means that this sequence has been done.
    }
  };

  function sewerIntroSequence() {
    if(sewerIntroCounter < 28) {
      if (sewerIntroCounter == 2) {
        changeDisplay('./Pictures/Backgrounds/DimBG.png');
        changeBars("gray");
      } else if (sewerIntroCounter == 3) {
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars("#1c1c1c");
      } else if ( (sewerIntroCounter < 8) && (sewerIntroCounter >= 4) ) {
        changeDisplay('./Pictures/Backgrounds/SewerDim.png');
        changeBars("#1c1c1c");
      } else if (sewerIntroCounter == 8) {
        changeDisplay('./Pictures/Backgrounds/Outside1.png');
        changeBars("white");
      } else if ( (sewerIntroCounter < 11) && (sewerIntroCounter >= 9) ) {
        changeDisplay('./Pictures/Backgrounds/SewerGrobNormal.png');
        changeBars('"#1c1c1c"');
        if(sewerIntroCounter == 9) {
          characterNameDisplay.textContent = 'Grob';
        } else {
          characterNameDisplay.textContent = '';
        }
      } else if ( (sewerIntroCounter < 14) && (sewerIntroCounter >= 12) ) {
        changeDisplay('./Pictures/Backgrounds/SewerGrobUhhh.png');
        changeBars("#1c1c1c");
        characterNameDisplay.textContent = 'Grob';
      } else if ( (sewerIntroCounter <19 ) && (sewerIntroCounter >= 14) ) {
        changeDisplay('./Pictures/Backgrounds/SewerGrobWorried.png');
        changeBars("#1c1c1c");
        if( sewerIntroCounter == 16) {
          characterNameDisplay.textContent = playerName;
        }
      } else if (sewerIntroCounter == 19) {
        changeDisplay('./Pictures/Backgrounds/SewerGrobHaha.png');
        changeBars("#1c1c1c");
        characterNameDisplay.textContent = 'Grob';
      } else if ( (sewerIntroCounter <24 ) && (sewerIntroCounter >= 20) ) {
        changeDisplay('./Pictures/Backgrounds/SewerGrobNormal.png');
        changeBars("#1c1c1c");
        if (sewerIntroCounter == 22) {
          characterNameDisplay.textContent = playerName;
        }
        if (sewerIntroCounter == 23) {
          characterNameDisplay.textContent = 'Grob';
        }
      }  else if ( (sewerIntroCounter <27 ) && (sewerIntroCounter >= 24) ) {
        changeDisplay('./Pictures/Backgrounds/SewerGrobThinking.png');
        changeBars("#1c1c1c");
      } else if (sewerIntroCounter == 27) {
        changeDisplay('./Pictures/Backgrounds/SewerGrobNormal.png');
        changeBars("#1c1c1c");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(sewerIntroText[sewerIntroCounter])
        .start();
        textBoxClicked = 1;
        sewerIntroCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }

    } else {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      sewerIntroCounter = -2; //-2 means that this sequence has been done.
      leftChoiceBox1.textContent = "Go along with Grub to the tavern";
      rightChoiceBox1.textContent = "Tell Grob to wait until you come back with the information (Betrayal)";
      leftChoiceBox2.textContent = "Tell Grob that you would prefer if he didn't come along";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      removeHidden(leftChoiceBox2);
      characterNameDisplay.textContent = '';
    }
  };

  function sewerGrob1() {
    if ( sewerGrob1Counter <= 5 ) {
      if(sewerGrob1Counter == 0) {
        characterNameDisplay.textContent = 'Grob';
      }
      if(sewerGrob1Counter == 1) {
        characterNameDisplay.textContent = playerName;
      }
      if(sewerGrob1Counter == 2) {
        characterNameDisplay.textContent = '';
        //Set GrobItem as obtained (true)... also add to inventory.
        grobItemContainer.src='./Pictures/Items/GrobItem.png';
        grobItem = 1;
      }
      if( (sewerGrob1Counter <5 ) && (sewerGrob1Counter >= 3) ) {
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars("#1c1c1c");
      } else if (sewerGrob1Counter == 5) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("brown");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(sewerGrob1Text[sewerGrob1Counter])
        .start();
        textBoxClicked = 1;
        sewerGrob1Counter++;
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
      sewerGrob1Counter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      tavernIntroCounter = 0; //start tavern intro sequence
    }
  };

  function sewerGrob2() {
    if ( sewerGrob2Counter <= 6 ) {
      if(sewerGrob2Counter == 0) {
        characterNameDisplay.textContent = 'Grob';
      }
      if(sewerGrob2Counter == 2) {
        characterNameDisplay.textContent = '';
      }
      if( (sewerGrob2Counter <5 ) && (sewerGrob2Counter >= 2) ) {
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars("#1c1c1c");
      } else if (sewerGrob2Counter == 6) {
        changeDisplay('./Pictures/Backgrounds/GameOver.png');
        changeBars("black");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(sewerGrob2Text[sewerGrob2Counter])
        .start();
        textBoxClicked = 1;
        sewerGrob2Counter++;
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
      sewerGrob2Counter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
    }
  };

  function sewerGrob3() {
    if ( sewerGrob3Counter <= 3 ) {
      if(sewerGrob3Counter == 0) {
        characterNameDisplay.textContent = 'Grob';
      }
      if(sewerGrob3Counter == 1) {
        characterNameDisplay.textContent = '';
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars("#1c1c1c");
      }
      if(sewerGrob3Counter == 3) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("#1c1c1c");
      }
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(sewerGrob3Text[sewerGrob3Counter])
        .start();
        textBoxClicked = 1;
        sewerGrob3Counter++;
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
      sewerGrob3Counter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      tavernIntroCounter = 0; //start tavern intro sequence
    }
  };


//Code

//Sets up typewriting object
var typewriter = new Typewriter(textChat, {
  loop: false,
  deleteSpeed: 1,
  delay: 75,
});


  //Where the main stuff happens.
textBoxContainer.addEventListener('click', ()=> {
//Intro handling:
  if (introCounter != -2) {
    introSequence();
    return;
  }
  //Intro bad end handling
  if ( (introBadEndCounter != -1) && (introBadEndCounter != -2) ) {
    introBadEndSequence();
  }
//Sewer handling:
  //sewer intro handling
  if ( (sewerIntroCounter != -1) && (sewerIntroCounter != -2) ) {
    sewerIntroSequence();
  }
  //sewer options handling after intro.
  if( (sewerGrob1Counter != -1) && (sewerGrob1Counter != -2) ) {
    sewerGrob1();
  }
  if( (sewerGrob2Counter != -1) && (sewerGrob2Counter != -2) ) {
    sewerGrob2();
  }
  if( (sewerGrob3Counter != -1) && (sewerGrob3Counter != -2) ) {
    sewerGrob3();
  }
});


leftChoiceBox1.addEventListener('click', ()=> {
  if( (introCounter == -2) && (introBadEndCounter == -1) && (sewerIntroCounter == -1 ) ) {
    //If intro is finished and the bad end hasn't been done, then 'start' it
    introBadEndCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);

  }
  if( (sewerIntroCounter == -2) && (sewerGrob1Counter == -1) ) {
    //If you let grob join your party
    sewerGrob1Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);

  }
});

rightChoiceBox1.addEventListener('click', ()=> {
  if( (introCounter == -2) && (sewerIntroCounter == -1) ) {
    //If intro is finished and the sewer scene hasn't been done, then 'start' it
    sewerIntroCounter = 0;
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox1);

  }
  if( (sewerIntroCounter == -2) && (sewerGrob2Counter == -1) ) {
    //If you betray Grob
    sewerGrob2Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
});

leftChoiceBox2.addEventListener('click', ()=> {
  if( (sewerIntroCounter == -2) && (sewerGrob3Counter == -1) ) {
    //If you don't let grob join you
    sewerGrob3Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
});

extraButton.addEventListener('click', ()=> {
  removeHidden(modalBack);
  removeHidden(modalCreate);
  removeHidden(modalExtrasContent);
  addHidden(modalSettingsContent);
});

settingsButton.addEventListener('click', ()=> {
  removeHidden(modalBack);
  removeHidden(modalCreate);
  removeHidden(modalSettingsContent);
  addHidden(modalExtrasContent);
});


modalExit1.addEventListener('click', ()=> {
  addHidden(modalBack);
  addHidden(modalCreate);
  removeHidden(modalSettingsContent);
  addHidden(modalExtrasContent);

});

modalExit2.addEventListener('click', ()=> {
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
