const { captureOwnerStack } = require("react");

console.log("Running script.js")
console.log("Hello world, welcome to my mini cafe!")

const ietms = [
    {name: "Fruit Cakes",Price:5},
    {name: "Fruit Tart ",Price:3},
    {name: "Creamy lamb pasta ",Price:20},
    {name:"Dumpling Soup", Price:25},
    {name:"Orange refresher",Price:15},
    {name:"Strawberry Lemonade",Price:18},

]

let order = [];
let totalPrice = 0;


function addOrder(foodName,foodPrice){
    let food ={name:foodName, price: foodPrice};
    order.push(food);
    totalPrice = totalPrice + food.price;
    document.getElementByI("")







}