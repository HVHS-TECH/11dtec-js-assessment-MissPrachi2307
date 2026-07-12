/***Variables */
var userName;

console.log("Hello world, welcome to my mini cafe!")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const PRODUCT_FIELD = document.getElementById("productField");
const AGE_FIELD = document.getElementById("AgeField");

function getFormInput(){
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p> Your name is " + userName + "</p>";
    let userProduct = PRODUCT_FIELD.value;
    OUTPUT.innerHTML += "<p> Your product is " + userProduct + "</p>";
    let userAge = AGE_FIELD.value;
    OUTPUT.innerHTML += "<p> Your age is " + userAge + "</p>";
    let userProductPrice = PRODUCT_PRICE_FIELD.value;
    OUTPUT.innerHTML += "<p> Your product price is $" + userProductPrice + "</p>";
}