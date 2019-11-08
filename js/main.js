let colours = ['orange', 'blue', 'red', 'teal', 'green', 'brown', 'black'];
let activeColour = colours[Math.floor(Math.random()*colours.length)];
let bodyDom = document.getElementsByTagName('body')[0];
bodyDom.classList.add(activeColour);