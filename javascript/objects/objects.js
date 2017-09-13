var person=["cindy",32,"Missoula"];
person[2];


//javascript object.

var person={
	name:"Cindy",
	age:32,
	city:"Missoula"
};
//******retreiving data******//
//bracket notation.
console.log(person["name"]);
//dot notation
console.log(person.name);


//***important 

// you can't use dot notation if the property starts with a number .

someObject.1blah ; //invalid
someObject["1blah"];//valid

var str ="name";
someObject[str];		
//you can't use dot notation for property names with spaces

someObject.fav color //Invalid
someObject["fav color"];

//***updating age ****///
var person={
	name:"Travis",
	age:21;
	city:"LA"
};
// to update age 
person["age"]+=1;

person.city="London";
person["city"]="Ahmedabad";


// creating object .

var person={}
person.name="Travis";
person.age=21;
person.city="LA";

//all at once

var person={
	name:"Travis",
	age:21,
	city:"LA"
};

//another way of initializing an object 

var person=new Object();

person.name="Travis";
person.age=21;
person.city="LA";
