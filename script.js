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
    document.getElementById("Order").innerHTML +="<p>" + foodName +"$" + foodPrice +"</p>";
    document.getElementById("Sum").innerHTML ="<h3>Total:$"+totalPrice+"<h3>";
}

function setOrder(){
    const userName =document.getElementById("nameFeild").value;
    const money = Number(document.getElementById("moneyFeild").value);

    if(userName == 0){
        document.getElementById("Receipt") .innerHTML="Please add item before placing order";
         return;
    }

    if(userName ==""){
        document.getElementById("Receipt") .innerHTML="Please enter your name";
        return;
    }

    if (money ==""){
        document.getElementById("Receipt") .innerHTML="Please enter money";
        return;
    }

    if(money < totalPrice){
        document.getElementById("Receipt") .innerHTML="Not enough money";
        return;

    }

    let change = moeny - totalPrice;
    let receiptOrder ="";
    
    for(let I = 0; I < order.length; I ++){
        receiptOrder += order[I].name +"$"+ order[I].price +"<br>";
    }

    document.getElementById("Receipt") .innerHTML= "<h3>Receipt</h3>" + "<p>Name:" + userName + "</p>"
    + "<h3>Total:$ " + totalPrice + "</h3>" + "<p> Money given:$" + money +"</p>" + "<p> Change:$" + change +"</p>";

    function resetOrder(){
        order = ;


    }




}








