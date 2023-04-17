function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;
}

var pizza1= pizzaOven("Deep Dish","Traditional", "Mozzarella", ["Pepperoni", "Sausage"]);
console.log(pizza1);

var pizza2= pizzaOven("Hand Tossed", "Marinara", ["Mozzarela" , "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3= pizzaOven("Cheese Crust", "Traditional", ["Mozzarella", "Catupiry"],["Broccoli", "Fried Garlic", "Bacon", "Oregano"]);
console.log(pizza3);

var pizza4= pizzaOven("Thin", "BBQ Sauce", "Mozzarela", ["Ham" , "Pinneaple"]);
console.log(pizza4);


var crustType = ["Deep Dish", "Hand Tossed", "Thin", "Stuffed", "Cheese Crust"];
var sauceType = ["Traditional", "Marinara", "BBQ sauce", "Alfredo"];
var cheeses = ["Mozzarella", "Feta", "Cheddar", "Provolone", "Blue Cheese", "Parmesan", "Catupiry"];
var toppings = ["Pepperoni", "Sausage", "Mushrooms", "Olives", "Onions", "Broccoli", "Fried Garlic", "Bacon", "Oregano", "Ham", "Pinneaple"];

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza(){
    var pizza ={};
    pizza.crustType = randomPick(crustType);
    pizza.sauceType = randomPick(sauceType);
    pizza.cheeses = randomPick(cheeses);
    pizza.toppings = randomPick(toppings);
    return pizza;
} 

console.log(randomPizza());