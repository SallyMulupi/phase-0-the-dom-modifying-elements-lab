// Write your code here!
const body = document.querySelector('body')
body.removeChild(document.querySelector('#main'));

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'Sally is the champion in coding';
body.appendChild(newHeader);