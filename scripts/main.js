let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shiba-dreamstime.jpg') {
      myImage.setAttribute ('src','images/download.jpg');
    } else {
      myImage.setAttribute ('src','images/shiba-dreamstime.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'SHIBA INU, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'SHIBA INU, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}