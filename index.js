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
      removeHidden(leftChoiceBox1);
      removeHidden(rightChoiceBox1);
      if(pilzRoute == 0) {
        removeHidden(leftChoiceBox2);
      }
      removeHidden(rightChoiceBox2);
      //tavernHubAgain = 0;
    }
  }

//************Intro functions ends here******************************************************************************************************************************************************************************************


//************Door functions start here******************************************************************************************************************************************************************************************

//************Door functions end here******************************************************************************************************************************************************************************************


//************Wick functions start here******************************************************************************************************************************************************************************************

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
    mountainsIntroCounter = 0;
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
