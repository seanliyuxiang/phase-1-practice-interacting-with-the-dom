let form = document.querySelector('form#comment-form');

form.addEventListener('submit', e => {
  // prevent submit event's default refreshing behavior
  e.preventDefault();
  
  // retrieve comment user typed in
  let userComment = e.target['comment-input'].value;  // userComment is a string
  
  // call addComment function to slap comment onto DOM
  addComment(userComment);

  // clear out comment user submitted
  form.reset();
});

function addComment(comment) {
  // create p tag to hold the comment
  let commentHTMLElement = document.createElement('p');

  // set p tag's text to comment
  commentHTMLElement.innerText = comment;

  // grab comments container div
  let commentsDiv = document.querySelector('#list');

  // append comment to comments container div
  commentsDiv.appendChild(commentHTMLElement);
}
