//push and pop 
var colours=["red","yellow"];
colours.push("indigo");
colours.pop()

//shift and unshift --> add or remove in beginning of array

colours.unshift("infrared");
colours.shift();

//indexof
var friends=["Charlie","Liz","Peter","Liz"];
friends.indexOf("Liz");
friends.indexOf("Liz");
friends.indexOf("Swati");

//slice
var friends=["Charlie","Liz","Peter","Liz"];
var newArray=friends.slice(0,3);
var aa=friends.slice();


//---
undefined
var friends=["Charlie","Liz","Peter","Liz"];

undefined
var newArray=friends.slice(0,3);

undefined
newArray
(3) ["Charlie", "Liz", "Peter"]
var newArray=friends.slice(0,2);

undefined
newArray
(2) ["Charlie", "Liz"]
var aa=friends.slice();
undefined
aa
(4) ["Charlie", "Liz", "Peter", "Liz"]