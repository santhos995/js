/*let myHeading = document.querySelector('h1');
myHeading.textContent = "Changed title";
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let img = document.querySelector('img');
img.onclick = function()
{
    let src = img.getAttribute('src');
    if(src === "img/san.jpg")
    img.setAttribute('src', "img/img2.jpg");
    else
    img.setAttribute('src',"img/san.jpg");
}
*/
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setUserName(){
    let myName = prompt("pls enter user name");
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hi buddy, cool ' + myName;
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Updated from cache " + storedName;
}

myButton.onclick = function(){
    setUserName();
}