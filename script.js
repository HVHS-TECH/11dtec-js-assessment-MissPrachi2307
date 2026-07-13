/***Variables */
var userName;

console.log("Hello world, welcome to my mini cafe!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");


function getFormInput(){
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p> Your name is " + userName + "</p>";
   