//iseven()
function isEven(num){
if(num%2==0){
	return true;
}
return false;
}

isEven(4);
isEven(3);

//factorial

function factorial(num){
	
	if(num>1){
		return num*factorial(num-1);
	}
	else
	{
		return 1;
	}
}

factorial(0);

//factorial 2
function factorial(num){
	var fact =1;
	if(num==0||num==1){
		return 1;
	}
	while(num>0){
	fact=	fact*num;
		num=num-1;
	}
	return fact;
}

factorial(3);

//kebabToSnake()

function kebabToSnake(string){
for(i=0;i<string.length;i++)
{
	if(string[i]=="-"){
		console.log("found");
		string[i]="_";
		console.log(string[i]);
	}

}
return string;
}
kebabToSnake("Hello-world");


//
function kebabToSnake(string){
string=string.replace(/-/g,"_");


return string;
}
kebabToSnake("Hello-world");
"Hello_world"