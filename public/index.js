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
var octoItemContainer = document.getElementById('inv-item2');
var wickItemContainer = document.getElementById('inv-item3');
var pilzItemContainer = document.getElementById('inv-item4');

var temporaryText = document.getElementById('text-Chat').textContent;

//Story Variables

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
  "'Right. So the first one I know about is that old sailor in the corner over there. I heard he had some history with a gang of pirates that deal with that sort of thing.'", //14
  "'The second contact I know is out on an expidition to the ancient city in the eastern mountains.'",
  "'Them are some dangerous mountains, not to mention the ruins that lay within.'",
  "'The ruins were left by the Funny Folk. Thousands of years ago they used to go all over the kingdoms to do their funnies. But now the ruins are all thats left of them.'",
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
  "'Now where should I go from here?'" //0 - change to TaernBG
];
//************Intro stuff ends here******************************************************************************************************************************************************************************************


//************Door shenanigans start here******************************************************************************************************************************************************************************************
var doorIntroCounter = -1;
var doorIntroText = [
  "The door is the goal, so you decide to head over and search the ruins.",
  "Several days of traveling the lands up north pass.",
  "Eventually the terrain changes to something quite unique and interesting.", //2 - change BG to outside ruins surroundings
  "It appears almost as if the land is made of candy.",
  "You also notice what appear to be ruins of some sort of building... Also made of candy.",
  //Player:
  "'This must be the place, seems quite odd. How could a place like this exist?'", //5
  //No name
  "Standing outside the ruins you wonder if you are ready to brave whats beyond these broken walls.",
  //Player:
  "'Maybe I should gather more information about this place before I head in...'", //7
  //Choices show up.

];

var doorReturnCounter = -1;
var doorReturnText = [
  "You decide that you are not prepared yet and start your journey back to te tavern.",
  "After a couple days of travel, you arrive back at the tavern." //1 - tavernBG
];

var doorInsideCounter = -1;
var doorInsideText = [
  "You decide that you are ready to head into the ruins and reveal its secrets.",
  "Moving aside some sugar fossilized logs that have fallen over the entrance to the ruins you walk in.",
  "The environment inside is a mess with outside flora taking over parts of the building's interior.", //2 - inside background
  "Crouching and hopping over a couple of obsticles you make it further within the interior.",
  "Looking around you observe that there is only one way to proceed from here.",
  "There is what looks like a door that is blocked by a giant lollipop tree.", //5 - lollipop bg
  "You attempt to move the fallen lollipop tree out of the way, but its too heavy to move.",
  "How could you get to the door?" //7
];

var doorGrobFailCounter = -1;
var doorGrobFailText = [ //Consume Giant Lollipop
  "You attempt to consume the gaint lollipop.",
  "It takes you a while since its so large, but eventually you carve a hole large enough to walk through.",
  "You step through the hole, but you start to feel very ill.",
  "Pain spreads from your stomache and you are left on the ground moaning.",
  "It seems that you have gotten what is called sugar poisoning", //4 - black BG
  "Soon the pain fades away as you can no longer feel or think anything.",
  "[GAME OVER]" //6 - gamer over BG
];

var doorGrobWinCounter = -1;
var doorGrobWinText = [ //Let grob eat the lollipop tree
  "You decide to let Grob have an attempt at consuming the lollipop tree.",
  //Grob:
  "'I'm so glad that you've chosen me to do this! This makes me feel so accepted!'", //1
  "'Plus I'm hungry!",
  //No name
  "Grob seems super excited when he steps up to the tree and starts chomping away.", //3
  //Grob:
  "*Crunch* *Crunch* *Crunch*", //4
  "Om Nom Nom",
  //no name
  "You stand back and watch. Although Grob is trying to eat the tree, you can clearly see the chunks falling through the other side of his mouth...", //6
  "Wait... How does Grob eat anyways?",
  "While your pondering the idea, Grob turns around to look at you.", //8 - eated lollipop bg
  //Gorb:
  "'Yum! For candy it surprisingly tastes a lot like air!'", //9
  "'Any who, jobs done buddy!'",
  //No name:
  "You head through the door thats been cleared.", //11
  "On the other side you see a long room with a singular door far off at the end.",
  "Taking a couple of steps into the room something hits the ground right next to you.",
  "Looking at where the sound came from you see a candy corn arrow embedded in the ground.",
  "Taking cover behind the door and peeking to see where the arrows are coming from you see some sugar crystal gaurds.", //15 - cryastal archers bg
  "How could I deal with this situation?"
];

var doorArchersDieCounter = -1;
var doorArchersDieText = [ //Make a run for it
  "You try to make a run for the door.",
  "You quickly pick up pace and the archers are missing their shots a lot.",
  "It turns out that the crsytal archers arent good at tracking fast moving targets.",
  "As you approach the half way point of the massive room you trip on a small rock.",
  "Why is there a small rock in the middle of a giant room?", //4 - black bg
  "You fall to the ground whilst asking yourself this question. You are soon hit by multiple sugar poision inducing candy corn arrows.",
  "[GAME OVER]" //6 - GAME OVER SCREEN
];

var doorArchersDistractCounter = -1;
var doorArchersDistractText = [ //send someone as a distraction
  "You need to distract the sugar cyrstal archers somehow.",
  "Maybe you could send someone out to get their attention?",
  "", //2 Display special text for which charcter is available, like: "Grob was sent out screaming in eternal pain." or something
  "Somehow this actually works.",
  "You were able to make it safely to the other side and out through the door.",
  "Although at the cost of your companion.", //5 - remove friend item and picture.
  "Mourning the loss and paying respects you move forward as the fabled door must be near."
];

var doorArchersOctoCounter = -1;
var doorArchersOctoText = [ //Have Octo create a blind spot (inks himself)
  "You remember that Kraken Junior is indeed a karaken and can squirt ink.",
  "You ask Kraken Junior if he is capable of deploying a smoke screen to cover you.",
  //Kraken Junior:
  "'Aye, it be something I can do fer yee.'", //2
  //No name:
  "Kraken Junior quickly disperses a large cloud of ink throughout the room ahead.", //3 - smokey room w/archers BG
  "Which allows you to make it to the other side safely.",
  "Opening the door you look back to make sure eveyone makes it out.",
  "Successfully evading the archers you look forward to the fabled door, as it must be near."
];

var doorBridgeTrollCounter = -1;
var doorBridgeTrollText = [
  "Taking a look at your new surroundings it appears that you are in some sort of chocolate swamp.",//0 -change to chocolate swamp 2/bridge BG
  "There is a bridge in front of you made out of Charles Chewsters that looks to lead in the right direction.",
  "So you continue your adventure across the bridge.",
  "As you were making your way across the bridge you notice a strange figure climbing up from the side.", //3
  "They climb up right in front of you and stare at you with a big smile.", //4 - change to clown looking at you.
  "It looks like they are wearing clown attire, but its entirely made out of candy. Must be one of the Funny Folk.",
  //Player:
  "'Hello there, how may I help you? I hope I'm not annoying you by being here, I just need to get over this bridge.", //6
  //Clown:
  "'Heyo bucko! This here is my delicious bridge!'", //7
  "'I've been living off of it for sustenance for 300 years!!!'",
  "'I was having my meal here like any normal afternoon until I heard someone on my bridge!'",
  "'Hooo Heeee am I excited to get some visitors!'",
  "'Okay now bucko, lets play a game.'",
  "'How about if you can solve my riddle I allow you to cross my bridge?'",
  //Player:
  "'Uhh sure, but what happens if we fail to get it right?'", //13
  //Clown:
  "'Well by gee golly! *Honk* *Honk* I would dip you with chocolate and add you to my bridge so that I won't have to worry about this winter!'", //14
  "'HOOOOOO HEEEEEE!!!! I'm Excited to play this game!'", //15
  "'Now scooch your boot, here comes the riddle!'",
  "'What do you call one who happily devotes himself to farming candy?'",
  //Player:
  "Hmmm, I should think about what I'm gonna do carefully..." //18
];

var doorBridgeDieCounter = -1;
var doorBridgeDieText = [ //Try answering your self.
  //Player:
  "'Uhh, the answer is... twix are for kids?'", //0
  //Clown:
  "'Eeeeh Hee hee heeeeee!'", //1
  //No names
  "...", //2
  //Player:
  "'Uhh, does that mean I win?'", //3
  //Clown:
  "'Nope! EEEEEHHH HEEEEE HEEEEE!!!! You lads need some better education!'", //4
  //No names
  "The clown dashes at you with lightning speed and knocking you to the ground.", //5
  "You can then feel the clown picking you up by the legs.",
  "You try to break free of his grasp, but your struggles are in vain.",
  "The clown brings you to the bottom of the bridge and dips you in the chocolate swamp, covering your whole body.", //8 - Black BG
  "...",
  "You are then added to the bridge to solidify to.",
  "You then feel the sugar poisioning setting in.",
  "Soon you feel nothing.",
  "[GAME OVER]" //13 - GAME OVER BG
];

var doorBridgeSacrificeCounter = -1;
var doorBridgeSacrificeText = [ //have a buddy take a try.
  "You decide to let someone else take a try on this one.",
  //Character name:
  "", //1 - Character specific dialogue
  //Clown
  "'What??? I don't understand. Hmmm, we must discuss this further.'", //2
  //No names
  "The clown gets distracted with the answer, which gives you enough time to sneak around the clown without him noticing.", //3
  "Once fully across the bridge you run as fast as you can to get far away from this crazy candy clown.",
  "Although you made it, you had to leave someone behind."
  //Head to Pilz check.
];

var doorBridgeWickCounter = -1;
var doorBridgeWickText = [
  "You remembered that Wick has knowledge of the Funny Folk, maybe he would have the best idea of what the answer is.",
  //Wick:
  "'I believe the answer to your sweet riddle is; What is a jolly Rancher?'", //1
  //Clown:
  "'HOOOOOOOOOOOO HEEEEEEEEEEE!!!!!'", //2
  "'Now thats a stinker! It never gets old!'",
  "'Feel free to pass through travelers! I hope you all have a twizzly of a day! Hoooo Heeee.'",
  //No names
  "Good thing Wick was here to give input. You thank the clown for safe passage and head across the bridge.", //5
  //Clown:
  "'Toodles!'", //6
  //No names
  "Once fully across the bridge you run as fast as you can to get far away from this crazy candy clown." //7
];

var doorCakeCanyonCounter = -1;
var doorCakeCanyonText = [
  "After a very eager jog, you silently celebrate your newfound distance from the nearest Funny Fellow.",
  "Unfortunately this jog has led you to a sticky situation; A large cake canyon seems to be between you and forward progress.",
  "There seems to be a drawbridge for getting across, but its not in the ideal position as of now.",
  "If you squint you can see a lever on the other side, probably for letting down and pulling up the bridge you wish to cross.",
  "As confident as you are in your long arms, you dont think you can reach it from here.",
  "Looks like a different course of action will be required..."
];

var doorCakeCanyonSacrificeCounter = -1;
var doorCakeCanyonSacrificeText = [
  //No name
  "Well, there may be a DIFFERENT way to flip a lever from here...",
  "You start to rummage through your currently carried ITEMS.",
  //Character name:
  "", //2 - character specific dialogue
  //No name
  "With your trusty arms, used for a multitude of things, you wind up, focus, and throw your companion as you would a frisbee.",//3
  "They go flying over the canyon, flying with elegance. They manage to get to the opposite side and hit the lever!",
  "However, your throw may have been too powerful, as the impact with the lever caused the frisbee like projectile to ricochet, and fall into the canyon.",//5 Bridge Down
  "When the lever was hit the bridge fell into place allowing for safe passage.",
  "Thanks to the honorable sacrifice of your faithful companion, a lever has been pulled, and a bridge has become crossable."
]

var doorCakeCanyonDieCounter = -1;
var doorCakeCanyonDieText = [
  //No name
  "You see no other choice.",
  "In order to get across you must eat through the cake walls and make a tunnel around the canyon.",
  "With a deep breath and some mental fortitude, you get to work.",
  "The walls begins to hollow as it's layers are eaten through with speed and determination.",
  "Considerable progress is made in a very short time, and with enough effort and time...",
  "You find yourself in a perfect position.",
  "Thanks to your master plan, you've found yourself an alternative means of getting to the other end.",
  "You take one step onto the other side, before feeling a sharp pain in your gut.",
  "Collapsing onto the floor you have a sudden realization.",
  "You are very susceptible to deadly sugar poisoning.",
  "With a bellyache, you start to lose consciousness...",//10 Black Screen
  "[GAME OVER]"//11 Game Over
]

var doorCakeCanyonPilzCounter = -1;
var doorCakeCanyonPilzText = [
  //No name
  "You have a sudden moment of genius.",
  "You are pretty sure that you have a certain... ally that could help.",
  //Pilz
  "'Oh hello! I see we are at an impasse... Have you brought me out so we can use our combined skills to get across?'",//2
  //Player
  "'Yes, I think I have a plan that can get the bridge lowered. How... bouncy are you?'",//3
  //Pilz
  "'Funny you should ask! Mushrooms are quite well known for their bouncing potential.'",//4
  "'Sometimes we even act as bouncing platforms!'",
  //Player
  "'Perfect. In that case, I'm going to bounce across and pull that lever.'",//6
  //No name
  "Pilz readies themself for bouncy impact.",//7
  "With a running start, you manage to land a jump directly on the center of Pilz's head.",
  "The impact sends you high into the air, Pilz was right, mushrooms have crazy bounce potential.",
  "Soaring through the air, you eventually land on the other side, crossing the entire canyon.",
  "With the help of your trusty mushroom companion, you pull the lever, lowering the bridge so that safe passage is guarenteed."//11 Bridge Down
]

var doorCakeCanyonEatPilzCounter = -1;
var doorCakeCanyonEatPilzText = [
  //No name
  "Hmm... thinking up a plan is hard... esspecially with an empty stomach.",
  "You'd eat the cake surrounding you, but having a potential bellyache sounds counter productive...",
  "Suddenly you remember you have a very... scrumptious... resource with you.",
  //Pilz
  "'Oh hello! I see we are at an impasse... Have you brought me out so we can use our combined skills to get across?'",//3
  //Player
  "'Uhm... yes. Something like that.'",//4
  //Pilz
  "'Wonderful! I truly believe we can figure this out together with our combined wits.'",//5
  //Player
  "'Y-yeah. Together... How about you take a look over there and assess our situation?'",//6
  //Pilz
  "'Good idea, I can't be helpful if I don't know what I'm helping with!'",//7
  //No name
  "Pilz turns around and begins to enthusiastically examine the situation on the other end of the canyon.",//8
  "As your stomach growls you lose control of yourself.",
  "You grab Pilz with both hands and do what comes naturally.",//10 Black Screen?
  "*Crunch* *Crunch* *Crunch*",
  "You suddenly feel much more full...",//12 Pilz Gone
  "But also empty.",
  "Pilz is now gone, but the impasse is still here.",
  "With your newfound full stomach, you leap towards the other end of the canyon.",
  "Unexpectedly, it seems like you are... bigger? Taller?",
  "Somehow you feel like you are making more distace across this canyon than you normally would.",
  "With a sudden thud, you find yourself on the other end of the canyon. You pull the lever so you can get back easily."//16 Bridge Down
]

var doorGoodEndingCounter = -1;
var doorGoodEndingText = [
  //No name
  "After some additional walking... you think you are in the clear.",
  "No additional obsticles appear. You simply keep walking and walking.",
  "The quiet atmosphere is relaxing compared to the journey getting here.",
  "Eventually...",
  "You see it.",
  "The Door.",//5 Empty door
  //Player
  "'At last... my journey's destination.'",//6
  //No name
  "You examine the shut door, tracing your fingers over the engravings... holes?",//7
  "Realization hits... these shapes are familiar to you.",
  "Carefully, you take out all your carried ITEMS.",
  "The holes perfectly match them.",
  "Each companion you've gathered looks to be tailor made to fit into the door's slots.",
  "You delicately insert each of them into the corrosponding hole.",//12 Full Door
  "The door looks complete.",
  "It begins to open, revealing a bright light behind it.",
  "Your eyes have not adjusted to the light, but you can hear familiar voices come across from the other side.",//15 White Screen
  //Grob
  "'Don't be a party pooper, you've made me the party scooper! Heh heh just kidding, we are buds.",//16
  //Kraken Junior
  "'Now that we've passed our trials, its time to start my quest for world domination!'",//17
  //Wick
  "'Oh its so simple! The real power was the friendships we've forged along the way!'",//18
  //Pilz
  "'It's a perfect place to spread my spores with pals! Thanks for bringing me!'",//19
  //Everyone
  "Happy birthday friend!",//20
  //No name
  "[GOOD END]"//21
]

var doorNeutralEndingCounter = -1;
var doorNeutralEndingText = [
  "After some additional walking... you think you are in the clear.",
  "No additional obsticles appear. You simply keep walking and walking.",
  "The quiet atmosphere is relaxing compared to the journey getting here.",
  "Eventually...",
  "You see it.",
  "The Door.",//5
  //Player
  "'At last... my journey's destination.'",//6
  //No name
  "You examine the shut door, tracing your fingers over the engravings... holes?",//7
  "Realization hits... these shapes are familiar to you.",
  "Carefully, you take out all your carried ITEM(S).",
  "The holes perfectly match them.",
  "Each companion you've gathered looks to be tailor made to fit into one of the door's slots.",
  "You insert the ITEM(S) into its corresponding hole.",//12 Not Full Door
  "The door looks semi complete.",
  "It begins to open, revealing a bright light behind it.",
  "Your eyes have not adjusted to the light, but somehow... it feels a little empty on the other side.",//15 White Screen
  "Despite finally being where you wanted to be, you can't help but feel there were aspects of the journey you wish had gone differently.",
  "Perhaps there were choices made that resulted in loss, or maybe choices that left you without gain...",
  "At the very least you made it. At least you can continue making choices as you venture into this new life.",
  "You step into the door's bright light...",
  "And find a face corresponding to each item inserted on the other side.",
  "[NEUTRAL END]"//21
]

var doorBadEndingCounter = -1;
var doorBadEndingText = [
  "After some additional walking... you think you are in the clear.",
  "No additional obsticles appear. You simply keep walking and walking.",
  "The quiet atmosphere is relaxing compared to the journey getting here.",
  "Eventually...",
  "You see it.",
  "The Door.",//5 Empty door
  //Player
  "'At last... my journey's destination.'",//6
  //No name
  "You examine the shut door, tracing your fingers over the engravings... holes?",//7
  "Realization hits... these shapes are familiar to you.",
  "Grob...",
  "Kraken Junior...",
  "Wick...",
  "Pilz",
  "Tears flood through your eyes...",
  "Why did it have to end this way?",
  "How could I let this happen to them?",
  "All for what?",
  "To get to this stupid door?",
  "Was there not another way?",
  "If only we were all here together...",
  "Grob was annoying, but had his own charm.",
  "Kraken junior was a mighty sailor and was adorable.",
  "Wick was knowledgable and knew friendship well.",
  "Pilz was... Yummy looking and naive, but he loved his people.",
  "We could all go and make the best of friends together...",
  "Wait...",
  "Maybe...",
  "I should've cherished the friends I made along the way.",
  "Instead...",
  "I'm here...",
  "All alone...",
  "[Game End]" //31
];

var doorJudgement = 0;
//************Door shenanigans end here******************************************************************************************************************************************************************************************


//************Wick starts Route here******************************************************************************************************************************************************************************************

//*********************************//
//       WICK ROUTE DIALOGUE       //
//*********************************//
var wickRoute = 0;
//*******//
// INTRO //
//*******//
var wickIntroCounter = -1;
var wickIntro = [
  //Thoughts
  "You decide that the nearby mountain would be a good place to look.",
  "Stories of a very advanced civilization of friends residing up there... Supposedly.",
  "A poster on the tavern wall even mentions a circus was even set to travel through the mountain for a show...",
  "...",
  "It also says they never ended up coming back afterwards.",
  //Out Loud
  "'Phht, the only thing stopping people from completing the journey is the hike, I trust my legs to get me there.'",
  //Thoughts
  "You see the mountain after a surprisingly short amount of time following a worn road out of town.", //Trail
  "As you get closer and closer, you begin to realize you didn't exactly prepare for the blizzard that seems to be taking place there.",//Mountain pic
  "Buuuuuuuuuuuut you've already made it this far, so turning back isn't an option at this point.",
  "You'd gotten this far, and going back and forth sounds like a hassle. It's the time sink fallacy."
]

//****************//
// WICK ENCOUNTER //
//****************//
var wickBase1Counter = -1;
var wickBase1 = [//Hike up anyway.
  //Out Loud
  "'Well, it might look bad from here. But I'm sure blizzards lighten up the further in you go.'",
  "'I'll just start heading up and see what this advanced friendship society is all about.'",
  //Thoughts
  "As time passes, and you walk further and further into a literal blizzard. You realize that blizzards are actually quite large and not easily out walked.",
  "As your limbs start going numb and you start to lose all of your energy, you collapse into the snow wishing you brought a coat.",
  "Eventually, you lose consciousness...", //Black Screen
  "...",
  "...",
  "...",
  "You don't seem to be dead however, as you find yourself waking up to the heat of a fire inside a cave!",//Cave with fire
  "Looking around you notice an individual vaguely resembling a ghost or fire is sitting accross from you.",//Wick appears
  //Wick
  "'Oh! You're awake! I found you collapsed outside while I was navigating up the mountain.'",
  "'I brought you here since I was setting up camp nearby.'",
  "'The blizzard is dying down, so we should be able to leave soon-'",
  //Thoughts
  "With amost perfect timing, a small avalanche blocks the cave's mouth, leaving a large wall of snow blocking you and your new acquaintance in.",
]

var wickBase2Counter = -1;
var wickBase2 = [//Look for shelter.
  //Out Loud
  "'I seem to have made a severe and continuous lack in judgement.'",
  "'I'm pretty sure blizzards are well known for freezing people to death if unprepared... I'll take it slow and keep an eye out for any suitable shelter.'",
  //Thoughts
  "Deciding to take it slow and seek shelter for now, you manage to spot light coming from a cliffside cave!",
  "Approaching the cave proves to be quite easy with your cunning decicion not to rush headfirst into certain peril.",
  "Upon entering the cave, you notice a small campfire has been lit.",//Cave with fire
  "And upon even closer inspection there seems to be a person vaguely resembling a ghost or fire sitting next to it!",//Wick appears
  //Wick
  "'Oh! A visitor! Are you also seeking shelter from the blizzard?'",
  "'You're free to make use of my small camp if you wish, though it isnt much...'",//Blush
  "'I'm quite familiar with this mountain, so it shouldn't be long before the blizzard dies down and we can continue hiking-'",
  //Thoughts
  "With amost perfect timing, a small avalanche blocks the cave's mouth, leaving a large wall of snow blocking you and your new acquaintance in.",
]

//Huddle for warmth.
var wickBase3Bad1Counter = -1;
var wickBase3Bad1 = [//Zero Friends
  //Out Loud
  "'Heh, the warm blooded body has anywhere between 97 and 100 degrees of cold repelling heat, I can make this work.'",
  //Thoughts
  "You realize you don't have any companions, and decide to make due with just yourself.",
  "Wrapping your arms around yourself, you huddle for warmth and charge into the blizzard.",
  "As you continue running, the hug you give yourself begins to stir feelings...",
  "Feelings of self worth... feelings of pride.",
  "During this short amount of time, you soul search, realizing that maybe the reasons you don't have friends to love is because...",
  "you didn't even love yourself.",
  "With this realization you hug yourself harder, relishing in your newfound self respect.",
  "While you realize that loving yourself is good, you also begin to realize it isn't enough to ward off deadly frostbite.",
  "Your movements slow, and you eventually turn into a self loving popsicle...",//Black Screen
  "[GAME OVER]"//Game Over
]

var wickBase3Bad2Counter = -1;
var wickBase3Bad2 = [//One Friend
  //Out Loud
  "'Heh, the warm blooded body has anywhere between 97 and 100 degrees of cold repelling heat, I can make this work.'",
  //Thoughts
  "You may only have one companion, but decide to make do.",
  "Wrapping your arms around your one companion, you both charge into the blizzard.",
  "As you both continue running, the hug begins to to stir feelings...",
  "Feelings of appreciation... feelings of compassion.",
  "During this short amount of time, you come to make a realization...",
  "Somebody willing to run into a blizzard into certain peril is maybe more than just a companion.",
  "Perhaps somebody so willing to help you find happiness can easily be called a friend.",
  "Realizing that the real freind was the friend you made along the way is good, but not enough to ward off deadly frostbite.",
  "You and your friend's movements slow, and with time you freeze into a friendship popsicle.",//Black Screen
  "[GAME OVER]"//Game Over
]

var wickBase3PassCounter = -1;
var wickBase3Pass = [//More Than One Friend
  //Out Loud
  "'Heh, the warm blooded body has anywhere between 97 and 100 degrees of cold repelling heat, I can make this work.'",
  //Thoughts
  "Through the power of combined warmpth the cold was warded off from you and your companions!",
  "You all charge with immense speed through the blizzard, the momentum keeping your spirits high!",
  "After making astounding progress your company stumbles upon something in the snow...",
  "Upon closer inspection it seems to be a person who has collapsed!"
]

var wickIgnoredCounter = -1;
var wickIgnored = [//Ignore
  //Thoughts
  "You have too much momentum to stop now!",
  //Out Loud
  "'We can't waste time, onwards!'",
  //Thoughts
  "You ruthlessly decide that your time is not worth the potential loss of somebody else's life.",
  "As you said, we can't waste time, we're trying to make some friends here buddy.",
  "You continue barreling through the montain, but don't seem to find any other forms of life.",
  "With an unfruitful adventure, you decide to go back to the tavern..."
  //BACK TO TAVERN
]

var wickSavedCounter = -1;
var wickSaved = [//Save
  //Thoughts
  "You decide to slow yourselves down and save this individual!",
  //Out Loud
  "'Ok team, we will carry this person to shelter!'",
  "'Heave... HO!'",
  //Thoughts
  "Lifting the person onto your back, you scout around for shelter... and spot a cave!",
  "Once inside you see a camp was already being set up inside.",//Camp (unlit)
  "Your companions jump back into your invintory as you finish seting up the fire.",
  "The individual on your back is uncouncious for a while...",//Camp (lit)
  "...",
  "but eventually wakes!",
  //Wick
  "'Oh? What's going on here? Where am I?'",//Confuse
  //Out Loud
  "'I found you passed out in the snow outside and decided to bring you to this small camp I found.'",
  //Wick
  "'Oh...'",
  "'huh.'",
  "'In that case thank you! I was really cutting it close that time! Luckily I passed out pretty close to my camp!'",//Blush
  //Out Loud
  "'You were passed out for quite a while, it looks like the blizzard had time to die down, are you okay?'",
  //Wick
  "'Ah, I'm fine! If the blizzard is dying down that means we can leave and-'",
  //Thoughts
  "With amost perfect timing, a small avalanche blocks the cave's mouth, leaving a large wall of snow blocking you and your new acquaintance in.",
]

//***********//
// AVALANCHE //
//***********//
var avalancheCounter = -1;
var avalancheResponse = [
  //Wick
  "'Well...'",
  "'Uhm...'",
  "'I guess we'll need to figure something else out!'",
  "'The caves in these mountains are ancient tunnleways, and typically have 2 enterences...'",
  "'Perhaps we can explore deeper and find a way out together? My name is Wick, I hope we can get along!'"//Blush
]

var avalancheDigCounter = -1;
var avalancheDig = [//Dig out. Easy.
  //Out Loud
  "'Phht, no need. The avalanche wasn't that big.'",
  "'How about INSTEAD I just DIG us out? No need to be dumb and wonder into a potentially dangerous cave.'",
  //Wick
  "'Wait I don't think you shou-'",
  //Thoughts
  "You begin to use your bare hands to slowly scoop away at the snow, ignoring whatever Wick was about to say.",
  "But perhaps you should have heard them out, as your uneven removal of snow has resulted in poor structual stability.",
  "Even worse, it seems the avalanche was much bigger than you had imagined...",
  "You find yourself buried under a self made avalanche of mistakes...",//White Screen
  "[GAME OVER]"
]

//**************//
// CAVE EXPLORE //
//**************//
var exploreCavesCounter = -1;
var exploreCaves = [//Agree to explore.
  //Out Loud
  "'Likewise! I'm ",
  //Thoughts
  "You and your new acquaintance begin to head deeper and deeper into the caves.",//Dark hallway
  "Luckily it seems like you coming unprepared without a torch was not too big a mistake, as Wick happens to dimly glow, illuminating the way.",
  "After a few minutes pass, light becomes even less of a concern, as glowing crystals seem to line the walls as you go further.", //Glowing Crystals
  "It's quite a pretty sight... albeit a little strange. You've never seen glowing rocks... or people.",
  "However, even more strange is the increasing amount of...",
  "...",
  "...What seems to be circus supplies?", //Hallway with broken shit
  //Wick
  "'The crystals are present throughout the entire mountain's cave system... They were used as lights for old travelers passing through!'",
  "'Though mountains are still quite treacherous even if well lit... These seem to be remnants of the Funny Folk, people with very... interesting culture!'",
  //Thoughts
  "As you proceed further into the cave circus supplies becomes more frequent and you both begin to realize there is a distant... honking sound getting louder.",
  "...",
  "Or maybe its getting closer?",
  //Wick
  "'This is... concerning. I'm not positive but it seems we may have some... questionable Funny Folk company.'",
  "'Perhaps we should do something before we proceed further?'",
  //Out Loud
  "'...Agreed. Hmm... let me think...'"
]

//*****************//
// CLOWN ENCOUNTER //
//*****************//
var wickFireCounter = -1;
var wickFire = [//Light Wick on fire.
  //Thoughts
  "Realizing that the crystals alongside Wick's natural glow isn't giving you an excellent view of the whole hallway, you decide to try something.",
  "Perhaps Wick's glowing potential can be enchanced?",
  //Out Loud
  "'Hold still for a second.'",
  //Wick
  "'Hmm? What for?'",
  //Thoughts
  "You snag a match from Wick's backpack and light it, before promptly tossing it back in.",
  "This seems to almost instantaneously cause Wick to burst into flames, providing an excellent view deeper into the cave.",
  "Ignoring the screaming Wick seems to be partaking in, you notice a figure standing at the very end of the flames light...",
  "A clown(?) seems to be standing there, silently observing the now frantic Wick rolling around on the floor. Must be one of the Funny Folk.",//Clown
  //Wick
  "'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH!!!'",
  //Thoughts
  "It looks at you and gives a very slight nod. It seems satisfied somehow.",
  "Like a mime, it pulls some sort of invisible leaver, opening a trapdoor beneath you and Wick.",
  "The hole leads to a slide, which somehow, is making you slide upwards.",//Slide???
  "A short sliding session ensues, with you and Wick somehow ending up being spat out at the base of the mountain despite sliding upwards.",//Mountain
  "The Funny Folk certainly have funny ideas concerning the concept of up and down.",//Confetti
  //Out Loud
  "'Well that seemed to work out. I'm sure glad we-'",
  //Wick (Angry)
  "Wick, seeming angry, throws a lit match at you.",
  "Since you traveled light, the flame isn't too big, but you certainly end up on fire... which hurts a lot.",
  "Wick storms off without a word, letting you roll around in the snow to extinguish yourself.",
  "You make mental note that lighting people on fire unprompted does not feel good.",
  "Extinguished, you decide to not light any future potential companion on fire and head back to the Tavern."
  //ROUTE END  (No Friend)
]

var wickClownStabCounter = -1;
var wickClownStab = [//Turn back, head to camp.
  //Out Loud
  "'This seems sketchy... Maybe we should just turn back for now? We can come up with a new plan at camp.'",
  //Wick
  "'I have enough supplies at camp to last a little while, we can discuss Funny Folklore to pass some time!'",
  //Thoughts
  "As you turn your backs, you suddenly feel a sharp pain come from behind, enough to make you fall to your knees.",
  "It's hard to say what happened next exactly, as all you could observe after this was a loud honk and your face coming into contact with the ground.",
  "It seems that your life has been ended... extremely quickly by something you could not fully observe.",
  "[GAME OVER]"
]

var wickClownHornCounter = -1;
var wickClownHorn = [//Honk back, embrace honkage.
  //Out Loud
  "'How about we... honk back?'",
  //Thoughts
  "You pick up a spare horn from the pile of disgarded circus supplies.",
  "Instead of turning back and returning to camp, you decide to honk back and return to honk.",
  "(...if that makes any sense.)",
  "The approaching honking ceases. Instead, a figure slowly walks into view.",
  "What appears to be a clown(?) stands before you, seemingly intrigued by the honking you made.",//Clown
  "Looking closer you notice that it has a claw for a hand...",
  "Realizing you are standing in a dark cave surrounded by abandoned circus supplies, in front of a silent clown(?), who has a claw hand, who has essentially ambushed you, you decide another decision must be made."
]

//*******************//
// CLOWN INTERACTION //
//*******************//
var wickApproachClownCounter = -1;
var wickApproachClown = [//Approach clown(?).
  //Out Loud
  "'Surely this Funny Fellow means us no harm. They are meant to bring joy to people after all.'",
  "'I'm going to approach and speak with it.'",
  //Wick
  "'Are you sure you want to get close? They usually have a riddl-'",
  //Out Loud
  "'Oh hello there! We were trapped in this cave and were wondering if-'",
  //Thoughts
  "The moment you get close enough to the Funny Fellow, you learn very quickly that it's claw hand is not for show.",
  "You think you might have heard Wick scream, but you can't be sure. It was hard to tell over the sensation of rapidly bleeding out on the ground.", //Red Screen
  "The honking sound grows more rapid, and you lose consciousness thinking about how unfunny that Funny Fellow was.", //Black Screen
  "[GAME OVER]"
]

var wickGiveHornWCounter = -1;
var wickGiveHornW = [//Give another horn to Wick.
  //Thoughts
  "Seeing as the Funny Fellow looks interested in the horn sounds, you decide to keep it's interest focused on the horns.",
  "You toss an extra horn to Wick, who seems to understand the plan.",
  "In perfect unison, you and Wick make a beautiful melody of honking...",
  "HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK ~ HONK",
  "The Funny Fellow does not move a lot, but is looking between you and Wick back and forth.",
  "As the enchanting melody of soothing horn honking reaches it's end, the cave falls silent.",
  "There is a mask in the way, but you can imagine a tear of joy streaming beneath it.",
  "Who wouldn't shed a tear or two after such a preformance?"
]

var wickGiveHornCCounter = -1;
var wickGiveHornC = [//Give your horn to clown(?).
  //Thoughts
  "Seeing as the Funny Fellow took interest in the honking, you decide to let the clown upgrade it's honking privileges.",
  "Taking a few steps closer, you lightly lob the horn over to the Funny Fellow.",
  "You may have just blinked weird, but it appeared as if it was able to instantly grab the horn without moving.",
  "It looks down into its non claw hand holding the horn, and honks it.",
  "It appears to honk again, despite not using the horn this time.",
  "You realize the Funny Fellow was somehow honking before actually possessing the horn.",
  "It begins to rapidly emit honking sounds out of itself and the horn simultaneously",
  "After a few moments it stops, and looks back up."
]

//******************//
// WICK RECRUITMENT //
//******************//
var wickClownSatisfiedCounter = -1;
var wickClownSatisfied = [
  //Thoughts
  "It looks at you and gives a very slight nod. It seems satisfied somehow.",
  "Like a mime, it pulls some sort of invisible leaver, opening a trapdoor beneath you and Wick.",
  "The hole leads to a slide, making you slide down.",//Slide???
  "After sliding down a surprisingly long slide, you are spat out at the top of the mountain... despite sliding downwards?",
  "The Funny Folk certainly have funny ideas concerning the concept of up and down.",
  //Wick
  "'Well... That was exciting! I wonder why the rest of the Funny Folk seem to have vanished?'",//Confuse
  "'But hey! We made it to the top of the mountain somehow!'",
  "'I came here in hopes of finding an amazing power said to be found here... Something so powerful it could trumph all other obtainable powers.'",
  "'I had hoped I'd discover what that power was by researching the Funny Folk, who are said to have mastered it.'",
  "'But it seems like all thats here is a lone Funny Fellow and the mountain's peak.'",//Sad
  "'What about you? Now that you're here, what did you hope to find?'"
]

var wickConversationKillerCounter = -1;
var wichConversationKiller = [//Keep your reasons secret.
  //Thoughts
  "It would be kind of embarassing to admit you have no friends and wanted to find a mysterious magic friendship door with the help of Funny Folk... You decide to keep it secret.",
  //Out Loud
  "'Well... Uh... I wish you luck on your quest to find this power... but I cannot tell you what I'm looking for.'",
  "'It's much to important... and uh... secretive! I can't just tell anybody about it willy nilly. I hope you understand.'",
  //Wick
  "'Oh. Uh... okay, I suppose I shouldn't stick my buisness into somebody else's...'",
  //Thoughts
  "Wick does not pry further, but sadly this was a real conversation killer.",
  "It gets pretty awkward and you both start heading down the mountain in silence.",
  "Your conversational skills could use some work it seems, you and Wick polietly part ways once you've reached the base of the mountain.",
  "Alls well that ends well I suppose?"
  //ROUTE END (No Friend)
]

var wickRudeDismissalCounter = -1;
var wickRudeDismissal = [//Wick sounds dumb.
  //Out Loud
  "'That sounds so dumb. Why would a bunch of people dressed like clowns have unrivaled power?'",
  //Wick
  "'M... M-My ancestors had a legend tha-'",
  //Out Loud
  "'It was probably just some folklore meant to keep children on their best behavior or something.'",
  "'Anyway sorry to hear that your adventure didn't turn out, I came here to-'",
  //Thoughts
  "Before you could explain your quest to find an ancient friendship civilization, Wick seems to walk away.",//Angry
  "You think that was quite rude, as they had asked why you were here.",//Gone
  "It can't be helped I guess, some people just don't know how to be considerate to other people's feelings.",
  "You follow them down the mountain from behind, as they seem to know the mountain better than you.",
  "Since you couldn't find anything outside a potentioally dangerous Funny Fellow, you decide to go back to the Tavern empty handed..."
  //ROUTE END (No Friend)
]

var wickExplainQuestCounter = -1;
var wickExplainQuest = [//Explain your quest.
  //Out loud
  "'I came here on a quest of my own...'",
  "'I too seek an ancient civilization of Funny Folk.'",
  "'There is supposedly a magical door with mysterious power said to bring you to a realm of infinite possibilities, a promised realm of friends and paradise.'",
  "'The civilation of Funny Folk said to be here was a lead I followed in hopes of finding it, but we both seem to have come up empty handed on our quests...'",
  //Thoughts
  "Wick seemed to be eagerly listening to your explanation.",
  //Wick
  "'Oh! Well that sounds like a fine journey to find yourself on!'",
  "'Hmm... given that we both came here looking for the source of mysterious power, is there a chance we are looking for the same thing?'",
  "'Since we both seem to have hit a roadblock, why dont we travel together? Perhaps we can both find what we are looking for by working together!'"
]

var wickAcceptFriendCounter = -1;
var wickAcceptFriend = [//Additional companionship couldn't hurt!
  //Out Loud
  "'I dont see why not! Additional company couldn't hurt!'",
  //Wick
  "'I couldn't agree more! With an extra pair of eyes looking out, we're sure to find something eventually!'",//Blush
  "'Now that everything has settled down, why don't we return to the Tavern? I'll try to make it a little easier to travel.'",
  //Thoughts
  "YOU HAVE AQUIRED 'WICK'!"
]

var wickSpookyCounter = -1;
var wickSpooky = [//You are too spooky...
  //Out Loud
  "'Erm... I would, but you are kind of...'",
  "'...'",
  "'...spooky. Like, are you a ghost? Fire person? Candle? Like, how does somebody just glow and have-'",
  //Thoughts
  "Maybe not the best choice of words used there.", //Angry
  "Wick seems to have not liked what you had to say about them...",
  "Before you could say anything else, Wick storms off without a word."
  //Friend miss, but continue.
]

var wickSplitCounter = -1;
var wickSplit = [//We should split up.
  //Out Loud
  "'I mean I guess? I think it would be a better idea if we split up though.'",
  "'Our odds of finding things is much higher if we are looking in different locations after all.'",
  //Wick
  "'O-oh. Y-yeah I guess that makes sense... In that case I suppose we can just sort of...'",//Confuse
  "'go our seperate ways?'",
  //Out Loud
  "'Sounds like a solid plan, good luck out there.'",
  //Thoughts
  "Wick walks off a little confused. You get the feeling if they're confused from that conversation they might not be very helpful looking for things.",
  "Well whatever, no time to waste, friends won't find themselves!"
  //Friend miss, but continue.
]

//***************//
// TAVERN RETURN //
//***************//
var wickGoBackCounter = -1;
var wickGoBack = [
  //Thoughts
  "It's time to head back! Going up the mountain was pretty hard... but getting down should be much easier.",
  "Question is... how?"
]

var wickGoDownNormalCounter = -1;
var wickGoDownNormal = [//Go down normally (hike).
  //Thoughts
  "Just hiking down is an option you figure, no need for fancy tricks or wild action.",
  "You casually make your way down the mountain and eventually find yourself at it's base.",
  "Sometimes the simple solution is the most effective. You walk back to the tavern to persue a different lead."
]

var wickRollCounter = -1;
var wickRoll = [//Roll down as a snowball.
  //Thoughts
  "You just had the best idea.",
  "So like, wheels and balls roll down slopes right?",
  "Solution: Become a ball and roll.",
  "As you toss yourself down a steep slope and begin to roll up a bunch of snow, your speed increases greatly.",
  "You go flying down the mountain, getting down much more effeciently than any other method.",
  "However, this is also an issue, as when you reach the bottom, you still have a lot of built up speed.",
  "So much speed in fact, that your entire body is crushed the moment you reach non sloped ground.",
  "But sometimes it's the journey that matters, and you can say with certainty that it was fun up until that point.",
  "[GAME OVER]"
]

var wickSnowBoardCounter = -1;
var wickSnowBoard = [//Use the power of your companions. (One Friend)
  //Thoughts
  "You pull out a trusty companion and kickflip them in item form.",
  "They are sturdy enough to support your weight and you begin snowboarding down with elegence and grace.",
  "Through the power of combined utility anything is possible. You walk back to the tavern to persue a different lead."
]

var wickSnowBoardBadCounter = -1;
var wickSnowBoardBad = [//Use the power of your companions. (Zero Friends)
  //Thoughts
  "You realize you don't have any companions to make use of... No matter.",
  "You believe in yourself instead, and attempt to manifest a snowboard midair as you jump over a steep slope.",
  "Sadly this effort in in vain, and ultimately you fumble over your own feet and fall into a ravine.",
  "The impact is responsable for instantly killing you, so at least you don't need to do something like amputate a limb.",
  "[GAME OVER]"
];
//************Wick route ends ends here******************************************************************************************************************************************************************************************


//************Pilz route starts here******************************************************************************************************************************************************************************************
var pilzRoute = 0; //Wether the Pilz route has been completed.
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
  "After a couple of hours you find yourself at a fork in the road. One option seems like it lead up onto a hill.",
  "The other trail looks to go lower in elevation towards a creek.",
  "Which trail should you take?" //10
  //Leads into 2 choices
];

var forestHillCounter = -1;
var forestHillText = [
  "You begin down the path towards the hill.",
  "It takes a surprising amount of effort and time despite the top of the hill not appearing to be too high in elevation.",
  "Each step seems to get harder and harder the further you go.",
  "After a couple of hours of strain you decide to take a rest",
  "During your rest you realize that you have gotten quite hungry.",
  "Sadly you forgot to take some extra rations along with you before heading out from the tavern",
  "You decide that you will save what you have left of your rations for more important times.",
  "Continuing your hike back up the hill, you eventually reach the peak.", //7
  "While you were taking time to catch your breath and get used to your surroundings, you notice a cave atop the peak.",
  "The sky is already dark, you should find a place to rest the night."
];

var forestCreekCounter = -1;
var forestCreekText = [
  "You start your hike down towards the creek.",
  "After several minutes of following the trail you arrive at the the shore of the creek.",
  //player:
  "'If someone were to live in these woods, surley they would be by the creek.'", //2
  //No Name
  "So you decide to follow the creek in search of the mushroom people.", //3
  "Hours pass and you eventually reach the end of the creek without any sight of the mushroom people.",
  "You decide to rest a bit before continuing your search.",
  "During your rest you realize that you have gotten quite hungry.",
  "Sadly you forgot to take some extra rations along with you before heading out from the tavern",
  "You decide that you will save what you have left of your rations for more important times.",
  "After your short break you decide to start heading back to the fork in the path to see if you will have anymore luck up the hill."
];

var forestCaveNightCounter = -1;
var forestCaveNightText = [
  "Peering into the cave entrance you only see darkness, but you walk forwards anyways.",
  "Soon your eyes adjust to the light levels of that cave and you continue deeper.",
  "The cave walls get smaller and smaller the further you continue.",
  "Eventually you find a hole you big enough to crawl through.",
  "Once you make it to the other side you see a massive cavity with stalagmites and stalactites far off into the darkness.", //4 - change background
  "Taken aback by the view you notice thats its also extremely quiet in the cave.",
  "So quiet that you can hear yourself breathing.",
  "You explore the cave a bit to get used to your surroundings before setting up camp.",
  "As you explore the surroundings you find remnants of what look like used to be a small village.",
  "Supports of buildings made of stone and some wood.",
  //Player:
  "'Could this be where the mushroom people used to live? If so what happened to them and where are they now?'", //10
  "'I should look around some more just in case some one is still here.'",
  //No name:
  "Searching the ruins and the area surrounding the village you find nothing but ruins and darkness.", //12
  "Your fatigue starts to set in from the hunger and of how late into the night it has become.",
  "So you decide to postpone your efforts for the morning and get some rest.",
  "You find a nice location with a nice view outside the village ruins to make camp.", //15 - change background to cave campfire
  "The strangeness of complete silence is odd and makes it a little hard to fall asleep.", //16 - if grob is in party have special dialogue
  "But eventually you are able to fall asleep.",
  "...",
  "...",
  "...",
  //Pilz: (Unkown for now)
  "'Hey um, excuse me.'", //21
  "'Oh I hope you are sleeping and not dead!'",
  //No name
  "You feel something poking your face which causes you to reluctantly return to consciousness.", //23
  "You look up to find a mushroom person looking back at you.", //24 change background to pilz sigh/worried
  //Pilz: (Unkown for now)
  "'Oh thank goodnes you're not dead. I was worried for a second there. Anyways sorry for disrupting your nice nap there, but I request your help.'", //25
  "'This may be a rude introduction, but my people call me Pilz and I would like to know how to get out of these caves.'",
  //Pilz:
  "'My people untrusted me to bring these spores to a safe location so that my people's legacy may continue.'",// 27 change background to pilz normal
  "'Sadly I was also the only one capable of this task since our people have been dying out in these caves for hundresds of years.'",
  "'That is why I need your help to find a way out of these caves, I havent seen you here before so I assume you know the way out!'",
  //No name
  "You understand that Pilz is on a tough journey, but you are also hungry and low on rations.", //30
];

var forestWoodsNightCounter = -1;
var forestWoodsNightText = [
  "You find your way back to the fork and locate a good area for setting up camp.",
  "Setting up the campfire took little effort as there was plenty of kindling around.", //1 - FOrest campfire BG
  "You sit around the campfire cooking what little is left of your rations.",
  "The campfire eventually simmers down and you decide that its makes for a good time to head to bed for the night.", //
  "...",
  "...",
  "...",
  "Morning rises and you break camp to explore the hill way path.", //7 - forest path
  "It takes a surprising amount of effort and time despite the top of the hill not appearing to be too high in elevation.",
  "Each step seems to get harder and harder the further you go.",
  "After a couple of hours of strain you decide to take a rest",
  "After a nice rest viewing the beautiful fauna and flora live its lives, you remember that you need to move on with your adventure.",
  "Continuing your hike back up the hill, you eventually reach the peak.", //12 - change to cave BG DAY
  "While you were taking time to catch your breath and get used to your surroundings, you notice a cave atop the peak.",
  "Just as you were about to head towards the cave to check it out, two massive snails slither out of the cave entrance.",  //14
  "You quickly take cover behind some bushes nearby.",
  "Observering the snails, it looks like theres some weird pink stuff all over the snails' shells.",
  "Looks like they found something to prey on in the cave.",
  "A couple minutes pass and you are able to sneak past the snails into the cave.", //18 - change BG to normal cave entrance DAY
  "Looking further into the cave you only see darkness, but you continue anyways.",
  "Soon your eyes adjust to the light levels and you continue deeper.",
  "The cave walls get smaller and smaller the further you continue.",
  "Eventually you find a hole you big enough to crawl through.",
  "Once you make it to the other side you see a massive cavity with stalagmites and stalactites far off into the darkness.", //23 - change background to cavecave
  "Taken aback by the view you notice thats its also extremely quiet in the cave.",
  "So quiet that you can hear yourself breathing.",
  "Exploring the depths of the cave you stumble upon what looks like to be ruins of a village.",
  "Supports of buildings made of stone and some wood.",
  //Player:
  "'Could this be where the mushroom people used to live? If so what happened to them and where are they now?'", //28
  "'I should look around some more just in case some one is still here.'",
  //No name:
  "Searching the ruins and the area surrounding the village you find nothing but ruins and darkness.", //30
  "Hours of searching the cave you find nothing buy rubble and darkness. Sadly it appears that what was once here has been lost to time.",
  "Not having any luck finding the mushroom people of the Blue Forest, its time to head back to the tavern and look some where else.",
  "So you begin your journey back to the tavern.",
  "After a couple days of travel, you arrive back at the tavern." //34
];

var forestCaveEat1Counter  = -1;
var forestCaveEat1Text = [
  "Your hunger takes control of you, what was viewed as a person is now your next meal.",
  "You slowly creep towards Pilz to eventually grab hold, trying to make conversation as to hide your intent.",
  //Player:
  "'So uh, hows the weather? Its uh... kinda cold. Maybe I could warm you up a bit...'", //2
  //Pilz:
  "'Oh uh, its actually been pretty nice out lately. Although the weather never really changes down here.'", //3 Pilz Happy BG
  "'I could use a little heating up, these caves are usually just damp and moist so it would be a nice change of pace.'",
  //Player:
  "'Yes yes... I was thinking of hugging you heh... But I think getting closer to the campfire would warm you up better now wouldn't it?'", //5
  //Pilz:
  "'Sure! Thats sounds great! I havent seen a campfire in a long time. You see its kind of hard for me to start fires on my own.'", //6
  "'OoooOoOOOoooooOOO~ You know what would be fun?'", //7 - Pilz Normal BG
  "'Roasting marshmallows on the campfire! Oh darn I don't have ingredients for that though... Could you possibly have the ingrediants?'",
  //Player:
  "'Oh uhmm, I do not. But I have another Idea of what we could roast.'", //9
  //Pilz:
  "'Oh my, oh good! I hope its something of your culture, my people used to love learning about other people's culture when we used to go on caravan runs.'", //10  - Pilz
  //Player:
  "'Uhmmm, yeah sure... Uh actually why don't you lean in a little closer to the campfire? I'm already cooking it, you just need to get closer to see thats all. Heh heh.'", //11
  //Pilz:
  "'Wait a minute...'", //12 - Pilz not amused BG
  "'You're not trying to trick me so that you can eat me or something right?'", //13 Pilz cool BG  (More like suspicious)
  //Player:
  "'Pfffft...'", //14
  "'No...'",
  //Pilz:
  "'Oh ok, well then I'm very excited to see what you're cooking up then!'", //16 - Pilz Normal BG
  //No Name
  "Pilz then leans in closer to the campfire. While Pilz is distracted looking into the campfire you give him a good shove into the fire.",
  "Screams echo in the cave...", // 18 - Black BG
  "Lets hope the flesh will satisfy you.",
  "...",
  "...",
  "...",
  "After you are fully satiated you then leave the caves having failed to get information from the mushroom person who was carrying his dying race's legacy. You head back to the Tavern.",
  "After a couple days of travel, you arrive back at the tavern." //24 -  tavern BG
];

var forestCaveEscapeCounter = -1;
var forestCaveEscapeText = [
  //Pilz:
  "'Oh thank you so much! My people will be able to live on their legacy and maybe reclaim their throne as wandering traders!'", //0 - Pilz Happy BG
  "'You've saved my kin!'", //1 Pilz Content BG
  //Player:
  "'Damn, I didn't know the entire future of your people rested on this decision, but I'd be glad to help out'", //2
  "'Right, so I'll lead the way out of the cave. I hope I still remember the way...'",
  //No name
  "Breaking camp you and your new found gang start on the journey out of the cave.", //4 - CaveCave
  "After an hour of reorienting yourself, you remember the route back out.",
  "Walking through the ruins of the mushroom village fills you with some sadness realizing that all thats left is Pilz.",
  "But you are filled with hope and determination to help Pilz continue his legacy.",
  "As you were walking just outside of the ruined village you spot something in the distance moving toward you.",
  "Upon a closer look it looks like two hungry looking killer snails heading directly for you!", //9 - CaveCave Snails BG
  "You quickly take cover behind a nearby stalagmite.",
  "What should you do?" //11
];

var forestCaveEat2Counter = -1;
var forestCaveEat2Text = [
  "Observing the snails from behind cover, it looks like the snails are spore hungry and would likely go away if Pilz was also gone.",
  "Your hunger and survival instincts fill your mind...",
  "With the killer snails slowly surrounding you and your party, you decide you have no choice but to consume Pilz to get the snails to go away.",
  "You quickly dive out of cover and grab Pilz.",
  "You quickly run away with Pilz still in your hands.",
  "Once you get to a safe spot...",
  "*Crunch*", //6 - black BG
  "Screams echo the cave...",
  "Lets hope the flesh will satisfy you.",
  "...",
  "...",
  "...",
  "After you complete your meal, you look around to find that the snails have turned around to look else where...",
  "Having failed to get information from the mushroom person who was carrying his dying race's legacy. You head back to the Tavern.",
  "After a couple days of travel, you arrive back at the tavern." //14 - tavern BG
];

var forestCaveAbandonCounter = -1;
var forestCaveAbandonText = [
  "Observing the snails from behind cover, it looks like the snails are spore hungry and would likely go away if Pilz was also gone.",
  "Your survival instincts fill your mind...",
  "With the killer snails slowly surrounding you and your party, you decide you have no choice but to sacrafice Pilz to get the snails to go away.",
  "You quickly dive out of cover and grab Pilz.",
  "Kicking Pilz into the the two killer snails, you quickly run away back to cover...",
  "*Crunch* *Crunch* *Crunch*", //5 - black BG
  "Screams echo the cave...",
  "...",
  "...",
  "...",
  "After the screaming stops, you look around to find that the snails have turned around to look else where...",
  "Having failed to get information from the mushroom person who was carrying his dying race's legacy. You head back to the Tavern.",
  "After a couple days of travel, you arrive back at the tavern." //12 - tavern BG
];

var forestCaveDistract1Counter = -1;
var forestCaveDistract1Text = [
  "Observing the snails from behind cover, it looks like the snails are spore hungry.",
  "Maybe you could create a distraction and have Pilz sneak around them.",
  "Having no one else in your party to distract the snails you volunteer yourself.",
  "You dive out of cover and yell at the snails.",
  //Player:
  "'Hey, you guys look like some tasty escargot! Which is gross... But I am also very hungry.'", //4
  "'I know you guys are hungry as well, but you're gonna have to put in some more effort if you want this meal.'",
  //No names
  "You succesfully distract the snails as Pilz is able to sneak around to the side.", //6
  "Once Pilz gets to a safe place he violently shakes his head to signal that he is safe.",
  "Knowing this you try to run around the snails.",
  "Tripping on some rocks you fall to the ground.",
  "You struggle to get back up on your feet.",
  "Just as you got a good balance you feel something wet and slimey on your foot.",
  "Before looking back at what the feeling is, you can no longer feel your foot.",
  "You violently fall back to the ground.",
  "Slowly the feelings of your body parts dissapear until you can only feel your head...", //14 - black BG
  "...",
  "[GAME OVER]" //16 - game over BG
];

var forestCaveDistract2Counter = -1;
var forestCaveDistract2Text = [
  "Observing the snails from behind cover, it looks like the snails are spore hungry.",
  "Maybe you could create a distraction and have Pilz sneak around them.",
  "", //2 CHarcter specific dialogue
  "", //3 CHarcter specific dialogue
  "The snails were successfuly distracted as Pilz is able to sneak around to the side unnoticed.",
  "Once Pilz gets to a safe place he violently shakes his head to signal that he is safe.",
  "You and your gang eventually meet back up safely away from the snails.",
  "You continue your journey out of the cave.",
  "Eventually you are able to see light at the end of the cave.",
  "You exit the cave to a blinding light.", // 9 - Outside1
  "After half a minute  your eyes finally adjust to the light levels outdoors.", // 10 - Cave Entrance BG
  //Pilz:
  "'Wow that was close! Those snails were very eager to get their hands on some spores, but thankfully you were here to save me and my kind!'", //11 - Cave Entrance day w/ Pilz Normal
  "'I am  forever in your debt.'", //12 - Cave Entrance day w/ Pilz content
  //Player:
  "'Now that we got you back to safety, what are your plans from here on out?'", // 13 - Cave Entrance day w/ Pilz Normal
  //Pilz:
  "'Well I'm not sure, but what I do know is that I need to find a safe place to release the spores so that my people can start again.'", //14
  "'Actually my village elders once told me of a door that lead to the friendliest land they've seen. Almost out of this world.'",
  //Player:
  "'Huh, funnily enough we are also in search of the door. We came here in search of your kind to learn more about the door.'", //16
  "'What else do you know about this door?'",
  //Pilz:
  "'Well the stories were more like fairy tales of long ago, but if you have heard rumors of it too then it has to be real!'", //18 - Cave Entrance day w/ Pilz Happy
  "'Why are you in search of the door may I ask?'", //19 - Cave Entrance day w/ Pilz Normal
  //Player:
  "'Well you see I am in dire need of some friends, so I thought that the door would bring me to the best place to look for them.'", //20
  //Pilz:
  "'I see, it seems like our paths align, would you be alright if I join you on your search for the door?'", //21
  //No names
  "You would love for Pilz to join your party, but how insanely hungry you are suddenly hits.", //22
  "What should I do?", //23
];

var forestCaveEat3Counter = -1;
var forestCaveEat3Text = [
  "Although you fully intended in helping out Pilz, your hunger was all that you could think about.",
  "In front of the rest of your party, you grab a hold of Pilz.",
  "*Crunch*", //2 - black BG
  "Screams cause the nearby fauna to flee.",
  "Lets hope the flesh will satisfy you.",
  "...",
  "...",
  "...",
  "After you complete your meal you come back to your senses. Or whats left of them.",
  "Forgetting this moment is all you can think of.",
  "Eventually you decide to head back to the tavern.",
  "Will you ever really forget what you did?",
  "After a couple days of travel, you arrive back at the tavern." //12 - tavern BG
];

var forestCaveFriendshipCounter = -1;
var forestCaveFriendshipText = [
  //Player:
  "'Sure, I'd love for you to join us on our journey.'", //0
  //NoName
  "You reach out your arms towards Pilz. As your doing so, it almost appears as if Pilz shrinks in size.", //1
  "Grabbing him in your arms you realize that Pilz is a lot smaller than you thought.",
  "You then stuff him into your bag for safe keeping.",
  "[Friend Aquired!]", //4  - CaveEntranceDayBG
  "With your new found friend you head back home to the tavern to learn more about the door of friendship.",
  "After a couple days of travel, you arrive back at the tavern." //6 - tavern BG
];


//************Pilz route ends here******************************************************************************************************************************************************************************************


//************Octo route starts here******************************************************************************************************************************************************************************************
var octoRoute = 0;
var seaIntroCounter = -1;
var seaIntroText = [
  //no name
  "'Deciding a boat ride sounds like fun, you walk up to the grizzled, scarred old man in the corner. '",
  //Capn' Rufus
  "'Gooday, laddy, what can I do for ye!'",
  //player name
  "'I heard that you needed help dealing with a gang of pirates, and I figured I was the guy for the job.'",
  //capn' Rufus
  "'Ye heard right, and if ye thinks that ye has what it takes to bring down that blood thirsty group, then follow along!'",
  //no name
  "'You walk down to the docks with captain Rufus, until he stops in front of an old and worndown ship.'",
  //Capn' Rufus
  "'This be my pride and joy, the merryfellow! I named it after my cousin, Jacob, who was always complainin about something.'",
  //no name
  "'You get on the merryfellow, and go below deck to get some rest. As it turns out, you aren't much help when it comes to running a ship.'",
  //no name
  "'After a couple of hours of restless rocking, you notice a long and slender shadow block sonme of the moonlight coming in the window. Suddenly, it knocks at your window.'"
];

var belowDeckCounter = -1;
var belowDeckText = [
  //no name
  "'You rollback over, assuming that the sea is playing tricks on you. As you're about to fall back asleep, you hear yelling from the captain above.'",
  //Capn' Rufus
  "'All hands on deck! we got a kraken trying to pull us under!'",
  //no name
  "'You run up the stairs to the main landing, and see tenticles reaching over the railing, grabbing sailors left and right.'",
  //capn' Rufus
  "'We gotta get this creature off of our boat if we want any chance at survival boys!'",
  //no name
  "'looking over the railing of your ship, you see the beaked mouth of the kraken, and its beady eyes looking up at you. Suddenly, the kraken shoots towards you.'"
  //choice, stay calm, try to talk to it (get octo) or fire cannon at it
];

var stayCalmCounter = -1;
var stayCalmText = [
  //no name
  "'Never one to be frightened by a 10 ton mythical sea monster, you wait until the sea monster is essentially on top of you.'",
  //kraken
  "'Hello young adventurer, I have a somewhat odd request to you.'",
  "'I have a young child, who has just been released on summer break. I was wondering if you would be willing to take him along for a bit to use up his energy.'",
  //no name
  "'Perplexed, you ponder your options.'"
  //either take octo or don't

];

var takeOcto1Counter = -1;
var takeOcto1Text = [
  //player
  "'Sure! I have actually been looking for people to join my party!'",
  //kraken
  "'Incredible! Kraken Junior! Get up here right now!'",
  // no name
  "'A young kraken in a school boy's outfit plops down on deck'",
  //Kraken Junior
  "'Hello sir! It's a pleasure to join you in your quest for world domination!'",
  //no name
  "'He is slightly confused, but he has the right spirit.'"
];

var leaveOcto1Counter = -1;
var leaveOcto1Text = [
  //player name
  "'I am sorry ma'am, but I don't feel comfortable babysitting your son like that. I'm barely an adult myself!'",
  //kraken
  "'No worries than young man, I understnad. Sorry to bother you folks, this kid is just driving me up the wall. Have a nice evening!'",
  // no name
  "And with that, the kraken sinks back into the sea."
  //these two should go on to the pirate ones either way
];

var fireCannonCounter = -1;
var fireCannonText = [
  //no name
  "'Panicking, you look to your left and see a cannon conveniently loaded and looking downwards. '",
  //player name
  "'Lightning symbol! Skull and crossbones! Bomb! Hashtag!'",
  //no name
  "'you scream comic book cussword after comic book cussword as you rain a single cannon ball down on the monster'",
  //no name
  "'Once hit, the kraken starts wrapping up your boat at an incredible speed'",
  //kraken
  "'I was just trying to ask you a question! and you shot me! who shoots someone for asking a question!'",
  "'I have to make an example of you for my son so he can learn that people without manners must be reprimanded!'",
  //no name
  "'CRUNCH'",
  "'The kraken crushes your ship into pieces. As you sink under teh ocean waves, you learn to never assume a kraken is a bad person and shoot it with a cannon.'"

]; //end game

var aboveDeckCounter = -1;
var aboveDeckText = [
  //no name
  "'Curious at the sound, you open your port window. '",
  //Kraken
  "'Hello young man, you all look like the adventuring type. My son is out of school for the month and is being an absolute terror ion the house.'",
  "'I was wondering if you and your crew would be willing to take him along with you? I know it's an odd ask but I want him to get some real life experience.'",
  //no name
  "'Perplexed, you concider your options.'"
  //two choices, either bring him with or not.
];

var bringOctoCounter = -1;
var bringOctoText = [
  //player name
  "'I am actually looking to add people to my party to go on adventures! I would love to let him join! '",
  //Kraken
  "'Incredible! Kraken Junior!!!!!'",
  //no name
  "' the kraken calls. Next thing you know, a small kraken in a school boy outfit plops through the window onto your floor.'",
  //Kraken Junior
  "'Hello mister! Thanks for taking me with you! My teacher said I can read at a college level and do basic algebra, so I should be helpful on your quest for world domination!'",
  //no name
  "'He's clearly a bit confused, but he has the right spirit.'"
];

var leaveOctoCounter = -1;
var leaveOctoText = [
  //player name
  "'Sorry, but I have a major fear of ocean animals. If you would kindly get off the boat, I would really appreciate it. '",
  //Kraken
  "'Oh of course! I am so sorry about that! Have a nice evening.'",

  //no name
  "'The kraken slips back into the water, content with a good conversation. You go back to bed, shuddering at the memory of her rubbery limbs.'"
];

var pirateStartCounter = -1;
var pirateStartText = [
  // no name
  "'After surviving the kraken attack, you doze off, exhausted. You are awoken the next morning by the captian.'",
  //capn' Rufus
  "'Mornin, Laddie!'",
  "'We have a siting of the pirate base, and we want to know how we should proceed with our approach!'",
  "'We could either sail at them, cannons blazing, or we could wait a day, and you could sneek in under cover of night.'",
  "''" //make avaliable party members way in on the situation
  //then make a choice. direct attack, or sneak
];

var directAttackCounter = -1
var directAttackText = [
  //no name
  "'You decide that a head on cannon barage would be best to take down these hooligans.'",
  //Capn' Rufus
  "'Fire the cannons!!'",
  //no name
  "'your ship lights up with the sound of cannon fodder as you send wave after wave of cannon balls into the pirates base.'",
  "'After what felt like an hour, (because it was) you have run out of cannon balls. There is silence in the pirate base.'",
  "'as cheers ripple through your crew, you are struck by a cannon ball from your side.'",
  "'Looking up, you see that you are surrounded by [irate ships. They tricked you.'",
  //Capn' Rufus
  "'Well Laddie, it has been a pleasure! '",
  //no name
  "'captain Rufus pulls out some floaties, jumps in the water, and floats away, escaping ship.'",
  "'As you sink under the waves, you have a realisation that could change the world'",
  //player name
  "'blub blub blub'",
  //no name
  "'Sadly, you don't know how to speak under water, and your message goes unheard.'"
];

var sneakInCounter = -1;
var sneakInText = [
  //no name
  "'You decide to wait until night time, believing your chances at success to be much higher with a stealthy approach.'",
  "'Once the sun had set, you head out from the boat, swimming up to the perimeter of the pirate encampment.'",
  "'You get to the edge of the camp, and you can hear the hoot and hollers of a pirate party.'",
  "'As you sneak deeper into the camp, you notice several barrels of pirate alcohol, with a 'Happy birthday George!' sign above it. '",
  //plaer name
  "'I bet if I lit those barrels on fire, this whole party would go sky high! and what luck! one of the pirates left a torch out for us!'",
  //no name
  "'Using the discarded torch, you set fire to one of the barrels, and proceed to run as fast as you can back to the water.'",
  //no name
  "'By the time you reach the ship once again, you hear loud explosions from the shore.'",
  //capn' Rufus
  "'Look at that! The pirates even have fireworks! They sure know how to party.'",
  //player name
  "'That they do. Now lets get out of here before they sober up and aren't in the partying mood.'",
  //no name
  "'Having blown up a pirates birthday party, you head back to town.'"

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

    characterNameDisplay.textContent = playerName;
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
      leftChoiceBox1.textContent = "Go along with Grob to the tavern";
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
      leftChoiceBox1.textContent = "Head out to the northern sea with the sailor";
      rightChoiceBox1.textContent = "Search the ruins of the mountains to the east";
      leftChoiceBox2.textContent = "Head to the Blue Forest in the south.";
      rightChoiceBox2.textContent = "Head towards the friendship door in the ruins up north."
      if(octoRoute == 0) {
        removeHidden(leftChoiceBox1);
      }
      if(wickRoute == 0) {
        removeHidden(rightChoiceBox1);
      }
      if(pilzRoute == 0) {
        removeHidden(leftChoiceBox2);
      }

      removeHidden(rightChoiceBox2);
      //tavernHubAgain = 0;
    }
  }

//************Intro functions ends here******************************************************************************************************************************************************************************************


//************Door functions start here******************************************************************************************************************************************************************************************

function doorIntroSequence() {
  if (doorIntroCounter <= 7) {
    if(doorIntroCounter == 2) {
      changeDisplay("./Pictures/Backgrounds/DoorRuinsOutdoors.png");
    }
    if(doorIntroCounter == 5) {
      characterNameDisplay.textContent = playerName;
    }
    if(doorIntroCounter == 6) {
      characterNameDisplay.textContent = '';
    }
    if(doorIntroCounter == 7) {
      characterNameDisplay.textContent = playerName;
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorIntroText[doorIntroCounter])
      .start();
      textBoxClicked = 1;
      doorIntroCounter++;
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
    leftChoiceBox1.textContent = "Be a Chad and continue! (Cannot Return)";
    rightChoiceBox1.textContent = "Be friendless and flee (Return to Tavern)";
    removeHidden(leftChoiceBox1);
    removeHidden(rightChoiceBox1);
    characterNameDisplay.textContent = " ";
  }
}

function doorReturnSequence() {
  if (doorReturnCounter <= 1) {
    if(doorReturnCounter == 2) {
      changeDisplay("./Pictures/Backgrounds/Tavern.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorReturnText[doorReturnCounter])
      .start();
      textBoxClicked = 1;
      doorReturnCounter++;
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
    tavernHubCounter = 0;
    tavernHubAgain = 1;
    doorReturnCounter = -2;
    characterNameDisplay.textContent = " ";
  }
}

function doorInsideSequence() {
  if (doorInsideCounter <= 7) {
    if(doorInsideCounter == 2) {
      changeDisplay("./Pictures/Backgrounds/DoorRuinsInside.png");
    }
    if(doorInsideCounter == 5) {
      changeDisplay("./Pictures/Backgrounds/RuinsDoorBlocked.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorInsideText[doorInsideCounter])
      .start();
      textBoxClicked = 1;
      doorInsideCounter++;
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
    leftChoiceBox1.textContent = "Consume Giant lolipop";
    rightChoiceBox1.textContent = "Let grob eat the lollipop tree";
    removeHidden(leftChoiceBox1);
    if(grobItem == 1) {
      removeHidden(rightChoiceBox1);
    }
    characterNameDisplay.textContent = " ";
  }
}

function doorGrobFailSequence() {
  if (doorGrobFailCounter <= 6) {
    if(doorGrobFailCounter == 4) {
      changeDisplay("./Pictures/Backgrounds/Black.png");
    }
    if(doorGrobFailCounter == 6) {
      changeDisplay("./Pictures/Backgrounds/GameOver.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorGrobFailText[doorGrobFailCounter])
      .start();
      textBoxClicked = 1;
      doorGrobFailCounter++;
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
    characterNameDisplay.textContent = " ";
  }
}

function doorGrobWinSequence() {
  if (doorGrobWinCounter <= 16) {
    if(doorGrobWinCounter == 1) {
      characterNameDisplay.textContent = "Grob";
    }
    if(doorGrobWinCounter == 3) {
      characterNameDisplay.textContent = "";
    }
    if(doorGrobWinCounter == 5) {
      characterNameDisplay.textContent = "Grob";
    }
    if(doorGrobWinCounter == 6) {
      characterNameDisplay.textContent = "";
    }
    if(doorGrobWinCounter == 8) {
      changeDisplay("./Pictures/Backgrounds/RuinsDoorEated.png");
    }
    if(doorGrobWinCounter == 9) {
      characterNameDisplay.textContent = "Grob";
    }
    if(doorGrobWinCounter == 11) {
      characterNameDisplay.textContent = "";
    }
    if(doorGrobWinCounter == 15) {
      changeDisplay("./Pictures/Backgrounds/DoorArchers.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorGrobWinText[doorGrobWinCounter])
      .start();
      textBoxClicked = 1;
      doorGrobWinCounter++;
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
    characterNameDisplay.textContent = " ";

    leftChoiceBox1.textContent = "Make a run for it!";
    rightChoiceBox1.textContent = "Send someone as a distraction";
    leftChoiceBox2.textContent = "Have Kraken Junior create a blindspot...";

    removeHidden(leftChoiceBox1);
    if(grobItem == 1 || wickItem == 1 || pilzItem == 1) {
      removeHidden(rightChoiceBox1);
    }
    if(squidItem == 1 ) {
      removeHidden(leftChoiceBox2);
    }
  }
}

function doorArchersDieSequence() {
  if (doorArchersDieCounter <= 6) {
    if(doorArchersDieCounter == 4) {
      changeDisplay("./Pictures/Backgrounds/Black.png");
    }
    if(doorArchersDieCounter == 6) {
      changeDisplay("./Pictures/Backgrounds/GameOver.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorArchersDieText[doorArchersDieCounter])
      .start();
      textBoxClicked = 1;
      doorArchersDieCounter++;
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
    characterNameDisplay.textContent = "";
  }
}

function doorArchersDistractSequence() {
  if (doorArchersDistractCounter <= 6) {

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorArchersDistractText[doorArchersDistractCounter])
      .start();
      textBoxClicked = 1;
      doorArchersDistractCounter++;

      if(doorArchersDistractCounter == 3) {
        //Display Unique text based on charcaters available.
        if(grobItem == 1) { //grob
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("Grob runs out shouting about how he loves candy and wants it directly in his mouth!")
          .start();

        } else if (wickItem == 1) { //wick
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("Wick walks out and asks if we could diplomatically come to a settlement of our disputes.")
          .start();

        } else if (pilzItem == 1) { //pilz
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("Pilz waddles out saying that he spotted some hungry snails nearby and that the archers should keep an eye out!")
          .start();
        }
      }
      if(doorArchersDistractCounter == 6) {
        //remove character item from inventory
        if(grobItem == 1) { //grob
          grobItemContainer.src = '';
          grobItem = 0;

        } else if (wickItem == 1) { //wick
          wickItemContainer.src = '';
          wickItem = 0;

        } else if (pilzItem == 1) { //pilz
          pilzItemContainer.src = '';
          pilzItem = 0;
        }
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
    characterNameDisplay.textContent = "";
    doorBridgeTrollCounter = 0;
    doorArchersDistractCounter = -2;
  }
}

function doorArchersOctoSequence() {
  if (doorArchersOctoCounter <= 6) {
    if(doorArchersOctoCounter == 2) {
      characterNameDisplay.textContent = "Kraken Junior";
    }
    if(doorArchersOctoCounter == 3) {
      characterNameDisplay.textContent = "";
      changeDisplay("./Pictures/Backgrounds/DoorArchersSmoke.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorArchersOctoText[doorArchersOctoCounter])
      .start();
      textBoxClicked = 1;
      doorArchersOctoCounter++;
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
    characterNameDisplay.textContent = "";
    doorBridgeTrollCounter = 0;
    doorArchersOctoCounter = -2;
  }
}

function doorBridgeTrollSequence() {
  if (doorBridgeTrollCounter <= 18) {
    if(doorBridgeTrollCounter == 0) {
      changeDisplay("./Pictures/Backgrounds/DoorBridge.png");
    }
    if(doorBridgeTrollCounter == 3) {
      characterNameDisplay.textContent = "";
      changeDisplay("./Pictures/Backgrounds/DoorBridgeCreep.png");
    }
    if(doorBridgeTrollCounter == 4) {
      changeDisplay("./Pictures/Backgrounds/DoorBridgeClown.png");
    }
    if(doorBridgeTrollCounter == 6) {
      characterNameDisplay.textContent = playerName;
    }
    if(doorBridgeTrollCounter == 7) {
      characterNameDisplay.textContent = "Sprinkles the Clown";
    }
    if(doorBridgeTrollCounter == 13) {
      characterNameDisplay.textContent = playerName;
    }
    if(doorBridgeTrollCounter == 14) {
      characterNameDisplay.textContent = "Sprinkles the Clown";
      changeDisplay("./Pictures/Backgrounds/DoorBridgeClownMenacing.png");
    }
    if(doorBridgeTrollCounter == 15) {
      characterNameDisplay.textContent = "Sprinkles the Clown";
      changeDisplay("./Pictures/Backgrounds/DoorBridgeClown.png");
    }
    if(doorBridgeTrollCounter == 18) {
      characterNameDisplay.textContent = playerName;
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorBridgeTrollText[doorBridgeTrollCounter])
      .start();
      textBoxClicked = 1;
      doorBridgeTrollCounter++;
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
    characterNameDisplay.textContent = "";

    leftChoiceBox1.textContent = "Try to answer the riddle yourself";
    rightChoiceBox1.textContent = "Send someone as a distraction";
    leftChoiceBox2.textContent = "Have Wick attempt to answer the riddle...";

    removeHidden(leftChoiceBox1);
    if(grobItem == 1 || squidItem == 1  || pilzItem == 1) {
      removeHidden(rightChoiceBox1);
    }
    if(wickItem == 1) {
      removeHidden(leftChoiceBox2);
    }
  }
}

function doorBridgeDieSequence() {
  if (doorBridgeDieCounter <= 13) {
    if(doorBridgeDieCounter == 0) {
      characterNameDisplay.textContent = playerName;
    }
    if(doorBridgeDieCounter == 1) {
      characterNameDisplay.textContent = "Sprinkles the Clown";
    }
    if(doorBridgeDieCounter == 2) {
      characterNameDisplay.textContent = "";
    }
    if(doorBridgeDieCounter == 3) {
      characterNameDisplay.textContent = playerName;
    }
    if(doorBridgeDieCounter == 4) {
      characterNameDisplay.textContent = 'Sprinkles the Clown';
    }
    if(doorBridgeDieCounter == 5) {
      characterNameDisplay.textContent = "";
      changeDisplay("./Pictures/Backgrounds/DoorBridgeClownMenacing.png");
    }
    if(doorBridgeDieCounter == 8) {
      changeDisplay("./Pictures/Backgrounds/Black.png");
    }
    if(doorBridgeDieCounter == 13) {
      changeDisplay("./Pictures/Backgrounds/GameOver.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorBridgeDieText[doorBridgeDieCounter])
      .start();
      textBoxClicked = 1;
      doorBridgeDieCounter++;
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
    characterNameDisplay.textContent = "";
  }
}

function doorBridgeSacrificeSequence() {
  if (doorBridgeSacrificeCounter <= 5) {
    if (doorBridgeSacrificeCounter == 2) {
      characterNameDisplay.textContent = "Sprinkles the Clown";
    }
    if (doorBridgeSacrificeCounter == 3) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorBridgeSacrificeText[doorBridgeSacrificeCounter])
      .start();
      textBoxClicked = 1;
      doorBridgeSacrificeCounter++;

      if(doorBridgeSacrificeCounter == 2) {
        //Display Unique text based on charcaters available.
        if(grobItem == 1) { //grob
          characterNameDisplay.textContent = "Grob";
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("Grob answers the clown, 'How about a lollipop? I ate one of those not too long ago!'")
          .start();

        } else if (squidItem == 1) { //octo
          characterNameDisplay.textContent = "Kraken Junior";
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("Kraken Junior steps up and answers the clown, 'Uhhhh, wanna take over the world with me?'")
          .start();

        } else if (pilzItem == 1) { //pilz
          characterNameDisplay.textContent = "Pilz";
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("Pilz waddles out saying, 'Do you find this place to be a friendlt neighbor hood? Could I spread my spores safely here?'")
          .start();
        }
      }
      if(doorBridgeSacrificeCounter == 6) {
        //remove character item from inventory
        if(grobItem == 1) { //grob
          grobItemContainer.src = '';
          grobItem = 0;

        } else if (squidItem == 1) { //octo
          octoItemContainer.src = '';
          squidItem = 0;

        } else if (pilzItem == 1) { //pilz
          pilzItemContainer.src = '';
          pilzItem = 0;
        }
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
    characterNameDisplay.textContent = "";
    doorCakeCanyonCounter = 0;
    doorBridgeSacrificeCounter = -2;
  }
}

function doorBridgeWickSequence() {
  if (doorBridgeWickCounter <= 7) {
    if(doorBridgeWickCounter == 1) {
      characterNameDisplay.textContent = "Wick";
    }
    if(doorBridgeWickCounter == 2) {
      characterNameDisplay.textContent = "Sprinkles the Clown";
    }
    if(doorBridgeWickCounter == 5) {
      characterNameDisplay.textContent = "";
    }
    if(doorBridgeWickCounter == 6) {
      characterNameDisplay.textContent = "Sprinkles the Clown";
      changeDisplay("./Pictures/Backgrounds/DoorBridgeCreep.png");
    }
    if(doorBridgeWickCounter == 7) {
      characterNameDisplay.textContent = "";
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorBridgeWickText[doorBridgeWickCounter])
      .start();
      textBoxClicked = 1;
      doorBridgeWickCounter++;
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
    characterNameDisplay.textContent = "";
    doorCakeCanyonCounter = 0;
    doorBridgeWickCounter = -2;
  }
}

function doorCakeCanyonSequence() {
  if (doorCakeCanyonCounter <= 5) {
    if(doorCakeCanyonCounter == 1) {
      changeDisplay("./Pictures/Backgrounds/CakeCanyonUp.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorCakeCanyonText[doorCakeCanyonCounter])
      .start();
      textBoxClicked = 1;
      doorCakeCanyonCounter++;
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
    characterNameDisplay.textContent = "";

    leftChoiceBox1.textContent = "How deep can this canyon be?";
    rightChoiceBox1.textContent = "Use someone for help.";
    leftChoiceBox2.textContent = "Have Pilz help to get over...";
    rightChoiceBox2.textContent = "Consume Pilz";

    removeHidden(leftChoiceBox1);
    if(grobItem == 1 || squidItem == 1  || wickItem == 1) {
      removeHidden(rightChoiceBox1);
    }
    if(pilzItem == 1) {
      removeHidden(leftChoiceBox2);
    }
    removeHidden(rightChoiceBox2);
  }
}


function doorCakeCanyonDieSequence() {
  if (doorCakeCanyonDieCounter <= 11) {
    if (doorCakeCanyonDieCounter == 10) {
      changeDisplay("./Pictures/Backgrounds/Black.png");
    }
    if (doorCakeCanyonDieCounter == 11) {
        changeDisplay("./Pictures/Backgrounds/GameOver.png");
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorCakeCanyonDieText[doorCakeCanyonDieCounter])
      .start();
      textBoxClicked = 1;
      doorCakeCanyonDieCounter++;
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
    characterNameDisplay.textContent = "";
  }
}

function doorCakeCanyonSacrificeSequence() {
  if (doorCakeCanyonSacrificeCounter <= 7) {
    if (doorCakeCanyonSacrificeCounter == 3) {
      characterNameDisplay.textContent = "";
    }
    if (doorCakeCanyonSacrificeCounter == 5) {
      changeDisplay("./Pictures/Backgrounds/CakeCanyonDown.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorCakeCanyonSacrificeText[doorCakeCanyonSacrificeCounter])
      .start();
      textBoxClicked = 1;
      doorCakeCanyonSacrificeCounter++;

      if(doorCakeCanyonSacrificeCounter == 3) {
        //Display Unique text based on charcaters available.
        if(grobItem == 1) { //grob
          characterNameDisplay.textContent = "Grob";
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("'Sir yes sir! For king and country!")
          .start();

        } else if (squidItem == 1) { //octo
          characterNameDisplay.textContent = "Kraken Junior";
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("'One step closer to taking over the world!'")
          .start();

        } else if (wickItem == 1) { //pilz
          characterNameDisplay.textContent = "Wick";
          typewriter
          .changeDelay(customTextSpeed)
          .typeString("'I wonder whats out there...'")
          .start();
        }
      }
      if(doorCakeCanyonSacrificeCounter == 8) {
        //remove character item from inventory
        if(grobItem == 1) { //grob
          grobItemContainer.src = '';
          grobItem = 0;

        } else if (squidItem == 1) { //octo
          octoItemContainer.src = '';
          squidItem = 0;

        } else if (wickItem == 1) { //pilz
          wickItemContainer.src = '';
          wickItem = 0;
        }
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
    characterNameDisplay.textContent = "";
    doorJudgement = 1;
    doorCakeCanyonSacrificeCounter = -2;
  }
}

function doorCakeCanyonPilzSequence() {
  if (doorCakeCanyonPilzCounter <= 11) {
    if (doorCakeCanyonPilzCounter == 2) {
      characterNameDisplay.textContent = "Pilz";
    }
    if (doorCakeCanyonPilzCounter == 3) {
        characterNameDisplay.textContent = playerName;
    }
    if (doorCakeCanyonPilzCounter == 4) {
        characterNameDisplay.textContent = "Pilz";
    }
    if (doorCakeCanyonPilzCounter == 6) {
        characterNameDisplay.textContent = playerName;
    }
    if (doorCakeCanyonPilzCounter == 7) {
        characterNameDisplay.textContent = '';
    }
    if (doorCakeCanyonPilzCounter == 11) {
        changeDisplay("./Pictures/Backgrounds/CakeCanyonDown.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorCakeCanyonPilzText[doorCakeCanyonPilzCounter])
      .start();
      textBoxClicked = 1;
      doorCakeCanyonPilzCounter++;
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
    characterNameDisplay.textContent = "";
    doorJudgement = 1;
    doorCakeCanyonPilzCounter = -2;
  }
}

function doorCakeCanyonEatPilzSequence() {
  if (doorCakeCanyonEatPilzCounter <= 18) {
    if (doorCakeCanyonEatPilzCounter == 3) {
      characterNameDisplay.textContent = "Pilz";
      changeDisplay("./Pictures/Backgrounds/CakeCanyonPilz.png");
    }
    if (doorCakeCanyonEatPilzCounter == 4) {
        characterNameDisplay.textContent = playerName;
    }
    if (doorCakeCanyonEatPilzCounter == 5) {
        characterNameDisplay.textContent = "Pilz";
    }
    if (doorCakeCanyonEatPilzCounter == 6) {
        characterNameDisplay.textContent = playerName;
    }
    if (doorCakeCanyonEatPilzCounter == 7) {
        characterNameDisplay.textContent = 'Pilz';
    }
    if (doorCakeCanyonEatPilzCounter == 8) {
        characterNameDisplay.textContent = '';
    }
    if (doorCakeCanyonEatPilzCounter == 10) {
        changeDisplay("./Pictures/Backgrounds/Black.png");
    }
    if (doorCakeCanyonEatPilzCounter == 12) {
        changeDisplay("./Pictures/Backgrounds/CakeCanyonUp.png");
        pilzItem = 0;
        pilzItemContainer.src = '';
    }
    if (doorCakeCanyonEatPilzCounter == 18) {
        changeDisplay("./Pictures/Backgrounds/CakeCanyonDown.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorCakeCanyonEatPilzText[doorCakeCanyonEatPilzCounter])
      .start();
      textBoxClicked = 1;
      doorCakeCanyonEatPilzCounter++;
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
    characterNameDisplay.textContent = "";
    doorJudgement = 1;
    doorCakeCanyonEatPilzCounter = -2;
  }
}

function doorJudgementPicker() {
  let friendShip = grobItem + squidItem + wickItem + pilzItem;
  if(friendShip == 0) {
    //Your a bad person
    doorBadEndingCounter = 0;
    doorJudgement = -2;
  } else if (friendShip == 4) {
    //Oh my grob I love you. Also get a life. Make some real friends.
    doorGoodEndingCounter = 0;
    doorJudgement = -2;
  } else {
    //Your mediocre person
    doorNeutralEndingCounter = 0;
    doorJudgement = -2;
  }
}

function doorGoodEndingSequence() {
  if (doorGoodEndingCounter <= 21) {
    if (doorGoodEndingCounter == 5) {
      changeDisplay("./Pictures/Backgrounds/EmptyDoor.png");
    }
    if (doorGoodEndingCounter == 6) {
        characterNameDisplay.textContent = playerName;
    }
    if (doorGoodEndingCounter == 7) {
        characterNameDisplay.textContent = "";
    }
    if (doorGoodEndingCounter == 12) {
        changeDisplay("./Pictures/Backgrounds/FullDoor.png");
    }
    if (doorGoodEndingCounter == 15) {
        changeDisplay("./Pictures/Backgrounds/Outside1.png");
    }
    if (doorGoodEndingCounter == 16) {
        characterNameDisplay.textContent = "Grob";
    }
    if (doorGoodEndingCounter == 17) {
        characterNameDisplay.textContent = "Kraken Junior";
    }
    if (doorGoodEndingCounter == 18) {
        characterNameDisplay.textContent = "Wick";
    }
    if (doorGoodEndingCounter == 19) {
        characterNameDisplay.textContent = "Pilz";
    }
    if (doorGoodEndingCounter == 20) {
        characterNameDisplay.textContent = "Your Pals";
        changeDisplay("./Pictures/Backgrounds/GoodEnding.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorGoodEndingText[doorGoodEndingCounter])
      .start();
      textBoxClicked = 1;
      doorGoodEndingCounter++;
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
    characterNameDisplay.textContent = "";
  }
}

function doorBadEndingSequence() {
  if (doorBadEndingCounter <= 31) {
    if (doorBadEndingCounter == 5) {
      changeDisplay("./Pictures/Backgrounds/EmptyDoor.png");
    }
    if (doorBadEndingCounter == 6) {
      characterNameDisplay.textContent = playerName;
    }
    if (doorBadEndingCounter == 7) {
      characterNameDisplay.textContent = '';
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorBadEndingText[doorBadEndingCounter])
      .start();
      textBoxClicked = 1;
      doorBadEndingCounter++;
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
    characterNameDisplay.textContent = "Hope Your Satisfied...";
  }
}

function doorNeutralEndingSequence() {
  if (doorNeutralEndingCounter <= 21) {
    if (doorNeutralEndingCounter == 5) {
      changeDisplay("./Pictures/Backgrounds/EmptyDoor.png");
    }
    if (doorNeutralEndingCounter == 6) {
      characterNameDisplay.textContent = playerName;
    }
    if (doorNeutralEndingCounter == 7) {
      characterNameDisplay.textContent = '';
    }

    if (doorNeutralEndingCounter == 12) {
      let friendShip = grobItem + squidItem + wickItem + pilzItem;
      //Checck start
      if(friendShip == 1) {
        if(grobItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-1-G.png");
        }
        if(squidItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-1-O.png");
        }
        if(wickItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-1-W.png");
        }
        if(pilzItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-1-P.png");
        }
      } else if (friendShip == 2) {

        if(grobItem == 1 && squidItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-2-GO.png");
        } else if(grobItem == 1 && pilzItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-2-GP.png");
        } else if(grobItem == 1 && wickItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-2-GW.png");
        } else if(squidItem == 1 && pilzItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-2-OP.png");
        } else if(squidItem == 1 && wickItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-2-OW.png");
        } else if(wickItem == 1 && pilzItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-2-WP.png");
        }

      } else if (friendShip == 3) {
        if(grobItem == 1 && squidItem == 1 && wickItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-3-GOW.png");
        } else if(grobItem == 1 && squidItem == 1 && pilzItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-3-GOP.png");
        } else if(grobItem == 1 && wickItem == 1 && pilzItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-3-GWP.png");
        } else if(wickItem == 1 && squidItem == 1 && pilzItem == 1) {
          changeDisplay("./Pictures/Backgrounds/Door-3-OWP.png");
        }
      }
      //Check end
    }

    if(doorNeutralEndingCounter == 15) {
      changeDisplay("./Pictures/Backgrounds/Outside1.png");
    }
    if(doorNeutralEndingCounter == 20) {
      changeDisplay("./Pictures/Backgrounds/NeutralEnding.png");
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(doorNeutralEndingText[doorNeutralEndingCounter])
      .start();
      textBoxClicked = 1;
      doorNeutralEndingCounter++;
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
    characterNameDisplay.textContent = "";
  }
}

//************Door functions end here******************************************************************************************************************************************************************************************


//************Wick functions start here******************************************************************************************************************************************************************************************

function wickRouteIntro()
{
  if (wickIntroCounter <= 9)
  {
    //VISUAL CHANGES
    if(wickIntroCounter == 5)
    {
      characterNameDisplay.textContent = playerName;
    }

    if (wickIntroCounter == 6)
    {
      characterNameDisplay.textContent = ''
      changeDisplay('./Pictures/Backgrounds/Trail.png') //TRAIL!
    }
    if (wickIntroCounter == 7)
    {
      characterNameDisplay.textContent = ''
      changeDisplay('./Pictures/Backgrounds/Mountain.png') //MOUNTAIN!
    }
    //VISUAL CHANGES

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(wickIntro[wickIntroCounter])
      .start();
      textBoxClicked = 1;
      wickIntroCounter++;
    } else {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
    }
  }

  else
  {
    typewriter
    .deleteAll(1)
    .start();
    textBoxClicked = 0;
    leftChoiceBox1.textContent = "Hike up anyway.";
    rightChoiceBox1.textContent = "Look for shelter.";
    leftChoiceBox2.textContent = "Huddle for warmth.";
    removeHidden(leftChoiceBox1);
    removeHidden(rightChoiceBox1);
    removeHidden(leftChoiceBox2);
    characterNameDisplay.textContent = " ";
  }
};

function wickBase1Encounter()
{
    if (wickBase1Counter <= 13)
    {
     //VISUAL CHANGES
     if(wickBase1Counter == 0)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(wickBase1Counter == 2)
     {
       characterNameDisplay.textContent = '';
     }
     if(wickBase1Counter == 4)
     {
       changeDisplay('./Pictures/Backgrounds/Black.png')//BLACK SCREEN!
     }
     if(wickBase1Counter == 8)
     {
       changeDisplay('./Pictures/Backgrounds/LitCamp.png')//CAMP!
     }
     if(wickBase1Counter == 10)
     {
       characterNameDisplay.textContent = '???';
       changeDisplay('./Pictures/Backgrounds/LitCampWickNormal.png')//CAMP WITH WICK!
     }
     if(wickBase1Counter == 13)
     {
       characterNameDisplay.textContent = '';
       changeDisplay('./Pictures/Backgrounds/AvalancheCampWickConfused.png')//AVALANCHE CAMP WITH WICK!
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickBase1[wickBase1Counter])
        .start();
        textBoxClicked = 1;
        wickBase1Counter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      avalancheCounter = 0;
      wickBase1Counter = -2;
    }
}

function wickBase2Encounter()
{
    if (wickBase2Counter <= 9)
    {
     //VISUAL CHANGES
     if(wickBase2Counter == 0)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(wickBase2Counter == 2)
     {
       characterNameDisplay.textContent = '';
     }
     if(wickBase2Counter == 4)
     {
       changeDisplay('./Pictures/Backgrounds/LitCamp.png')//CAMP!
     }
     if(wickBase2Counter == 6)
     {
       characterNameDisplay.textContent = '???';
       changeDisplay('./Pictures/Backgrounds/LitCampWickNormal.png')//CAMP WITH WICK!
     }
     if(wickBase2Counter == 7)
     {
       changeDisplay('./Pictures/Backgrounds/LitCampWickBlush.png')//CAMP WITH WICK BLUSH!
     }
     if(wickBase2Counter == 8)
     {
       characterNameDisplay.textContent = '???';
       changeDisplay('./Pictures/Backgrounds/LitCampWickNormal.png')//CAMP WITH WICK!
     }
     if(wickBase2Counter == 9)
     {
       characterNameDisplay.textContent = '';
       changeDisplay('./Pictures/Backgrounds/AvalancheCampWickConfused.png')//AVALANCHE CAMP WITH WICK!
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickBase2[wickBase2Counter])
        .start();
        textBoxClicked = 1;
        wickBase2Counter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      avalancheCounter = 0;
      wickBase2Counter = -2;
    }
}

function wickBase3Bad1End()
{
    if (wickBase3Bad1Counter <= 10)
    {
     //VISUAL CHANGES
     if(wickBase3Bad1Counter == 0)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(wickBase3Bad1Counter == 1)
     {
       characterNameDisplay.textContent = '';
     }
     if(wickBase3Bad1Counter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/Black.png')//BLACK!
     }
     if(wickBase3Bad1Counter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/GameOver.png')//GAME OVER!
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickBase3Bad1[wickBase3Bad1Counter])
        .start();
        textBoxClicked = 1;
        wickBase3Bad1Counter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
    }
}

function wickBase3Bad2End()
{
    if (wickBase3Bad2Counter <= 10)
    {
     //VISUAL CHANGES
     if(wickBase3Bad2Counter == 0)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(wickBase3Bad2Counter == 1)
     {
       characterNameDisplay.textContent = '';
     }
     if(wickBase3Bad2Counter == 6)
     {
      changeDisplay('./Pictures/Backgrounds/Black.png')//BLACK!
     }
     if(wickBase3Bad2Counter == 10)
     {
      changeDisplay('./Pictures/Backgrounds/GameOver.png')//GAME OVER!
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickBase3Bad2[wickBase3Bad2Counter])
        .start();
        textBoxClicked = 1;
        wickBase3Bad2Counter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
    }
}

function wickBase3PassEncounter()
{
    if (wickBase3PassCounter <= 4)
    {
     //VISUAL CHANGES
     if(wickBase3PassCounter == 0)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(wickBase3PassCounter == 1)
     {
       characterNameDisplay.textContent = '';
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickBase3Pass[wickBase3PassCounter])
        .start();
        textBoxClicked = 1;
        wickBase3PassCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      leftChoiceBox1.textContent = "Ignore, no time.";
      rightChoiceBox1.textContent = "Rescue, make time.";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      characterNameDisplay.textContent = " ";
    }
}

function wickIgnoreEnd()
{
    if (wickIgnoredCounter <= 5)
    {
     //VISUAL CHANGES
     if(wickIgnoredCounter == 0)
     {
       characterNameDisplay.textContent = '';
     }
     if(wickIgnoredCounter == 1)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(wickIgnoredCounter == 2)
     {
       characterNameDisplay.textContent = '';
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickIgnored[wickIgnoredCounter])
        .start();
        textBoxClicked = 1;
        wickIgnoredCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      wickIgnoredCounter = -2;
    }
}

function wickSavedEncounter()
{
    if (wickSavedCounter <= 16)
    {
     //VISUAL CHANGES
     if(wickSavedCounter == 0)
     {
       characterNameDisplay.textContent = '';
     }
     if(wickSavedCounter == 1)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(wickSavedCounter == 3)
     {
       characterNameDisplay.textContent = '';
     }
     if(wickSavedCounter == 4)
     {
       changeDisplay('./Pictures/Backgrounds/UnlitCamp.png')//UNLIT CAMP!
     }
     if(wickSavedCounter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/LitCampWickZZZ.png')//CAMP WICK SLEEP
     }
     if(wickSavedCounter == 9)
     {
       characterNameDisplay.textContent = '???';
       changeDisplay('./Pictures/Backgrounds/LitCampWickConfused.png')//CAMP WITH WICK CONFUSED!
     }
     if(wickSavedCounter == 10)
     {
       characterNameDisplay.textContent = '';
     }
     if(wickSavedCounter == 11)
     {
       characterNameDisplay.textContent = '???';
     }
     if(wickSavedCounter == 12)
     {
       characterNameDisplay.textContent = '???';
       changeDisplay('./Pictures/Backgrounds/LitCampWickNormal.png')//CAMP WITH WICK!
     }
     if(wickSavedCounter == 13)
     {
       characterNameDisplay.textContent = '???';
       changeDisplay('./Pictures/Backgrounds/LitCampWickBlush.png')//CAMP WITH WICK BLUSH!
     }
     if(wickSavedCounter == 14)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(wickSavedCounter == 15)
     {
       characterNameDisplay.textContent = '???';
     }
     if(wickSavedCounter == 16)
     {
       characterNameDisplay.textContent = '';
       changeDisplay('./Pictures/Backgrounds/AvalancheCampWickConfused.png')//AVALANCHE CAMP WITH WICK!
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickSaved[wickSavedCounter])
        .start();
        textBoxClicked = 1;
        wickSavedCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      avalancheCounter = 0;
      wickSavedCounter = -2;
    }
}

function wickAvalancheResponse()
{
    if (avalancheCounter <= 4)
    {
     //VISUAL CHANGES
     if(avalancheCounter == 0)
     {
       characterNameDisplay.textContent = '???';
       changeDisplay('./Pictures/Backgrounds/AvalancheCampWickConfused.png')//AVALANCHE CAMP WITH WICK!
     }
     if(avalancheCounter == 4)
     {
       characterNameDisplay.textContent = 'Wick';
       changeDisplay('./Pictures/Backgrounds/AvalancheCampWickBlush.png')//AVALANCHE CAMP WITH WICK BLUSH!
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(avalancheResponse[avalancheCounter])
        .start();
        textBoxClicked = 1;
        avalancheCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      leftChoiceBox1.textContent = "Just dig out. Easy peasy.";
      rightChoiceBox1.textContent = "Exploring sounds good.";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      characterNameDisplay.textContent = " ";
    }
}

function wickAvalancheResponseDig()
{
    if (avalancheDigCounter <= 7)
    {
     //VISUAL CHANGES
     if(avalancheDigCounter == 0)
     {
       characterNameDisplay.textContent = playerName;
       changeDisplay('./Pictures/Backgrounds/AvalancheCampWickNormal.png')//AVALANCHE CAMP WITH WICK!
     }
     if(avalancheDigCounter == 2)
     {
       characterNameDisplay.textContent = 'Wick';
       changeDisplay('./Pictures/Backgrounds/AvalancheCampWickConfused.png')//AVALANCHE CAMP WITH WICK CONFUSE!
     }
     if(avalancheDigCounter == 3)
     {
       characterNameDisplay.textContent = '';
     }
     if(avalancheDigCounter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/Outside1.png')//WHITE SCREEN!
     }
     if(avalancheDigCounter == 7)
     {
       changeDisplay('./Pictures/Backgrounds/GameOver.png')//GAME OVER!
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(avalancheDig[avalancheDigCounter])
        .start();
        textBoxClicked = 1;
        avalancheDigCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
    }
}

function wickAvalancheResponseExplore()
{
    if (exploreCavesCounter <= 15)
    {
     //VISUAL CHANGES
     if(exploreCavesCounter == 0)
     {
       characterNameDisplay.textContent = playerName;
     }
     if(exploreCavesCounter == 1)
     {
       characterNameDisplay.textContent = '';
       changeDisplay('./Pictures/Backgrounds/DarkHallway.png')//DARK HALLWAY!
     }
     if(exploreCavesCounter == 3)
     {
       changeDisplay('./Pictures/Backgrounds/CrystalCave.png')//CRYSTAL CAVE!
     }
     if(exploreCavesCounter == 7)
     {
       changeDisplay('./Pictures/Backgrounds/Supplies.png')//CLOWN SUPPLIES!
     }
     if(exploreCavesCounter == 8)
     {
       characterNameDisplay.textContent = 'Wick';
       changeDisplay('./Pictures/Backgrounds/CrystalCaveWickNormal.png')//CRYSTAL CAVE WITH WICK!
     }
     if(exploreCavesCounter == 10)
     {
       characterNameDisplay.textContent = '';
       changeDisplay('./Pictures/Backgrounds/CrystalCave.png')//CRYSTAL CAVE!
     }
     if(exploreCavesCounter == 13)
     {
       characterNameDisplay.textContent = 'Wick';
       changeDisplay('./Pictures/Backgrounds/CrystalCaveWickConfused.png')//CRYSTAL CAVE WITH WORRIED WICK!
     }
     if(exploreCavesCounter == 15)
     {
      characterNameDisplay.textContent = playerName;
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(exploreCaves[exploreCavesCounter])
        .start();
        textBoxClicked = 1;
        exploreCavesCounter++;
        if (exploreCavesCounter == 1)
        {
          typewriter
          .changeDelay(customTextSpeed)
          .typeString(playerName + ", lets explore deeper into the cave shall we?")
          .start();
        }
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      leftChoiceBox1.textContent = "Turn back, return to camp.";
      rightChoiceBox1.textContent = "Light Wick on fire.";
      leftChoiceBox2.textContent = "Honk back, return to honk.";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      removeHidden(leftChoiceBox2);
      characterNameDisplay.textContent = " ";
    }
}

function wickLightFire()
{
    if (wickFireCounter <= 19)
    {
     //VISUAL CHANGES
     if (wickFireCounter == 0)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickFireCounter == 2)
     {
       characterNameDisplay.textContent = playerName
     }
     if (wickFireCounter == 3)
     {
       characterNameDisplay.textContent = 'Wick'
     }
     if (wickFireCounter == 4)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickFireCounter == 7)
     {
      changeDisplay('./Pictures/Backgrounds/CrystalCaveClown.png') //CRYSTAL CAVE CLOWN
     }
     if (wickFireCounter == 8)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/CrystalCaveWickFire.png') //CRYSTAL CAVE FIRE
     }
     if (wickFireCounter == 9)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/CrystalCaveClown.png') //CRYSTAL CAVE CLOWN
     }
     if (wickFireCounter == 11)
     {
       changeDisplay('./Pictures/Backgrounds/Slide.png') //SLIDE
     }
     if (wickFireCounter == 13)
     {
       changeDisplay('./Pictures/Backgrounds/Trail.png') //TRAIL
     }
     if (wickFireCounter == 14)
     {
       characterNameDisplay.textContent = playerName
     }
     if (wickFireCounter == 15)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/TrailWickAngry.png') //TRAIL ANGRY WICK
     }
     if (wickFireCounter == 17)
     {
       changeDisplay('./Pictures/Backgrounds/Trail.png') //TRAIL
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickFire[wickFireCounter])
        .start();
        textBoxClicked = 1;
        wickFireCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      wickFireCounter = -2;
    }
}

function wickTurnBack()
{
    if (wickClownStabCounter <= 5)
    {
     //VISUAL CHANGES
     if (wickClownStabCounter == 0)
     {
       characterNameDisplay.textContent = playerName
     }
     if (wickClownStabCounter == 1)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/CrystalCaveWickNormal.png')//CRYSTAL CAVE WICK
     }
     if (wickClownStabCounter == 2)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/Red.png')//RED SCREEN
     }
     if (wickClownStabCounter == 4)
     {
       changeDisplay('./Pictures/Backgrounds/Black.png')//BLACK SCREEN
     }
     if (wickClownStabCounter == 5)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/GameOver.png')//GAME OVER
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickClownStab[wickClownStabCounter])
        .start();
        textBoxClicked = 1;
        wickClownStabCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
    }
}

function wickHonkBack()
{
    if (wickClownHornCounter <= 7)
    {
     //VISUAL CHANGES
     if (wickClownHornCounter == 0)
     {
       characterNameDisplay.textContent = playerName
     }
     if (wickClownHornCounter == 1)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickClownHornCounter == 5)
     {
      changeDisplay('./Pictures/Backgrounds/CrystalCaveClown.png')//CRYSTAL CAVE CLOWN
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickClownHorn[wickClownHornCounter])
        .start();
        textBoxClicked = 1;
        wickClownHornCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      //introCounter = -2;
      leftChoiceBox1.textContent = "Approach the clown(?).";
      rightChoiceBox1.textContent = "Give Wick another horn.";
      leftChoiceBox2.textContent = "Give clown(?) your horn.";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      removeHidden(leftChoiceBox2);
      characterNameDisplay.textContent = " ";
    }
}

function wickApproachClownEnd()
{
    if (wickApproachClownCounter <= 7)
    {
     //VISUAL CHANGES
     if (wickApproachClownCounter == 0)
     {
       characterNameDisplay.textContent = playerName
     }
     if (wickApproachClownCounter == 2)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/CrystalCaveWickConfused.png')//CRYSTAL CAVE WICK CONFUSED
     }
     if (wickApproachClownCounter == 3)
     {
       characterNameDisplay.textContent = playerName
       changeDisplay('./Pictures/Backgrounds/CrystalCaveClown.png')//CRYSTAL CAVE CLOWN
     }
     if (wickApproachClownCounter == 4)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickApproachClownCounter == 5)
     {
       changeDisplay('./Pictures/Backgrounds/Red.png')//RED SCREEN
     }
     if (wickApproachClownCounter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/Black.png')//BLACK SCREEN
     }
     if (wickApproachClownCounter == 7)
     {
       changeDisplay('./Pictures/Backgrounds/GameOver.png')//GAME OVER
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickApproachClown[wickApproachClownCounter])
        .start();
        textBoxClicked = 1;
        wickApproachClownCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
    }
}

function wickGiveHornWick()
{
    if (wickGiveHornWCounter <= 7)
    {
     //VISUAL CHANGES
     if (wickGiveHornWCounter == 0)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickGiveHornWCounter == 1)
     {
       changeDisplay('./Pictures/Backgrounds/CrystalCaveWickNormal.png')//CRYSTAL CAVE WICK NORMAL
     }
     if (wickGiveHornWCounter == 4)
     {
       changeDisplay('./Pictures/Backgrounds/CrystalCaveClown.png')//CRYSTAL CAVE CLOWN
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickGiveHornW[wickGiveHornWCounter])
        .start();
        textBoxClicked = 1;
        wickGiveHornWCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickGiveHornWCounter = -2;
      wickClownSatisfiedCounter = 0;
    }
}

function wickGiveHornClown()
{
    if (wickGiveHornCCounter <= 7)
    {
     //VISUAL CHANGES
     if (wickGiveHornCCounter == 0)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickGiveHornCCounter == 1)
     {
       changeDisplay('./Pictures/Backgrounds/CrystalCaveClown.png')//CRYSTAL CAVE CLOWN
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickGiveHornC[wickGiveHornCCounter])
        .start();
        textBoxClicked = 1;
        wickGiveHornCCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickGiveHornCCounter = -2;
      wickClownSatisfiedCounter = 0;
    }
}

function wickClownSatisfiedEvent()
{
    if (wickClownSatisfiedCounter <= 10)
    {
     //VISUAL CHANGES
     if (wickClownSatisfiedCounter == 0)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/CrystalCaveClown.png')//CRYSTAL CAVE CLOWN
     }
     if (wickClownSatisfiedCounter == 2)
     {
       changeDisplay('./Pictures/Backgrounds/Slide.png')//SLIDE
     }
     if (wickClownSatisfiedCounter == 3)
     {
       changeDisplay('./Pictures/Backgrounds/Peak.png')//PEAK
     }
     if (wickClownSatisfiedCounter == 5)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/PeakWickConfused.png')//PEAK WICK CONFUSED
     }
     if (wickClownSatisfiedCounter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickClownSatisfiedCounter == 10)
     {
       changeDisplay('./Pictures/Backgrounds/PeakWickConfused.png')//PEAK WICK CONFUSED
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickClownSatisfied[wickClownSatisfiedCounter])
        .start();
        textBoxClicked = 1;
        wickClownSatisfiedCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      leftChoiceBox1.textContent = "Wow Wick sounds dumb.";
      rightChoiceBox1.textContent = "Explain your noble quest.";
      leftChoiceBox2.textContent = "Keep your reasons secret...";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      removeHidden(leftChoiceBox2);
      characterNameDisplay.textContent = " ";
    }
}

function wickConversationKillerEnd()
{
    if (wickConversationKillerCounter <= 7)
    {
     //VISUAL CHANGES
     if (wickConversationKillerCounter == 0)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/PeakWickConfused.png')//PEAK WICK CONFUSED
     }
     if (wickConversationKillerCounter == 1)
     {
       characterNameDisplay.textContent = playerName
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickConversationKillerCounter == 3)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/PeakWickConfused.png')//PEAK WICK CONFUSED
     }
     if (wickConversationKillerCounter == 4)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickConversationKillerCounter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/Trail.png')//TRAIL
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickConversationKiller[wickConversationKillerCounter])
        .start();
        textBoxClicked = 1;
        wickConversationKillerCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      wickConversationKillerCounter = -2;
    }
}

function wickRudeEnd()
{
    if (wickRudeDismissalCounter <= 8)
    {
     //VISUAL CHANGES
     if (wickRudeDismissalCounter == 0)
     {
       characterNameDisplay.textContent = playerName
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickRudeDismissalCounter == 1)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/PeakWickConfused.png')//PEAK WICK CONFUSED
     }
     if (wickRudeDismissalCounter == 2)
     {
       characterNameDisplay.textContent = playerName
     }
     if (wickRudeDismissalCounter == 4)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/PeakWickAngry.png')//PEAK WICK ANGRY
     }
     if (wickRudeDismissalCounter == 5)
     {
       changeDisplay('./Pictures/Backgrounds/Peak.png')//PEAK
     }
     if (wickRudeDismissalCounter == 7)
     {
       changeDisplay('./Pictures/Backgrounds/Trail.png')//TRAIL
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString((wickRudeDismissal)[wickRudeDismissalCounter])
        .start();
        textBoxClicked = 1;
        wickRudeDismissalCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      wickRudeDismissalCounter = -2;
    }
}

function wickExplainQuestEvent()
{
    if (wickExplainQuestCounter <= 7)
    {
     //VISUAL CHANGES
     if (wickExplainQuestCounter == 0)
     {
       characterNameDisplay.textContent = playerName
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickExplainQuestCounter == 4)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/PeakWickBlush.png')//PEAK WICK BLUSH
     }
     if (wickExplainQuestCounter == 5)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickExplainQuestCounter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/PeakWickConfused.png')//PEAK WICK CONFUSED
     }
     if (wickExplainQuestCounter == 7)
     {
       changeDisplay('./Pictures/Backgrounds/PeakWickBlush.png')//PEAK WICK BLUSH
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickExplainQuest[wickExplainQuestCounter])
        .start();
        textBoxClicked = 1;
        wickExplainQuestCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      leftChoiceBox1.textContent = "Additional companionship!";
      rightChoiceBox1.textContent = "You're too spooky...";
      leftChoiceBox2.textContent = "We should split up.";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      removeHidden(leftChoiceBox2);
      characterNameDisplay.textContent = " ";
    }
}

function wickAcceptFriendEvent()
{
    if (wickAcceptFriendCounter <= 3)
    {
     //VISUAL CHANGES
     if (wickAcceptFriendCounter == 0)
     {
       characterNameDisplay.textContent = playerName
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickAcceptFriendCounter == 1)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/PeakWickBlush.png')//PEAK WICK BLUSH
     }
     if (wickAcceptFriendCounter == 3)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/Peak.png')//PEAK
     }
     //HERE
      if (wickAcceptFriendCounter == 3) {
        wickItemContainer.src = './Pictures/Items/WickItem.png';
        wickItem = 1;
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString((wickAcceptFriend)[wickAcceptFriendCounter])
        .start();
        textBoxClicked = 1;
        wickAcceptFriendCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickAcceptFriendCounter = -2;
      wickGoBackCounter = 0;
    }
}

function wickSpookyEvent()
{
    if (wickSpookyCounter <= 5)
    {
     //VISUAL CHANGES
     if (wickSpookyCounter == 0)
     {
       characterNameDisplay = playerName
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickSpookyCounter == 3)
     {
       characterNameDisplay = ''
       changeDisplay('./Pictures/Backgrounds/PeakWickAngry.png')//PEAK WICK ANGRY
     }
     if (wickSpookyCounter == 5)
     {
       characterNameDisplay = ''
       changeDisplay('./Pictures/Backgrounds/Peak.png')//PEAK
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString((wickSpooky)[wickSpookyCounter])
        .start();
        textBoxClicked = 1;
        wickSpookyCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickSpookyCounter = -2;
      wickGoBackCounter = 0;
    }
}

function wickSplitEvent()
{
    if (wickSplitCounter <= 6)
    {
     //VISUAL CHANGES
     if (wickSplitCounter == 0)
     {
       characterNameDisplay.textContent = playerName
       changeDisplay('./Pictures/Backgrounds/PeakWickNormal.png')//PEAK WICK NORMAL
     }
     if (wickSplitCounter == 2)
     {
       characterNameDisplay.textContent = 'Wick'
       changeDisplay('./Pictures/Backgrounds/PeakWickConfused.png')//PEAK WICK CONFUSED
     }
     if (wickSplitCounter == 4)
     {
       characterNameDisplay.textContent = playerName
     }
     if (wickSplitCounter == 5)
     {
       characterNameDisplay.textContent = ''
       changeDisplay('./Pictures/Backgrounds/PeakWickConfused.png')//PEAK WICK CONFUSED
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString((wickSplit)[wickSplitCounter])
        .start();
        textBoxClicked = 1;
        wickSplitCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickSplitCounter = -2;
      wickGoBackCounter = 0;
    }
}

function wickGoBackEvent()
{
    if (wickGoBackCounter <= 1)
    {
     //VISUAL CHANGES
     if (wickGoBackCounter == 0)
     {
       characterNameDisplay.textContent = ''
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(wickGoBack[wickGoBackCounter])
        .start();
        textBoxClicked = 1;
        wickGoBackCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      leftChoiceBox1.textContent = "Go down normally and hike.";
      rightChoiceBox1.textContent = "Roll down as a snowball.";
      leftChoiceBox2.textContent = "Use the power of your companions.";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      removeHidden(leftChoiceBox2);
      characterNameDisplay.textContent = " ";
    }
}

function wickHikeEnd()
{
    if (wickGoDownNormalCounter <= 2)
    {
     //VISUAL CHANGES
     if (wickGoDownNormalCounter == 0)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickGoDownNormalCounter == 1)
     {
       changeDisplay('./Pictures/Backgrounds/Trail.png')//TRAIL
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString((wickGoDownNormal)[wickGoDownNormalCounter])
        .start();
        textBoxClicked = 1;
        wickGoDownNormalCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      wickGoDownNormalCounter = -2;
    }
}

function wickRollEnd()
{
    if (wickRollCounter <= 8)
    {
     //VISUAL CHANGES
     if (wickRollCounter == 0)
     {
       characterNameDisplay.textContent = playerName
     }
     if (wickRollCounter == 6)
     {
       changeDisplay('./Pictures/Backgrounds/Red.png')//RED
     }
     if (wickRollCounter == 7)
     {
       changeDisplay('./Pictures/Backgrounds/Black.png')//BLACK
     }
     if (wickRollCounter == 8)
     {
       changeDisplay('./Pictures/Backgrounds/GameOver.png')//GAME OVER
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString((wickRoll)[wickRollCounter])
        .start();
        textBoxClicked = 1;
        wickRollCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
    }
}

function wickSnowboardEnd()
{
    if (wickSnowBoardCounter <= 2)
    {
     //VISUAL CHANGES
     if (wickSnowBoardCounter == 0)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickSnowBoardCounter == 2)
     {
       changeDisplay('./Pictures/Backgrounds/Trail.png')//TRAIL
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString((wickSnowBoard)[wickSnowBoardCounter])
        .start();
        textBoxClicked = 1;
        wickSnowBoardCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
      wickRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      wickSnowBoardCounter = -2;
    }
}

function wickSnowBoardBadEnd()
{
    if (wickSnowBoardBadCounter <= 4)
    {
     //VISUAL CHANGES
     if (wickSnowBoardBadCounter == 0)
     {
       characterNameDisplay.textContent = ''
     }
     if (wickSnowBoardBadCounter == 2)
     {
       changeDisplay('./Pictures/Backgrounds/Red.png')//RED
     }
     if (wickSnowBoardBadCounter == 3)
     {
       changeDisplay('./Pictures/Backgrounds/Black.png')//BLACK
     }
     if (wickSnowBoardBadCounter == 4)
     {
       changeDisplay('./Pictures/Backgrounds/GameOver.png')//GAME OVER
     }
     //HERE
      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString((wickSnowBoardBad)[wickSnowBoardBadCounter])
        .start();
        textBoxClicked = 1;
        wickSnowBoardBadCounter++;
      } else {
        typewriter
        .deleteAll(1)
        .start();
        textBoxClicked = 0;
      }
    }

    else
    {
      typewriter
      .deleteAll(1)
      .start();
      textBoxClicked = 0;
      characterNameDisplay.textContent = " ";
    }
}

//************Wick functions end here******************************************************************************************************************************************************************************************


//************Pilz functions starts here******************************************************************************************************************************************************************************************
  function forestIntroSequence() {
    if (forestIntroCounter <= 10) {
      if (forestIntroCounter == 2) {
        changeDisplay('./pictures/backgrounds/BlueForestPath.png');
        changeBars('#2985cc');
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
      //forestIntroCounter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      leftChoiceBox1.textContent = "Head up towards the hill";
      rightChoiceBox1.textContent = "Head towards the creek";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
    }
  }

  function forestHillSequence() {
    if(forestHillCounter <= 9) {
      if(forestHillCounter == 7) {
        changeDisplay('./pictures/backgrounds/BFCaveEntranceDark.png');
        changeBars('#0f2c48');
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestHillText[forestHillCounter])
        .start();
        textBoxClicked = 1;
        forestHillCounter++;
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
      //forestHillCounter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      leftChoiceBox1.textContent = "Seek shelter in the cave";
      rightChoiceBox1.textContent = "Head back down the hill come back in the morning";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
    }
  }

  function forestCreekSequence() {
    if(forestCreekCounter <= 9) {
      if(forestCreekCounter == 2) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCreekCounter == 3) {
        characterNameDisplay.textContent = '';
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCreekText[forestCreekCounter])
        .start();
        textBoxClicked = 1;
        forestCreekCounter++;
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
      forestCreekCounter = -2; //-2 means that this sequence has been done.
      forestWoodsNightCounter = 0;
      characterNameDisplay.textContent = '';
    }
  }

  function forestCaveNightSequence() {
    if(forestCaveNightCounter <= 30) {
      //DO stuff here
      if(forestCaveNightCounter == 4) {
        changeDisplay('./pictures/backgrounds/CaveCave.png');
        changeBars('#0b1426');
      }
      if(forestCaveNightCounter == 10) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveNightCounter == 12) {
        characterNameDisplay.textContent = '';
      }
      if(forestCaveNightCounter == 15) {
        changeDisplay('./pictures/backgrounds/CaveCampfire.png');
        changeBars('#132142');
      }
      if(forestCaveNightCounter == 21) {
        characterNameDisplay.textContent = '(Unkown)';
      }
      if(forestCaveNightCounter == 23) {
        characterNameDisplay.textContent = '';
      }
      if(forestCaveNightCounter == 24) {
        changeDisplay('./pictures/backgrounds/CaveCampfirePilzSigh.png');
      }
      if(forestCaveNightCounter == 25) {
        characterNameDisplay.textContent = '(Unkown)';
      }
      if(forestCaveNightCounter == 27) {
        characterNameDisplay.textContent = 'Pilz';
        changeDisplay('./pictures/backgrounds/CaveCampfirePilzNormal.png');
      }
      if(forestCaveNightCounter == 30) {
        characterNameDisplay.textContent = '';
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveNightText[forestCaveNightCounter])
        .start();
        textBoxClicked = 1;
        forestCaveNightCounter++;

        if ( (grobItem == 1) && (forestCaveNightCounter == 16) ) {
          let tempStr = " Every once in a while you hear Grob walk around and jump a couple of times for fun since he doesn't need to sleep...";
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
      //forestCaveNightCounter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      leftChoiceBox1.textContent = "Sure looks tasty (Eat Pilz)";
      rightChoiceBox1.textContent = "Agree to help Pilz out of the cave";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
    }

  }

  function forestWoodsNightSequence() {
    if (forestWoodsNightCounter <= 34) {
      if(forestWoodsNightCounter == 1) {
        changeDisplay('./pictures/backgrounds/ForestCampfire.png');
        changeBars('#113550');
      }
      if (forestWoodsNightCounter == 7) {
        changeDisplay('./pictures/backgrounds/BlueForestPath.png');
        changeBars('#2985cc');
      }
      if(forestWoodsNightCounter == 12) {
        changeDisplay('./pictures/backgrounds/BFCaveEntranceDay.png');
        changeBars('#2985cc');
      }
      if(forestWoodsNightCounter == 18) {
        changeDisplay('./pictures/backgrounds/BFCaveEntranceDaySnailsSpores.png');
        changeBars('#2985cc');
      }
      if(forestWoodsNightCounter == 23) {
        changeDisplay('./pictures/backgrounds/CaveCave.png');
        changeBars('#0b1426');
      }
      if(forestWoodsNightCounter == 28) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestWoodsNightCounter == 30) {
        characterNameDisplay.textContent = '';
      }
      if(forestWoodsNightCounter == 34) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("#5c4944");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestWoodsNightText[forestWoodsNightCounter])
        .start();
        textBoxClicked = 1;
        forestWoodsNightCounter++;
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
      forestWoodsNightCounter = -2; //-2 means that this sequence has been done.
      pilzRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      characterNameDisplay.textContent = '';
    }
  }

  function forestCaveEat1Sequence() {
    if(forestCaveEat1Counter <= 24) {
      if(forestCaveEat1Counter == 2) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveEat1Counter == 3) {
        characterNameDisplay.textContent = "Pilz";
        changeDisplay('./Pictures/Backgrounds/CaveCampfirePilzHappy.png');
      }
      if(forestCaveEat1Counter == 5) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveEat1Counter == 6) {
        characterNameDisplay.textContent = "Pilz";
      }
      if(forestCaveEat1Counter == 7) {
        changeDisplay('./Pictures/Backgrounds/CaveCampfirePilzNormal.png');
      }
      if(forestCaveEat1Counter == 9) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveEat1Counter == 10) {
        characterNameDisplay.textContent = "Pilz";
      }
      if(forestCaveEat1Counter == 11) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveEat1Counter == 12) {
        characterNameDisplay.textContent = "Pilz";
        changeDisplay('./Pictures/Backgrounds/CaveCampfirePilzNotAmused.png');
      }
      if(forestCaveEat1Counter == 13) {
        changeDisplay('./Pictures/Backgrounds/CaveCampfirePilzCool.png');
      }
      if(forestCaveEat1Counter == 14) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveEat1Counter == 16) {
        characterNameDisplay.textContent = "Pilz";
        changeDisplay('./Pictures/Backgrounds/CaveCampfirePilzNormal.png');
      }
      if(forestCaveEat1Counter == 17) {
        characterNameDisplay.textContent = "";
      }
      if(forestCaveEat1Counter == 18) {
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars('black');
      }
      if(forestCaveEat1Counter == 24) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("#5c4944");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveEat1Text[forestCaveEat1Counter])
        .start();
        textBoxClicked = 1;
        forestCaveEat1Counter++;
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
      forestCaveEat1Counter = -2; //-2 means that this sequence has been done.
      pilzRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      characterNameDisplay.textContent = '';
    }
  }

  function forestCaveEscapeSequence() {
    if (forestCaveEscapeCounter <= 11) {
      if(forestCaveEscapeCounter == 0) {
        characterNameDisplay.textContent = 'Pilz';
        changeDisplay('./Pictures/Backgrounds/CaveCampfirePilzHappy.png');
      }
      if(forestCaveEscapeCounter == 1) {
        changeDisplay('./Pictures/Backgrounds/CaveCampfirePilzContent.png');
      }
      if(forestCaveEscapeCounter == 2) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveEscapeCounter == 4) {
        characterNameDisplay.textContent = '';
        changeDisplay('./Pictures/Backgrounds/CaveCave.png');
      }
      if(forestCaveEscapeCounter == 9) {
        changeDisplay('./Pictures/Backgrounds/CaveCaveSnails.png');
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveEscapeText[forestCaveEscapeCounter])
        .start();
        textBoxClicked = 1;
        forestCaveEscapeCounter++;
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
      //forestCaveEscapeCounter = -2; //-2 means that this sequence has been done.
      characterNameDisplay.textContent = '';
      leftChoiceBox1.textContent = "Eat Pilz to get the snails to go away";
      rightChoiceBox1.textContent = "Give up Pilz and their legacy";
      leftChoiceBox2.textContent = "Create a distraction";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      removeHidden(leftChoiceBox2);
    }
  }

  function forestCaveEat2Sequence() {
    if(forestCaveEat2Counter <= 14) {
      if(forestCaveEat2Counter == 6) {
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars('black');
      }
      if(forestCaveEat2Counter == 14) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("#5c4944");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveEat2Text[forestCaveEat2Counter])
        .start();
        textBoxClicked = 1;
        forestCaveEat2Counter++;
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
      forestCaveEat2Counter = -2; //-2 means that this sequence has been done.
      pilzRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      characterNameDisplay.textContent = '';
    }
  }

  function forestCaveAbandonSequence() {
    if(forestCaveAbandonCounter <= 12) {
      if(forestCaveAbandonCounter == 5) {
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars('black');
      }
      if(forestCaveAbandonCounter == 12) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("#5c4944");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveAbandonText[forestCaveAbandonCounter])
        .start();
        textBoxClicked = 1;
        forestCaveAbandonCounter++;
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
      forestCaveAbandonCounter = -2; //-2 means that this sequence has been done.
      pilzRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      characterNameDisplay.textContent = '';
    }
  }

  function forestCaveDistract1Sequence() {
    if (forestCaveDistract1Counter <= 16) {
      if(forestCaveDistract1Counter == 4) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveDistract1Counter == 6) {
        characterNameDisplay.textContent = '';
      }
      if(forestCaveDistract1Counter == 14) {
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars('black');
      }
      if(forestCaveDistract1Counter == 16) {
        changeDisplay('./Pictures/Backgrounds/GameOver.png');
        changeBars('black');
      }


      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveDistract1Text[forestCaveDistract1Counter])
        .start();
        textBoxClicked = 1;
        forestCaveDistract1Counter++;
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
      characterNameDisplay.textContent = '';
    }
  }

  function forestCaveDistract2Sequence() {
    if(forestCaveDistract2Counter <= 23) {
      if(forestCaveDistract2Counter == 9) {
        changeDisplay('./Pictures/Backgrounds/Outside1.png');
        changeBars('white');
      }
      if(forestCaveDistract2Counter == 10) {
        changeDisplay('./Pictures/Backgrounds/BFCaveEntranceDay.png');
        changeBars('#2985cc');
      }
      if(forestCaveDistract2Counter == 11) {
        characterNameDisplay.textContent = 'Pilz';
        changeDisplay('./Pictures/Backgrounds/BFCaveEntranceDayPilzNormal.png');
      }
      if(forestCaveDistract2Counter == 12) {
        characterNameDisplay.textContent = 'Pilz';
        changeDisplay('./Pictures/Backgrounds/BFCaveEntranceDayPilzContent.png');
      }
      if(forestCaveDistract2Counter == 13) {
        characterNameDisplay.textContent = playerName;
        changeDisplay('./Pictures/Backgrounds/BFCaveEntranceDayPilzNormal.png');
      }
      if(forestCaveDistract2Counter == 14) {
        characterNameDisplay.textContent = "Pilz";
      }
      if(forestCaveDistract2Counter == 16) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveDistract2Counter == 18) {
        characterNameDisplay.textContent = "Pilz";
        changeDisplay('./Pictures/Backgrounds/BFCaveEntranceDayPilzHappy.png');
      }
      if(forestCaveDistract2Counter == 19) {
        changeDisplay('./Pictures/Backgrounds/BFCaveEntranceDayPilzNormal.png');
      }
      if(forestCaveDistract2Counter == 20) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveDistract2Counter == 21) {
        characterNameDisplay.textContent = 'Pilz';
      }
      if(forestCaveDistract2Counter == 22) {
        characterNameDisplay.textContent = '';
      }


      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveDistract2Text[forestCaveDistract2Counter])
        .start();
        textBoxClicked = 1;
        forestCaveDistract2Counter++;
        //Special Dialogue
        if( (forestCaveDistract2Counter == 2) || (forestCaveDistract2Counter == 3) ) {
          if(grobItem == 1) {
            if(forestCaveDistract2Counter == 2) {
              typewriter
              .changeDelay(customTextSpeed)
              .typeString(" You decide to send Grob as a distraction since he will most likely grab the most attention.")
              .start();
            }
            if(forestCaveDistract2Counter == 3) {
              typewriter
              .changeDelay(customTextSpeed)
              .typeString(" Grob runs in screaming about how he just wants the people of his town to like him and have cool parties.")
              .start();
            }
          } else
          if(wickItem == 1) {
            if(forestCaveDistract2Counter == 2) {
              typewriter
              .changeDelay(customTextSpeed)
              .typeString(" You decide to send wick as a distraction since they will be most knowledgable about the snails.")
              .start();
            }
            if(forestCaveDistract2Counter == 3) {
              typewriter
              .changeDelay(customTextSpeed)
              .typeString(" Wick just walks around and kicks some rocks... Some how this works.")
              .start();
            }
          } else
          if(squidItem == 1) {
            if(forestCaveDistract2Counter == 2) {
              typewriter
              .changeDelay(customTextSpeed)
              .typeString(" You decide to send Octo as a distraction since they are the strongest.")
              .start();
            }
            if(forestCaveDistract2Counter == 3) {
              typewriter
              .changeDelay(customTextSpeed)
              .typeString(" Octo just slithers around and flexes, which puts the snails in a trance.")
              .start();
            }
          }
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
      characterNameDisplay.textContent = '';
      leftChoiceBox1.textContent = "Consume Pilz";
      rightChoiceBox1.textContent = "Let Pilz join you on your journey";
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);

    }
  }

  function forestCaveEat3Sequence() {
    if(forestCaveEat3Counter <= 12) {
      if(forestCaveEat3Counter == 2) {
        changeDisplay('./Pictures/Backgrounds/Black.png');
        changeBars('black');
      }
      if(forestCaveEat3Counter == 12) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("#5c4944");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveEat3Text[forestCaveEat3Counter])
        .start();
        textBoxClicked = 1;
        forestCaveEat3Counter++;
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
      characterNameDisplay.textContent = '';
    }
  }

  function forestCaveFriendshipSequence() {
    if(forestCaveFriendshipCounter <= 6) {
      if(forestCaveFriendshipCounter == 0) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveFriendshipCounter == 1) {
        characterNameDisplay.textContent = '';
      }
      if(forestCaveFriendshipCounter == 4) {
        changeDisplay('./Pictures/Backgrounds/BFCaveEntranceDay.png');
        changeBars('#2985cc');
        pilzItemContainer.src='./Pictures/Items/PilzItem.png';
        pilzItem = 1;
      }
      if(forestCaveEat3Counter == 6) {
        changeDisplay('./Pictures/Backgrounds/Tavern.png');
        changeBars("#5c4944");
      }

      if (textBoxClicked == 0) {
        typewriter
        .changeDelay(customTextSpeed)
        .typeString(forestCaveFriendshipText[forestCaveFriendshipCounter])
        .start();
        textBoxClicked = 1;
        forestCaveFriendshipCounter++;
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
      forestCaveFriendshipCounter= -2; //-2 means that this sequence has been done.
      pilzRoute = 1;
      tavernHubCounter = 0;
      tavernHubAgain = 1;
      characterNameDisplay.textContent = '';
    }
  }

//************Pilz functions ends here******************************************************************************************************************************************************************************************


//************Octo functions starts here******************************************************************************************************************************************************************************************

function oceanStartSequence(){
  if (seaIntroCounter <= 7){
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";
    if (seaIntroCounter == 1) {
      characterNameDisplay.textContent = "Capn' Rufus";
    } else if (seaIntroCounter == 2) {
      characterNameDisplay.textContent = playerName;
    } else if (seaIntroCounter == 3) {
      characterNameDisplay.textContent = "Capn' Rufus";
    } else if (seaIntroCounter == 4) {
      changeDisplay('./Pictures/Backgrounds/dock.png');
      characterNameDisplay.textContent = "";
    } else if (seaIntroCounter == 5) {
      characterNameDisplay.textContent = "Capn' Rufus";
    }else if (seaIntroCounter == 6) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(seaIntroText[seaIntroCounter])
      .start();
      textBoxClicked = 1;
      seaIntroCounter++;
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
    //seaIntroCounter = -2; //-2 means that this sequence has been done.
    characterNameDisplay.textContent = '';
    leftChoiceBox1.textContent = "Open your window, you aren't a coward.";
    rightChoiceBox1.textContent = "Stay asleep: This isn't your boat";
    removeHidden(leftChoiceBox1);
    removeHidden(rightChoiceBox1);
  }
}

function belowDeckSequence(){
  if (belowDeckCounter <= 4){
    changeDisplay('./Pictures/Backgrounds/krakenship.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (belowDeckCounter == 0) {
      characterNameDisplay.textContent = "";
    } else if (belowDeckCounter == 1) {
      characterNameDisplay.textContent = "Capn' Rufus";
    } else if (belowDeckCounter == 2) {
      characterNameDisplay.textContent = "";
    } else if (belowDeckCounter == 3) {
      characterNameDisplay.textContent = "Capn' Rufus";
    } else if (belowDeckCounter == 4) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(belowDeckText[belowDeckCounter])
      .start();
      textBoxClicked = 1;
      belowDeckCounter++;
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
    //belowDeckCounter = -2; //-2 means that this sequence has been done.
    characterNameDisplay.textContent = '';
    leftChoiceBox1.textContent = "Stay calm, you are ok";
    rightChoiceBox1.textContent = "Fire a cannon at it";
    removeHidden(leftChoiceBox1);
    removeHidden(rightChoiceBox1);
  }
}

function stayCalmSequence(){
  if (stayCalmCounter <= 3){
    changeDisplay('./Pictures/Backgrounds/kraken.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (stayCalmCounter == 0) {
      characterNameDisplay.textContent = "";
    } else if (stayCalmCounter == 1) {
      characterNameDisplay.textContent = "Kraken";
    } else if (stayCalmCounter == 3) {
      characterNameDisplay.textContent = "";
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(stayCalmText[stayCalmCounter])
      .start();
      textBoxClicked = 1;
      stayCalmCounter++;
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
    //stayCalmCounter = -2; //-2 means that this sequence has been done.
    characterNameDisplay.textContent = '';
    leftChoiceBox1.textContent = "Take the kraken with you";
    rightChoiceBox1.textContent = "Leave the kraken, you hate sea animals";
    removeHidden(leftChoiceBox1);
    removeHidden(rightChoiceBox1);
  }
}

function takeOcto1Sequence(){
  if (takeOcto1Counter <= 4){
    changeDisplay('./Pictures/Backgrounds/kraken.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (takeOcto1Counter == 0) {
      characterNameDisplay.textContent = playerName;
    } else if (takeOcto1Counter == 1) {
      characterNameDisplay.textContent = "Kraken";
    } else if (takeOcto1Counter == 2) {
      characterNameDisplay.textContent = "";
    } else if (takeOcto1Counter == 3) {
      characterNameDisplay.textContent = "kraken Junior";
    } else if (takeOcto1Counter == 4) {
      characterNameDisplay.textContent = "";
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(takeOcto1Text[takeOcto1Counter])
      .start();
      textBoxClicked = 1;
      takeOcto1Counter++;
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
    squidItem = 1;
    octoItemContainer.src = './Pictures/items/OctoItem.png';
    textBoxClicked = 0;
    takeOcto1Counter = -2; //-2 means that this sequence has been done.
    pirateStartCounter = 0;
  }
}

function leaveOcto1Sequence(){
  if (leaveOcto1Counter <= 2){
    changeDisplay('./Pictures/Backgrounds/kraken.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (leaveOcto1Counter == 0) {
      characterNameDisplay.textContent = playerName;
    } else if (leaveOcto1Counter == 1) {
      characterNameDisplay.textContent = "Kraken";
    } else if (leaveOcto1Counter == 2) {
      characterNameDisplay.textContent = "";
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(leaveOcto1Text[leaveOcto1Counter])
      .start();
      textBoxClicked = 1;
      leaveOcto1Counter++;
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
    leaveOcto1Counter = -2; //-2 means that this sequence has been done.
    pirateStartCounter = 0;
  }
}

function fireCannonSequence(){
  if (fireCannonCounter <= 6){
    changeDisplay('./Pictures/Backgrounds/KrakenAttack.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (fireCannonCounter == 0) {
      characterNameDisplay.textContent = "";
    } else if (fireCannonCounter == 1) {
      characterNameDisplay.textContent = playerName;
    } else if (fireCannonCounter == 2) {
      characterNameDisplay.textContent = "";
    } else if (fireCannonCounter == 4) {
      characterNameDisplay.textContent = "kraken";
      changeDisplay('./Pictures/Backgrounds/crushedship.png');
    } else if (fireCannonCounter == 6) {
      characterNameDisplay.textContent = "";
    }

    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(fireCannonText[fireCannonCounter])
      .start();
      textBoxClicked = 1;
      fireCannonCounter++;
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
    fireCannonCounter = -2; //-2 means that this sequence has been done.
    changeDisplay('./Pictures/Backgrounds/GameOver.png');
    changeBars("#5c4944");
  }
} //end the game

function aboveDeckSequence(){
  if (aboveDeckCounter <= 3){
    changeDisplay('./Pictures/Backgrounds/bedroom.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (aboveDeckCounter == 0) {
      characterNameDisplay.textContent = "";
    } else if (aboveDeckCounter == 1) {
      characterNameDisplay.textContent = "kraken";
    } else if (aboveDeckCounter == 2) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(aboveDeckText[aboveDeckCounter])
      .start();
      textBoxClicked = 1;
      aboveDeckCounter++;
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
    //aboveDeckCounter = -2; //-2 means that this sequence has been done.
    characterNameDisplay.textContent = '';
    leftChoiceBox1.textContent = "Take the kraken with you";
    rightChoiceBox1.textContent = "Leave the kraken";
    removeHidden(leftChoiceBox1);
    removeHidden(rightChoiceBox1);
  }
}

function bringOctoSequence(){
  if (bringOctoCounter <= 4){
    changeDisplay('./Pictures/Backgrounds/bedroom.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (bringOctoCounter == 0) {
      characterNameDisplay.textContent = playerName;
    } else if (bringOctoCounter == 1) {
      characterNameDisplay.textContent = "kraken";
    } else if (bringOctoCounter == 2) {
      characterNameDisplay.textContent = "";
    } else if (bringOctoCounter == 3) {
      characterNameDisplay.textContent = "Kraken Junior";
    } else if (bringOctoCounter == 4) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(bringOctoText[bringOctoCounter])
      .start();
      textBoxClicked = 1;
      bringOctoCounter++;
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
    squidItem = 1;
    octoItemContainer.src = './Pictures/items/OctoItem.png';
    textBoxClicked = 0;
    bringOctoCounter = -2; //-2 means that this sequence has been done.
    pirateStartCounter = 0;
  }
}

function leaveOctoSequence(){
  if (leaveOctoCounter <= 2){
    changeDisplay('./Pictures/Backgrounds/bedroom.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (leaveOctoCounter == 0) {
      characterNameDisplay.textContent = "";
    } else if (leaveOctoCounter == 1) {
      characterNameDisplay.textContent = "kraken";
    } else if (leaveOctoCounter == 2) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(leaveOctoText[leaveOctoCounter])
      .start();
      textBoxClicked = 1;
      leaveOctoCounter++;
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
    leaveOctoCounter = -2; //-2 means that this sequence has been done.
    pirateStartCounter = 0;
  }
}

function pirateStartSequence(){
  if (pirateStartCounter <= 3){
    changeDisplay('./Pictures/Backgrounds/piratebase.png');
    changeBars("#5c4944");
    characterNameDisplay.textContent = "";

    if (pirateStartCounter == 0) {
      characterNameDisplay.textContent = "";
    } else if (pirateStartCounter == 1) {
      characterNameDisplay.textContent = "Capn' Rufus";
    } else if (pirateStartCounter == 2) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(pirateStartText[pirateStartCounter])
      .start();
      textBoxClicked = 1;
      pirateStartCounter++;
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
    //pirateStartCounter = -2; //-2 means that this sequence has been done.
    characterNameDisplay.textContent = '';
    leftChoiceBox1.textContent = "Enough waiting. Attack!";
    rightChoiceBox1.textContent = "Sneak in at nightfall";
    removeHidden(leftChoiceBox1);
    removeHidden(rightChoiceBox1);
  }
}

function directAttackSequence(){
  if (directAttackCounter <= 10){
    characterNameDisplay.textContent = "";

    if (directAttackCounter == 0) {
      characterNameDisplay.textContent = "";
    } else if (directAttackCounter == 1) {
      characterNameDisplay.textContent = "Capn' Rufus";
    } else if (directAttackCounter == 2) {
      changeDisplay('./Pictures/Backgrounds/cannonballs.png');
      characterNameDisplay.textContent = "";
    } else if (directAttackCounter == 6) {
      characterNameDisplay.textContent = "Capn' Rufus";
    } else if (directAttackCounter == 7) {
      characterNameDisplay.textContent = "";
    } else if (directAttackCounter == 9) {
      characterNameDisplay.textContent = playerName;
    } else if (directAttackCounter == 10) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(directAttackText[directAttackCounter])
      .start();
      textBoxClicked = 1;
      directAttackCounter++;
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
    directAttackCounter = -2; //-2 means that this sequence has been done.
    changeDisplay('./Pictures/Backgrounds/GameOver.png');
    changeBars("#5c4944");
  }
}

function sneakInSequence(){
  if (sneakInCounter <= 9){
    characterNameDisplay.textContent = "";

    if (sneakInCounter == 0) {
      characterNameDisplay.textContent = "";
    } else if (sneakInCounter == 4) {
      characterNameDisplay.textContent = playerName;
    } else if (sneakInCounter == 5) {
      characterNameDisplay.textContent = "";
    }else if (sneakInCounter == 6) {
      characterNameDisplay.textContent = "";
      changeDisplay('./Pictures/Backgrounds/fireworks.png');
    } else if (sneakInCounter == 7) {
      characterNameDisplay.textContent = "Capn' Rufus";
    } else if (sneakInCounter == 8) {
      characterNameDisplay.textContent = playerName;
    } else if (sneakInCounter == 9) {
      characterNameDisplay.textContent = "";
    }
    if (textBoxClicked == 0) {
      typewriter
      .changeDelay(customTextSpeed)
      .typeString(sneakInText[sneakInCounter])
      .start();
      textBoxClicked = 1;
      sneakInCounter++;
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
    sneakInCounter = -2; //-2 means that this sequence has been done.
    tavernHubCounter = 0;
    tavernHubAgain = 1;
    octoRoute = 1;
  }
}

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
    //console.log('introSequence');
    introSequence();
    return;
  }
  //Intro bad end handling
  if ( (introBadEndCounter != -1) && (introBadEndCounter != -2) ) {
    //console.log('introBadEndSequence');
    introBadEndSequence();
  }
//Sewer handling:
  //sewer intro handling
  if ( (sewerIntroCounter != -1) && (sewerIntroCounter != -2) ) {
    //console.log('sewerIntroSequence');
    sewerIntroSequence();
  }
  //sewer options handling after intro.
  if( (sewerGrob1Counter != -1) && (sewerGrob1Counter != -2) && (tavernHubCounter != -2) ) {
    //console.log('sewerGrob1');
    sewerGrob1();
  }
  if( (sewerGrob2Counter != -1) && (sewerGrob2Counter != -2) && (tavernHubCounter != -2) ) {
    //console.log('sewerGrob2');
    sewerGrob2();
  }
  if( (sewerGrob3Counter != -1) && (sewerGrob3Counter != -2)  && (tavernHubCounter != -2) ) {
    //console.log('sewerGrob3');
    sewerGrob3();
  }
//Tavern stuff:
  if( (tavernIntroCounter != -1) && (tavernIntroCounter != -2) ) {
    //console.log('tavernIntroSequence');
    tavernIntroSequence();
  }
  //Tavern Hub:
  if( (tavernHubCounter != -1) && (tavernHubCounter !=-2) ) {
    //console.log('taverHubSequence');
    taverHubSequence();
  }

//Pilz route stuff:
  if( (forestIntroCounter != -1) && (forestIntroCounter !=-2) ) {
    //console.log('forestIntroSequence');
    forestIntroSequence();
  }
  if( (forestHillCounter != -1) && (forestHillCounter !=-2) ) {
    //console.log('forestHillSequence');
    forestHillSequence();
  }
  if( (forestCreekCounter != -1) && (forestCreekCounter !=-2) ) {
    //console.log('forestCreekSequence');
    forestCreekSequence();
  }
  if( (forestCaveNightCounter != -1) && (forestCaveNightCounter !=-2) ) {
    //console.log('forestCaveNightSequence');
    forestCaveNightSequence();
  }
  if( (forestWoodsNightCounter != -1) && (forestWoodsNightCounter !=-2) ) {
    //console.log('forestWoodsNightSequence');
    forestWoodsNightSequence();
  }
  if( (forestCaveEat1Counter != -1) && (forestCaveEat1Counter !=-2) ) {
    //console.log('forestCaveEat1Counte');
    forestCaveEat1Sequence();
  }
  if( (forestCaveEscapeCounter != -1) && (forestCaveEscapeCounter !=-2) ) {
    //console.log('forestCaveEat1Counte');
    forestCaveEscapeSequence();
  }
  if( (forestCaveEat2Counter != -1) && (forestCaveEat2Counter !=-2) ) {
    //console.log('forestCaveEat1Counte');
    forestCaveEat2Sequence();
  }
  if( (forestCaveAbandonCounter != -1) && (forestCaveAbandonCounter !=-2) ) {
    //console.log('forestCaveEat1Counte');
    forestCaveAbandonSequence();
  }
  if( (forestCaveDistract1Counter != -1) && (forestCaveDistract1Counter !=-2) ) {
    //console.log('forestCaveEat1Counte');
    forestCaveDistract1Sequence();
  }
  if( (forestCaveDistract2Counter != -1) && (forestCaveDistract2Counter !=-2) ) {
    //console.log('forestCaveEat1Counte');
    forestCaveDistract2Sequence();
  }
  if( (forestCaveEat3Counter != -1) && (forestCaveEat3Counter !=-2) ) {
    //console.log('forestCaveEat1Counte');
    forestCaveEat3Sequence();
  }
  if( (forestCaveFriendshipCounter != -1) && (forestCaveFriendshipCounter !=-2) ) {
    //console.log('forestCaveEat1Counte');
    forestCaveFriendshipSequence();
  }

//Wick route stuff here
  if( (wickIntroCounter != -1) && (wickIntroCounter != -2) ) {
    wickRouteIntro();
  }
  if( (wickBase1Counter != -1) && (wickBase1Counter != -2) ) {
    wickBase1Encounter();
  }
  if( (wickBase2Counter != -1) && (wickBase2Counter != -2) ) {
    wickBase2Encounter();
  }
  if( (wickBase3Bad1Counter != -1) && (wickBase3Bad1Counter != -2) ) {
    wickBase3Bad1End();
  }
  if( (wickBase3Bad2Counter != -1) && (wickBase3Bad2Counter != -2) ) {
    wickBase3Bad2End();
  }
  if( (wickBase3PassCounter != -1) && (wickBase3PassCounter != -2) ) {
    wickBase3PassEncounter();
  }
  if( (wickIgnoredCounter != -1) && (wickIgnoredCounter != -2) ) {
    wickIgnoreEnd();
  }
  if( (wickSavedCounter != -1) && (wickSavedCounter != -2) ) {
    wickSavedEncounter();
  }
  if( (avalancheCounter != -1) && (avalancheCounter != -2) ) {
    wickAvalancheResponse();
  }
  if( (avalancheDigCounter != -1) && (avalancheDigCounter != -2) ) {
    wickAvalancheResponseDig();
  }
  if( (exploreCavesCounter != -1) && (exploreCavesCounter != -2) ) {
    wickAvalancheResponseExplore();
  }
  if( (wickFireCounter != -1) && (wickFireCounter != -2) ) {
    wickLightFire();
  }
  if( (wickClownStabCounter != -1) && (wickClownStabCounter != -2) ) {
    wickTurnBack();
  }
  if( (wickClownHornCounter != -1) && (wickClownHornCounter != -2) ) {
    wickHonkBack();
  }
  if( (wickApproachClownCounter != -1) && (wickApproachClownCounter != -2) ) {
    wickApproachClownEnd();
  }
  if( (wickGiveHornWCounter != -1) && (wickGiveHornWCounter != -2) ) {
    wickGiveHornWick();
  }
  if( (wickGiveHornCCounter != -1) && (wickGiveHornCCounter != -2) ) {
    wickGiveHornClown();
  }
  if( (wickClownSatisfiedCounter != -1) && (wickClownSatisfiedCounter != -2) ) {
    wickClownSatisfiedEvent();
  }
  if( (wickConversationKillerCounter != -1) && (wickConversationKillerCounter != -2) ) {
    wickConversationKillerEnd();
  }
  if( (wickRudeDismissalCounter != -1) && (wickRudeDismissalCounter != -2) ) {
    wickRudeEnd();
  }
  if( (wickExplainQuestCounter != -1) && (wickExplainQuestCounter != -2) ) {
    wickExplainQuestEvent();
  }
  if( (wickAcceptFriendCounter != -1) && (wickAcceptFriendCounter != -2) ) {
    wickAcceptFriendEvent();
  }
  if( (wickSpookyCounter != -1) && (wickSpookyCounter != -2) ) {
    wickSpookyEvent();
  }
  if( (wickSplitCounter != -1) && (wickSplitCounter != -2) ) {
    wickSplitEvent();
  }
  if( (wickGoBackCounter != -1) && (wickGoBackCounter != -2) ) {
    wickGoBackEvent();
  }
  if( (wickGoDownNormalCounter != -1) && (wickGoDownNormalCounter != -2) ) {
    wickHikeEnd();
  }
  if( (wickRollCounter != -1) && (wickRollCounter != -2) ) {
    wickRollEnd();
  }
  if( (wickSnowBoardCounter != -1) && (wickSnowBoardCounter != -2) ) {
    wickSnowboardEnd();
  }
  if( (wickSnowBoardBadCounter != -1) && (wickSnowBoardBadCounter != -2) ) {
    wickSnowBoardBadEnd();
  }


  //************************************* seastuff *************************************//
if( (seaIntroCounter != -1) && (seaIntroCounter !=-2) ) {
  oceanStartSequence();
}
if( (belowDeckCounter != -1) && (belowDeckCounter !=-2) ) {
  belowDeckSequence();
}
if( (stayCalmCounter != -1) && (stayCalmCounter !=-2) ) {
  stayCalmSequence();
}
if( (takeOcto1Counter != -1) && (takeOcto1Counter !=-2) ) {
  takeOcto1Sequence();
}
if( (leaveOcto1Counter != -1) && (leaveOcto1Counter !=-2) ) {
  leaveOcto1Sequence();
}
if( (fireCannonCounter != -1) && (fireCannonCounter !=-2) ) {
  fireCannonSequence();
}
if( (aboveDeckCounter != -1) && (aboveDeckCounter !=-2) ) {
  aboveDeckSequence();
}
if( (bringOctoCounter != -1) && (bringOctoCounter !=-2) ) {
  bringOctoSequence();
}
if( (leaveOctoCounter != -1) && (leaveOctoCounter !=-2) ) {
  leaveOctoSequence();
}
if( (pirateStartCounter != -1) && (pirateStartCounter !=-2) ) {
  pirateStartSequence();
}
if( (directAttackCounter != -1) && (directAttackCounter !=-2) ) {
  directAttackSequence();
}
if( (sneakInCounter != -1) && (sneakInCounter !=-2) ) {
  sneakInSequence();
}

//DOOR STUFF ******************************************************************
if( (doorIntroCounter != -1) && (doorIntroCounter !=-2) ) {
  doorIntroSequence();
}
if( (doorReturnCounter != -1) && (doorReturnCounter !=-2) ) {
  doorReturnSequence();
}
if( (doorInsideCounter != -1) && (doorInsideCounter !=-2) ) {
  doorInsideSequence();
}
if( (doorGrobFailCounter != -1) && (doorGrobFailCounter !=-2) ) {
  doorGrobFailSequence();
}
if( (doorGrobWinCounter != -1) && (doorGrobWinCounter !=-2) ) {
  doorGrobWinSequence();
}
if( (doorArchersDieCounter != -1) && (doorArchersDieCounter !=-2) ) {
  doorArchersDieSequence();
}
if( (doorArchersDistractCounter != -1) && (doorArchersDistractCounter !=-2) ) {
  doorArchersDistractSequence();
}
if( (doorArchersOctoCounter != -1) && (doorArchersOctoCounter !=-2) ) {
  doorArchersOctoSequence();
}
if( (doorBridgeTrollCounter != -1) && (doorBridgeTrollCounter !=-2) ) {
  doorBridgeTrollSequence();
}
if( (doorBridgeDieCounter != -1) && (doorBridgeDieCounter !=-2) ) {
  doorBridgeDieSequence();
}
if( (doorBridgeSacrificeCounter != -1) && (doorBridgeSacrificeCounter !=-2) ) {
  doorBridgeSacrificeSequence();
}
if( (doorBridgeWickCounter != -1) && (doorBridgeWickCounter !=-2) ) {
  doorBridgeWickSequence();
}
if( (doorCakeCanyonCounter != -1) && (doorCakeCanyonCounter !=-2) ) {
  doorCakeCanyonSequence();
}
if( (doorCakeCanyonDieCounter != -1) && (doorCakeCanyonDieCounter !=-2) ) {
  doorCakeCanyonDieSequence();
}
if( (doorCakeCanyonSacrificeCounter != -1) && (doorCakeCanyonSacrificeCounter !=-2) ) {
  doorCakeCanyonSacrificeSequence();
}
if( (doorCakeCanyonPilzCounter != -1) && (doorCakeCanyonPilzCounter !=-2) ) {
  doorCakeCanyonPilzSequence();
}
if( (doorCakeCanyonEatPilzCounter != -1) && (doorCakeCanyonEatPilzCounter !=-2) ) {
  doorCakeCanyonEatPilzSequence();
}

if(doorJudgement == 1) {
  doorJudgementPicker();
}

if( (doorGoodEndingCounter != -1) && (doorGoodEndingCounter !=-2) ) {
  doorGoodEndingSequence();
}
if( (doorNeutralEndingCounter != -1) && (doorNeutralEndingCounter !=-2) ) {
  doorNeutralEndingSequence();
}
if( (doorBadEndingCounter != -1) && (doorBadEndingCounter !=-2) ) {
  doorBadEndingSequence();
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
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 1) ) {
    seaIntroCounter = 0;
    tavernHubAgain = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
  if( (forestIntroCounter >=9) ) {
    forestIntroCounter = -2;
    forestHillCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if( (forestHillCounter >= 9) ) {
    forestHillCounter = -2;
    forestCaveNightCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if( (forestCaveNightCounter >= 30) ) {
    forestCaveNightCounter = -2;
    forestCaveEat1Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if( (forestCaveEscapeCounter >= 11) ) {
    forestCaveEscapeCounter= -2;
    forestCaveEat2Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if( (forestCaveDistract2Counter >= 23) ) {
    forestCaveDistract2Counter= -2;
    forestCaveEat3Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }

//Wick route starts here
  //Hike up anyway.
  if( (wickIntroCounter >= 9) ) {
    wickIntroCounter = -2;
    wickBase1Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);

  }

  //Ignore, no time.
  if( (wickBase3PassCounter >= 4) ) {
    wickBase3PassCounter = -2;
    wickIgnoredCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }

  //Just dig out. Easy peasy.
  if( (avalancheCounter >= 4) ) {
    avalancheCounter = -2;
    avalancheDigCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    avalancheCounter = -2;
  }

  //Turn back, return to camp.
  if( (exploreCavesCounter >= 15) ) {
    exploreCavesCounter = -2;
    wickClownStabCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Approach the clown(?).
  if( (wickClownHornCounter >= 7) ) {
    wickClownHornCounter = -2;
    wickApproachClownCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Wow Wick sounds dumb.
  if( (wickClownSatisfiedCounter >= 10) ) {
    wickClownSatisfiedCounter = -2;
    wickRudeDismissalCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Additional compantionship!
  if( (wickExplainQuestCounter >= 7) ) {
    wickExplainQuestCounter = -2;
    wickAcceptFriendCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Go down normally and hike.
  if( (wickGoBackCounter >= 1) ) {
    wickGoBackCounter = -2;
    wickGoDownNormalCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  //Wick route ends here


  //************************************* seastuff *************************************//
  if ( (seaIntroCounter >= 7) /*&& (aboveDeckCounter == -1)*/) {
    aboveDeckCounter = 0;
    seaIntroCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  if ( (aboveDeckCounter >= 3) /*&& (bringOctoCounter == -1)*/) {
    bringOctoCounter = 0;
    aboveDeckCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  if ( (belowDeckCounter >= 4) /*&& (fireCannonCounter == -1)*/) {
    stayCalmCounter = 0;
    belowDeckCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  if ( (stayCalmCounter >= 3) /*&& (fireCannonCounter == -1)*/) {
    takeOcto1Counter = 0;
    stayCalmCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  if ( (pirateStartCounter >= 3) /*&& (directAttackCounter == -1)*/) {
    directAttackCounter = 0;
    pirateStartCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  //Door Stuff *******************************************************
  if ( (doorIntroCounter >= 7) ) {
    doorInsideCounter = 0;
    doorIntroCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if ( (doorInsideCounter >= 7) ) {
    doorGrobFailCounter = 0;
    doorInsideCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if ( (doorGrobWinCounter >= 16) ) {
    doorArchersDieCounter = 0;
    doorGrobWinCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if ( (doorBridgeTrollCounter >= 18) ) {
    doorBridgeDieCounter = 0;
    doorBridgeTrollCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if ( (doorCakeCanyonCounter >= 5) ) {
    doorCakeCanyonDieCounter = 0;
    doorCakeCanyonCounter = -2;
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
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 1) ) {
    wickIntroCounter = 0;
    tavernHubAgain = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
  if( (forestIntroCounter >=9) ) {
    forestIntroCounter = -2;
    forestCreekCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }

  if( (forestHillCounter >= 9) ) {
    forestHillCounter = -2;
    forestWoodsNightCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if( (forestCaveNightCounter >= 30) ) {
    forestCaveNightCounter = -2;
    forestCaveEscapeCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if( (forestCaveEscapeCounter >= 11) ) {
    forestCaveEscapeCounter= -2;
    forestCaveAbandonCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if( (forestCaveDistract2Counter >= 23) ) {
    forestCaveDistract2Counter= -2;
    forestCaveFriendshipCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }

//Wick route starts here
  //Look for shelter
  if( (wickIntroCounter >= 9) ) {
    wickIntroCounter = -2;
    wickBase2Counter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Rescue, make time.
  if( (wickBase3PassCounter >= 4) ) {
    wickBase3PassCounter = -2;
    wickSavedCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }

  //Exploring sounds good.
  if( (avalancheCounter >= 4) ) {
    avalancheCounter = -2;
    exploreCavesCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    avalancheCounter = -2;
  }

  //Light Wick on fire.
  if( (exploreCavesCounter >= 15) ) {
    exploreCavesCounter = -2;
    wickFireCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Give Wick another horn.
  if( (wickClownHornCounter >= 7) ) {
    wickClownHornCounter = -2;
    wickGiveHornWCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Explain your noble quest.
  if( (wickClownSatisfiedCounter >= 10) ) {
    wickClownSatisfiedCounter = -2;
    wickExplainQuestCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //You're too spooky...
  if( (wickExplainQuestCounter >= 7) ) {
    wickExplainQuestCounter = -2;
    wickSpookyCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Roll down as a snowball.
  if( (wickGoBackCounter >= 1) ) {
    wickGoBackCounter = -2;
    wickRollCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  //Wick route ends here

  //************************************* seastuff *************************************//
  if ( (seaIntroCounter >=7) /*&& (belowDeckCounter == -1)*/) {
    seaIntroCounter = -2;
    belowDeckCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  if ( (belowDeckCounter >= 4) /*&& (fireCannonCounter == -1)*/) {
    fireCannonCounter = 0;
    belowDeckCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  if ( (aboveDeckCounter >= 3) /*&& (bringOctoCounter == -1)*/) {
    leaveOctoCounter = 0;
    aboveDeckCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  if ( (stayCalmCounter >= 3) /*&& (fireCannonCounter == -1)*/) {
    leaveOcto1Counter = 0;
    stayCalmCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }


  if ( (pirateStartCounter >= 3) /*&& (sneakInCounter == -1)*/) {
    sneakInCounter = 0;
    pirateStartCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  //Door Stuff *******************************************************
  if ( (doorIntroCounter >= 1) /*&& (directAttackCounter == -1)*/) {
    doorReturnCounter = 0;
    doorIntroCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if ( (doorInsideCounter >= 7) /*&& (directAttackCounter == -1)*/) {
    doorGrobWinCounter = 0;
    doorInsideCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
  }
  if ( (doorGrobWinCounter >= 16) ) {
    doorArchersDistractCounter = 0;
    doorGrobWinCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if ( (doorBridgeTrollCounter >= 18) ) {
    doorBridgeSacrificeCounter = 0;
    doorBridgeTrollCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if ( (doorCakeCanyonCounter >= 5) ) {
    doorCakeCanyonSacrificeCounter = 0;
    doorCakeCanyonCounter = -2;
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
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 1) ) {
    forestIntroCounter = 0;
    tavernHubAgain = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
  if( (forestCaveEscapeCounter >= 11) ) {
    forestCaveEscapeCounter= -2;

    let friendshipCount = (grobItem + wickItem + pilzItem + squidItem);
    if(friendshipCount == 0) {
      forestCaveDistract1Counter = 0;
    } else {
      forestCaveDistract2Counter = 0;
    }

    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }



  //Wick route starts here
  //Huddle for warmth.
  if( (wickIntroCounter >= 9) ) {
    wickIntroCounter = -2;
    let friendCount = (grobItem + pilzItem + wickItem + squidItem)
    if (friendCount == 0) {
      wickBase3Bad1Counter = 0;
    }
    else if (friendCount == 1) {
      wickBase3Bad2Counter = 0;
    }
    else if (friendCount >= 2) {
      wickBase3PassCounter = 0;
    }
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Honk back, return to honk.
  if( (exploreCavesCounter >= 15) ) {
    exploreCavesCounter = -2;
    wickClownHornCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Give clown(?) your horn.
  if( (wickClownHornCounter >= 7) ) {
    wickClownHornCounter = -2;
    wickGiveHornCCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Keep your reasons secret...
  if( (wickClownSatisfiedCounter >= 10) ) {
    wickClownSatisfiedCounter = -2;
    wickConversationKillerCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //We should split up.
  if( (wickExplainQuestCounter >= 7) ) {
    wickExplainQuestCounter = -2;
    wickSplitCounter = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }

  //Use the power of your companions.
  if( (wickGoBackCounter >= 1) ) {
    wickGoBackCounter = -2;
    wickSnowBoardCounter = 0;
    let friendCount = (grobItem + pilzItem + wickItem + squidItem)
    if (friendCount == 0) {
      wickSnowBoardBadCounter = 0;
    }
    else if (friendCount >= 1) {
      wickSnowBoardCounter = 0;
    }
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  //Wick route ends here

  //Door Stuff *****************************************************************
  if ( (doorGrobWinCounter >= 16) ) {
    doorArchersOctoCounter = 0;
    doorGrobWinCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if ( (doorBridgeTrollCounter >= 18) ) {
    doorBridgeWickCounter = 0;
    doorBridgeTrollCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
  }
  if ( (doorCakeCanyonCounter >= 5) ) {
    doorCakeCanyonPilzCounter = 0;
    doorCakeCanyonCounter = -2;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
});

rightChoiceBox2.addEventListener('click', ()=> {
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 1) ) {
    doorIntroCounter = 0;
    tavernHubAgain = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }
  if ( (doorCakeCanyonCounter >= 5) ) {
    doorCakeCanyonEatPilzCounter = 0;
    doorCakeCanyonCounter = -2;
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
    //characterNames[1] = playerName;
    console.log('Player name set to: ', playerName);
  }

  if( textSpeed.value != '' ) {
    customTextSpeed = textSpeed.value;
    console.log('Text Speed set to: ', customTextSpeed);
  }
});
