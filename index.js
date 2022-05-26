// JS Stuff Here
//Variables
var textBoxClicked = 0;
var playerName = "Player";
var customTextSpeed = 25;
var grobItem = 0;
var wickItem = 0;
var pilzItem = 0;
var squidItem = 0;

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

//*****************Intro stuff starts here*************************************************************************************************************************************************************************************
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
  "Luckily the sewer grate you chose to go up through with Grob happened to lead directly into the tavern." //5 - Tavern BG
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
  "Luckily the sewer grate you chose to go up through with Grob happened to lead directly into the tavern." //3 - Tavern BG
  //Begin Tavern Intro
];

var tavernIntroCounter = -1;
var tavernIntroText = [
  //Player:
  "'Wow its kind of empty here, also who has a sewer grate that leads directly into the tavern bathroom?'",
  "'Whatever, I should ask the bar keep if they have heard anything about the door of friendship.'",
  //No Name
  "Looking around, you notice a lone bar keep leaning against the counter staring off into the distance", //2
  "You slowly walk up to the bar, ready to engage in conversation with a human being for the first time in years.",
  "But the bar keeper doesnt seem to be paying attention, despite vaguely looking your direction.",
  //Player:
  "'Hey bar keep, you there?' You say as you wave your hand in front of the bar keeper's face.", //5
  //No name
  "The bar keeper jolts back suddenly.", //6
  //Bar Keeper:
  "'Woah there laddeh! Didn't notice ya there. We don't get much folk around here this time of the day.", //7
  "'How can I help ya? Need a drink? We got no shortage of those at this time of day. ", //8
  //
  //"'Oh, who's the one behind ya? Is that the nosey triangle looking bugger? Oh well as long as he doesnt stay for long to scare off the customers i'll let him stay.'",  //9 //If Grob is in party (grob-item = 1)
  //
  //Player:
  "'Actually I was wondering if you or someone you know has information on an interdimensional door of friendship?'", //9
  //Bar Keeper:
  "'Hmmm. To be blunt with ya laddeh, I don't know much about it. The door is rumored to be at the ruins up north, but many a party have gone to only returned alone...'", //10
  "'But I know some fellows who might know more about the ruins and its mysteries.'",
  "'Now these people aren't too close by and can be dangerous to get to. So you best be prepared for the long haul. So why not buy a drink for the two of us? Heh heh.'",
  //No name
  "The bar keep suddenly changes to a serious expression. They stare at you waiting for confirmation that you understand the dangers about to be told. You nod at the keeper to proceed.", //13
  //Bar Keeper:
  "'Right. So the first one I know about is this old sailor up in the northern sea. He ain't your average sailor so you'll probably recongize 'em when ya see 'em.'", //14
  "'The second contact I know is out on an expidition to the ancient city in the eastern mountains.'",
  "'Them are some dangerous mountains, not to mention the ruins that lay within.'",
  "'The ruins were left by the funny folk. Thousands of years ago they used to go all over the kingdoms to do their funnies. But now the ruins are all thats left of them.'",
  "'I would stay away from there if I were you.'",
  "'Last but not least is the mushroom people of the Blue Forest down south. Don't ask me why its blue. People won't shut up about it. Especially that Grob guy. Hmph.'",
  "'Ahem. Anyways the mushroom people there used to be wandering traders a few hundred back. But now they've settled in them forests.'",
  "'They've got the lifespan like no other in these lands. If anyone was to know, it'd be the mushroom people.",
  "...",
  "'QUESTIONS?' The bar keeper yells.",
  //Player name:
  "'Uhh, no sir. Thank you very much for the valuable information! I shall return with results hopefully. Maybe I'll buy you a beer when I'm back.'" //25
  //Proceed to Tavern Hub Sequence.
];

var tavernHubCounter = -1;
var tavernHubAgain = 0;
var tavernHubText = [
  "'Now where should I go from the here?'" //0 - change to TaernBG
];
//************Intro stuff ends here******************************************************************************************************************************************************************************************


//************Door shenanigans start here******************************************************************************************************************************************************************************************
var doorIntroCounter = -1;
var doorIntroText = [
  "'Lorum Ipsum'"
];
//************Door shenanigans end here******************************************************************************************************************************************************************************************


//************Wick starts Route here******************************************************************************************************************************************************************************************
var mountainsIntroCounter = -1;
var mountainsIntroText = [
  "'Lorum Ipsum'"
];
//************Wick route ends ends here******************************************************************************************************************************************************************************************


//************Pilz route starts here******************************************************************************************************************************************************************************************
var forestIntroCounter = -1;
var forestIntroText = [
  "You decide to go in search of the mushroom people in the Blue Forest.",
  "...",
  "After several tiring days of traveling south, you find your self wandering around an open field until you spot some blue grass.", //2 - change BG
  "Following the blue grass leads you to your desitination. The Blue Forest.",
  "Upon closer inspection of the forest, you find the strange flora to be quite thick; not much sunlight breaches the canopy above.",
  "There is a trail leading into the forest, this would be you best bet of finding the mushroom people.",
  "Losing the trail on your journey may be a death sentence, but you decide to brave the unkown in the name of friendship.",
  "Following the trail into darkness you find that the local flora emits its own humble light, just enough to see where you are going.",
  "After a couple of hours you find yourelf at a fork in the road. One option seems like it lead up onto a hill.",
  "The other trail looks to go lower in elevation towards a creek.",
  "Which trail should you take?" //10
  //Leads into 2 choices
];

var forestHillCounter = -1;
var forestHillText = [
  "'Lorum Ipsum'"
];

var forestCreekCounter = -1;
var forestCreekText = [
  "'Lorum Ipsum'"
];
//************Pilz route ends here******************************************************************************************************************************************************************************************


//************Octo route starts here******************************************************************************************************************************************************************************************
var seaIntroCounter = -1;
var seaIntroText = [
  "'Lorum Ipsum'"
];
//************Octo route ends here******************************************************************************************************************************************************************************************



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

//*****************Intro stuff starts here*************************************************************************************************************************************************************************************
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
        changeBars("#5c4944");
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
        changeBars("#5c4944");
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

  function tavernIntroSequence() {
    if (tavernIntroCounter <=25) {
      if (tavernIntroCounter == 0) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("#5c4944");
        characterNameDisplay.textContent = playerName;
      } else if (tavernIntroCounter == 2) {
        characterNameDisplay.textContent = "";
      } else if (tavernIntroCounter == 5) {
        characterNameDisplay.textContent = playerName;
      } else if (tavernIntroCounter == 6) {
        characterNameDisplay.textContent = "";
      } else if (tavernIntroCounter == 7) {
        characterNameDisplay.textContent = "Bar Keeper";
      } else if (tavernIntroCounter == 9) {
        characterNameDisplay.textContent = playerName;
      } else if (tavernIntroCounter == 10) {
        characterNameDisplay.textContent = "Bar Keeper";
      } else if (tavernIntroCounter == 13) {
        characterNameDisplay.textContent = "";
      } else if (tavernIntroCounter == 14) {
        characterNameDisplay.textContent = "Bar Keeper";
      } else if (tavernIntroCounter == 24) {
        characterNameDisplay.textContent = playerName;
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(tavernIntroText[tavernIntroCounter])
        .start();
        textBoxClicked = 1;
        tavernIntroCounter++;
        if ( (tavernIntroCounter == 9) && (grobItem == 1) ) {
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("Oh, who's the one behind ya? Is that the nosey triangle looking bugger? Oh well as long as he doesnt stay for long and scare off the customers I'll let him stay.'")
          .start();
        }
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
      tavernIntroCounter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      tavernHubCounter = 0; //start tavern intro sequence
      tavernHubAgain = 1;
    }
  };

  function taverHubSequence() {
    if(tavernHubCounter == 0) {
      changeDisplay('./Pictures/Backgrounds/Tavern.png');
      changeBars("#5c4944");
      characterNameDisplay.textContent = playerName;

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(tavernHubText[tavernHubCounter])
        .start();
        textBoxClicked = 1;
        tavernHubCounter++;

        if ( (pilzItem == 1) || (grobItem == 1) || (wickItem == 1) || (squidItem == 1) ) {
          let tempStr = "   'Now that I've got the help of " + (grobItem + wickItem + squidItem + pilzItem) + " people, I wonder how much more help I could get.'";
          typewriter
          .changeDelay(customTextSpeed)
          .typeString(tempStr)
          .start();
        }

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
      tavernHubCounter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      leftChoiceBox1.textContent = "Head out to the northern sea for the sailor";
      rightChoiceBox1.textContent = "Search the ruins of the mountains to the east";
      leftChoiceBox2.textContent = "Head to the Blue Forest in the south.";
      rightChoiceBox2.textContent = "Head towards the friendship door in the ruins up north."
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      removeHidden(leftChoiceBox2);
      removeHidden(rightChoiceBox2);
      tavernHubAgain = 0;
    }
  }
//************Intro functions ends here******************************************************************************************************************************************************************************************


//************Door functions start here******************************************************************************************************************************************************************************************

//************Door functions end here******************************************************************************************************************************************************************************************


//************Wick functions start here******************************************************************************************************************************************************************************************

//************Wick functions end here******************************************************************************************************************************************************************************************


//************Pilz functions starts here******************************************************************************************************************************************************************************************
  function forestIntroSequence() {
    console.log()
    if (forestIntroCounter <= 10) {
      if (forestIntroCounter == 2) {
        changeDisplay('./pictures/backgrounds/BlueForestPath.png');
        changeBars('cyan');
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestIntroText[forestIntroCounter])
        .start();
        textBoxClicked = 1;
        forestIntroCounter++;
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
      forestIntroCounter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      leftChoiceBox1.textContent = "Lorum Ipsum";
      rightChoiceBox1.textContent = "Lorum Ipsum";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
    }

  }
//************Pilz functions ends here******************************************************************************************************************************************************************************************


//************Octo functions starts here******************************************************************************************************************************************************************************************

//************Octo functions ends here******************************************************************************************************************************************************************************************




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
    console.log('introSequence');
    introSequence();
    return;
  }
  //Intro bad end handling
  if ( (introBadEndCounter != -1) && (introBadEndCounter != -2) ) {
    console.log('introBadEndSequence');
    introBadEndSequence();
  }
//Sewer handling:
  //sewer intro handling
  if ( (sewerIntroCounter != -1) && (sewerIntroCounter != -2) ) {
    console.log('sewerIntroSequence');
    sewerIntroSequence();
  }
  //sewer options handling after intro.
  if( (sewerGrob1Counter != -1) && (sewerGrob1Counter != -2) && (tavernHubCounter != -2) ) {
    console.log('sewerGrob1');
    sewerGrob1();
  }
  if( (sewerGrob2Counter != -1) && (sewerGrob2Counter != -2) && (tavernHubCounter != -2) ) {
    console.log('sewerGrob2');
    sewerGrob2();
  }
  if( (sewerGrob3Counter != -1) && (sewerGrob3Counter != -2)  && (tavernHubCounter != -2) ) {
    console.log('sewerGrob3');
    sewerGrob3();
  }
//Tavern stuff:
  if( (tavernIntroCounter != -1) && (tavernIntroCounter != -2) ) {
    console.log('tavernIntroSequence');
    tavernIntroSequence();
  }
  //Tavern Hub:
  if( (tavernHubCounter != -1) && (tavernHubCounter !=-2) ) {
    console.log('taverHubSequence');
    taverHubSequence();
  }
//Pilz route stuff:
  if( (forestIntroCounter != -1) && (forestIntroCounter !=-2) ) {
    console.log('forestIntroSequence');
    forestIntroSequence();
  }
});

//Choice boxes start here
leftChoiceBox1.addEventListener('click', ()=> {
  if( (introCounter == -2) && (introBadEndCounter == -1) && (sewerIntroCounter == -1 ) ) {
    //If intro is finished and the bad end hasn't been done, then 'start' it
    introBadEndCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);

  }
  if( (sewerIntroCounter == -2) && (sewerGrob1Counter == -1)  && (tavernIntroCounter != -2) ) {
    //If you let grob join your party
    sewerGrob1Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);

  }
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 0) ) {
    doorIntroCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
});

rightChoiceBox1.addEventListener('click', ()=> {
  if( (introCounter == -2) && (sewerIntroCounter == -1) ) {
    //If intro is finished and the sewer scene hasn't been done, then 'start' it
    sewerIntroCounter = 0;
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox1);

  }
  if( (sewerIntroCounter == -2) && (sewerGrob2Counter == -1) && (tavernIntroCounter != -2) ) {
    //If you betray Grob
    sewerGrob2Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 0) ) {
    mountainsIntroCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
});

leftChoiceBox2.addEventListener('click', ()=> {
  if( (sewerIntroCounter == -2) && (sewerGrob3Counter == -1) && (tavernIntroCounter != -2) ) {
    //If you don't let grob join you
    sewerGrob3Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 0) ) {
    forestIntroCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
});

rightChoiceBox2.addEventListener('click', ()=> {
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 0) ) {
    seaIntroCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
})
//Choice boxes ende here

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
