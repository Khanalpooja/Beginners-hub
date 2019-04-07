var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/couple1.png') {
      myImage.setAttribute ('src','images/couple2.png');
    } else {
      myImage.setAttribute ('src','images/couple1.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1'); 

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'I love you, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'I love you',  + storedName;
}


myButton.onclick = function() {
  setUserName();
} 

