var age;
age=Number(prompt("Enter your age "));
if(age<0)
{
	console.log("Age can't be negative");
}
if(age=="21"){
	console.log("Happy 21st birthday");
}
if(age%2!=0)
{
	console.log("Age is od");
}

if(age%Math.sqrt(age)==0)
{
	console.log("Your age is perfect square");
}