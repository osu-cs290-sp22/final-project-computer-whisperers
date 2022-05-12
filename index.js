// JS Stuff Here
//Variables
var textBoxClicked = 0;

var textChat = document.getElementById('text-Chat');
var textBoxContainer = document.getElementById('text-Box');

var temporaryText = document.getElementById('text-Chat').textContent;

//Functions

//Code
var typewriter = new Typewriter(textChat, {
  loop: false,
  delay: 75,
});

textBoxContainer.addEventListener('click', ()=> {
  console.log(textBoxClicked);
  if (textBoxClicked == 0) {
    typewriter
    .changeDelay(25)
    .typeString(temporaryText)
    .start();
    textBoxClicked = 1;
  } else {
    //textChat.textContent='';
    //
    typewriter
    .changeDeleteSpeed(25) //Doesnt actually change delete speed for some reason?
    .deleteAll()
    .start();
    //
    textBoxClicked = 0;
  }
})
