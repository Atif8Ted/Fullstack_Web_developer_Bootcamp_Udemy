var secrNumb=4;
guess=Number(prompt("Enter the number"));
if(guess===secrNumb){
	alert("You gessed it right");
}
else if (guess>secrNumb) {
	alert("Too high . Guess again");
}

else{
	alert("Too Low , Guess again");
}
