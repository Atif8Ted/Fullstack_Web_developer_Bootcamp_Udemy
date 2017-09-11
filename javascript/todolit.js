var todos=[];
var input=prompt("What you would like to do ");
if(input=="list"){
	console.log(todos);
}
else if (input=="new")
{
	var newToDo=prompt("Enter a todo ");
	todos.push(newToDo);
}
while(input!=="quit"){
	if(input=="list"){
	console.log(todos);
}
else if (input=="new")
{
	var newToDo=prompt("Enter a todo ");
	todos.push(newToDo);
}

var input=prompt("What you would like to do ");

}
console.log("You quit the app");