// JS Stuff Here
//Variables
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
  typewriter
  .typeString(temporaryText)
  .start();
})
