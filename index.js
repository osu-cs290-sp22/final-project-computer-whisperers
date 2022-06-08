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
  "The environment inside is a mess with outside flora taking over parts of the buildings interior.", //2 - inside background
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
var doorArchersOctorText = [ //Have Octo create a blind spot (inks himself)
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

var doorBirdgeTrollCounter = -1;
var doorbridgeTrollText = [
  "Taking a look at your new surroundings it appears that you are in some sort of chocolate swamp.",//0 -change to chocolate swamp 2/bridge BG
  "There is a bridge in front of you made out of Charles Chewsters that looks to lead in the right direction.",
  "So you continue your adventure along the bridge.",
  "As you were making your way across the bridge you notice a strange figure climbing up from the side.",
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
  "'HOOOOOO HEEEEEE!!!! I'm Excited to play this game!'",
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
  "...",
  //Player:
  "'Uhh, does that mean I win?'", //2
  //Clown:
  "'Nope!'", //3
  //No names
  "The clown dashes at you with lightning speed and knocking you to the ground.", //4
  "You can then feel the clown picking you up by the legs.",
  "You try to break free of his grasp, but your struggles are in vain.",
  "The clown brings you to the bottom of the bridge and dips you in the chocolate swamp, covering your whole body.", //7 - Black BG
  "...",
  "You are then added to the bridge to solidify to.",
  "You then feel the sugar poisioning setting in.",
  "Soon you feel nothing.",
  "[GAME OVER]" //12 - GAME OVER BG
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
  "You remembered that Wick has knowledge of the Funny Folk, maybe they would have the best idea of what the answer is?",
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
var doorCakeCanyon = [
  "After a very eager jog, you silently celebrate your newfound distance from the nearest Funny Fellow.",
  "Unfortunately this jog has led you to a sticky situation; A large cake canyon seems to be between you and forward progress.",
  "There seems to be a drawbridge for getting across, but its not in the ideal position as of now.",
  "If you squint you can see a lever on the other side, probably for letting down and pulling up the bridge you wish to cross.",
  "As confident as you are in your long arms, you dont think you can reach it from here.",
  "Looks like a different course of action will be required..."
];

var doorCakeCanyonSacrificeCounter = -1;
var doorCakeCanyonSacrifice = [
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
var doorCakeCanyonDie = [
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
var doorCakeCanyonPilz = [
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
var doorCakeCanyonEatPilz = [
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
  "You grab Pilz with both hands and do what comes naturally.",//9 Black Screen?
  "*Crunch* *Crunch* *Crunch*",
  "You suddenly feel much more full...",//10 Pilz Gone
  "But also empty.",
  "Pilz is now gone, but the impasse is still here.",
  "With your newfound full stomach, you leap towards the other end of the canyon.",
  "Unexpectedly, it seems like you are... bigger? Taller?",
  "Somehow you feel like you are making more distace across this canyon than you normally would.",
  "With a sudden thud, you find yourself on the other end of the canyon. You pull the lever so you can get back easily."//16 Bridge Down
]

var doorGoodEndingCounter = -1;
var doorGoodEnding = [
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
  "''",//16
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
var doorNeutralEnding = [
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
]
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
  "Just as you were about to head towards the cave to check it out, two massive snails slither our of the cave entrance.",  //14
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
  "After a couple days of travel, you arrive back at athe tavern." //34
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
  "'Sure! Thats sounds great! I havent seen a campfire in a long time. You see its kind fo hard for me to start fires on my own.'", //6
  "'OoooOoOOOoooooOOO! You know what would be fun?'", //7 - Pilz Normal BG
  "'Roasting marshmallows on the campfire! Oh darn I don't have ingredients for that though... Would you possibly the ingrediants?'",
  //Player:
  "'Oh uhmm, I do not. But I have another Idea of what we could roast.'", //9
  //Pilz:
  "'Oh my, oh good! I hope its something of your culture, my people used to love learning about other people's culture when we went on caravan runs.'", //10  - Pilz
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
  "After you are fully satiated you then leave the caves having failed to get information from the mushroom person who was carrying his dying race's legacy, you head bakc to the Tavern.",
  "After a couple days of travel, you arrive back at athe tavern." //24 -  tavern BG
];

var forestCaveEscapeCounter = -1;
var forestCaveEscapeText = [
  //Pilz:
  "'Oh thank you so much! My people will be able to live on their legacy and maybe reclaim their throne as wandering traders!'", //0 - Pilz Happy BG
  "'You've saved my kin!'", //1 Pilz Content BG
  //Player:
  "'Damn, I didn't know the entire future of your people rested on this decision, but I'd be glad to help out'", //2
  "'Right, so I'll lead the way back out. Hopefully I still remember the way out...'",
  //No name
  "Breaking camp you and your new found gang start on the journey out of the cave.",
  "There are several "
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
      if(pilzRoute == 0) {
        removeHidden(leftChoiceBox2);
      }
      if (wickRoute == 0)
      {
        removeHidden(rightChoiceBox1);
      }
      removeHidden(rightChoiceBox2);
      //tavernHubAgain = 0;
    }
  }
//************Intro functions ends here******************************************************************************************************************************************************************************************


//************Door functions start here******************************************************************************************************************************************************************************************

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
        changeBars('blue');
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
        changeBars('darkblue');
      }
      if(forestCaveNightCounter == 10) {
        characterNameDisplay.textContent = playerName;
      }
      if(forestCaveNightCounter == 12) {
        characterNameDisplay.textContent = '';
      }
      if(forestCaveNightCounter == 15) {
        changeDisplay('./pictures/backgrounds/CaveCampfire.png');
        changeDisplay('blue');
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
        changeDisplay('darkblue');
      }
      if (forestWoodsNightCounter == 7) {
        changeDisplay('./pictures/backgrounds/BlueForestPath.png');
        changeDisplay('blue');
      }
      if(forestWoodsNightCounter == 12) {
        changeDisplay('./pictures/backgrounds/BFCaveEntrance.png');
        changeDisplay('blue');
      }
      if(forestWoodsNightCounter == 18) {
        changeDisplay('./pictures/backgrounds/BFCaveEntranceSnails.png');
        changeDisplay('blue');
      }
      if(forestWoodsNightCounter == 23) {
        changeDisplay('./pictures/backgrounds/CaveCave.png');
        changeDisplay('darkblue');
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
    doorIntroCounter = 0;
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
});

rightChoiceBox2.addEventListener('click', ()=> {
  if ( (tavernHubCounter == -2) && (tavernHubAgain == 1) ) {
    seaIntroCounter = 0;
    tavernHubAgain = 0;
    addHidden(leftChoiceBox1);
    addHidden(rightChoiceBox1);
    addHidden(leftChoiceBox2);
    addHidden(rightChoiceBox2);
  }

  //Wick route starts here

  //Wick route ends here
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