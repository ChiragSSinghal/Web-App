var num, sol;
num = prompt("Guess a number from 1 to 20!");

sol = Math.floor(Math.random() * 20) + 1;
diff = num - sol;

if (diff == 0)
	alert("You guessed it right!!!");
else if (diff > 5)
	alert("You guessed too high! The number is: " + sol);
else if (diff > 0)
	alert("You guessed high! The number is: " + sol);
else if (diff < -5)
	alert("You guessed too low! The number is: " + sol);
else if (diff < 0)
	alert("You guessed low! The number is: " + sol);