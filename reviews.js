//JS Stuff here

//Functions:
function createReview(body, author) {
  let today = new Date();
  let date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
  let time = today.getHours() + ":" + today.getMinutes();
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
let today = new Date();
let date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
let time = today.getHours() + ":" + today.getMinutes();
console.log(date, time);


var bodyTextInput = document.getElementById('body-text-input');
var authorTextInput = document.getElementById('author-text-input');
var createReviewButton = document.getElementById('review-post-button');

createReviewButton.addEventListener('click', ()=> {
  //console.log('Button clicked!');
  createReview(bodyTextInput.value, authorTextInput.value);
});
