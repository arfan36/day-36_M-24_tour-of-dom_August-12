console.log('second file');

const secondList = document.getElementById('second-list');

// What to add
const li = document.createElement('li');
li.innerText = 'My dynamic item';

secondList.appendChild(li);

