// select empty div and assign a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put an h1 inside of myEmptyDiv
const heading = document.createElement('h1');
heading.innerHTML = 'Save the drama for your llama';
// make cursor a pointer when hovering over heading
heading.style.cursor = 'pointer';
// add event listener to perform handleHeadingClick funciton when clicked
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);
function handleHeadingClick() {
  document.body.style.backgroundColor = 'orange';
  document.body.style.color = 'white';
}
