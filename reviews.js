//JS Stuff here

//Functions:
function createReview(body, author) {
  let today = new Date();
  let date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
  let time = today.getHours() + ":" + today.getMinutes();
  if( (today.getHours() >= 0) && (today.getHours() < 12) ) {
    time = time+" AM";
  }
  else {
    time = time+" PM";
  }
  console.log("Time of review creation: ", date, time);

  var newReview = Handlebars.templates.review( {
    date: date,
    time: time,
    body: body,
    author: author
  });

  //console.log('--New review: ', newReview);

  var reviewContainer = document.getElementById('review-container');
  //console.log('--Review Container: ', reviewContainer);
  reviewContainer.insertAdjacentHTML('beforeend', newReview);
}



//code:
/*
//Time testing:
let today = new Date();
let date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes();
if( (today.getHours() >= 0) && (today.getHours() < 12) ) {
  time = time+" AM";
}
else {
  time = time+" PM";
}
console.log(date, time);
*/


var bodyTextInput = document.getElementById('body-text-input');
var authorTextInput = document.getElementById('author-text-input');
var createReviewButton = document.getElementById('review-post-button');

createReviewButton.addEventListener('click', ()=> {
  //console.log('Button clicked!');
  if ( (bodyTextInput.value != '') && (authorTextInput.value != '') ) {
    createReview(bodyTextInput.value, authorTextInput.value);
    bodyTextInput.value = '';
    authorTextInput.value = '';
  }
  else {
    alert("ERROR || Content needed in both Body and Author of your *Review*!!!");
  }
});
