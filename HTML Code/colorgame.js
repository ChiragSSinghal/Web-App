//Variable declaration
var winColor;
var gameMode = 3;
var colors = [];
var tries = 0;

//HTML Object selectors
var help = document.querySelector(".help");
var modebtn = document.querySelectorAll(".mode");
var sqrs = document.querySelectorAll(".square");
var h1 = document.querySelector("#disp");
var colorDisp = document.querySelector("#colorDisp");
var body = document.querySelector("body");
var result = document.querySelector("#result");
var newgame = document.querySelector("#newgame");
var trial = document.querySelector("#try");
var container = document.querySelector("#container")

//Initialisation
init();

////Initial Function
function init()
{
	setupMode();
	setupSqrs();
	resetgame();
}

//Game reset event
newgame.addEventListener("click", resetgame);

//Game help event
help.addEventListener("click", function(){
	alert("To win the game, click on any color which you think is closest to the displayed RGB value.\nYou have 3 different difficulty to select from.\nThe \"New Game\" button resets the game.");
})

//Game mode setup function
function setupMode()
{
	for(var i = 0; i < modebtn.length; i++)
	{
		modebtn[i].addEventListener("click", function() {
			for(var i = 0; i < modebtn.length; i++)
			{
				modebtn[i].classList.remove("selected");
			}
			this.classList.add("selected");
			if(this.innerHTML === "Easy")
			{
				gameMode = 3;
				container.style.maxWidth = "600px";
			}
			else if(this.innerHTML === "Hard")
			{
				gameMode = 6;
				container.style.maxWidth = "600px";
			}
			else if(this.innerHTML === "Expert")
			{
				gameMode = 9;
				container.style.maxWidth = "600px";
			}
			else if(this.innerHTML === "Master")
			{
				gameMode = 12;
				container.style.maxWidth = "900px";
			}
			else if(this.innerHTML === "Torment")
			{
				gameMode = 15;
				container.style.maxWidth = "1200px";
			}
			resetgame(gameMode);
		});
	}
}

//Function to set the game squares
function setupSqrs()
{
	for(var i = 0; i < sqrs.length; i++)
	{
		sqrs[i].addEventListener("click", function() {
			var clickColor = this.style.backgroundColor;
			if(this.style.backgroundColor !== body.style.backgroundColor && h1.style.backgroundColor !== clickColor)
			{
				tries++;
				trial.innerHTML = tries;
			}
			if(clickColor === winColor)
			{
				result.textContent = "right color!";
				result.style.color = "green";
				h1.style.backgroundColor = clickColor;
				changeColors(clickColor);
			}
			else
			{
				result.innerHTML = "wrong color!";
				result.style.color = "red";
				this.style.backgroundColor = body.style.backgroundColor;
			}
		});
	}
}

//Set the colors to the game mat
function changeColors(color)
{
	for (var i = 0; i < colors.length; i++)
	{
		sqrs[i].style.backgroundColor = color;
	}
}

//Select the winning color
function pickColor()
{
	var rand = Math.floor((Math.random() * colors.length));
	return colors[rand];
}

//Color array generator
function genRandColors(num)
{
	var arr = [];

	for (var i = 0; i < num; i++)
	{
		arr.push(randColor());
	}
	return arr;
}

//Random color generator
function randColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}

//Reset function
function resetgame(num)
{
	colors = genRandColors(gameMode);
	winColor = pickColor();
	colorDisp.innerHTML = winColor;
	result.innerHTML = "";
	for(var i = 0; i < sqrs.length; i++)
	{
		if(colors[i])
		{
			sqrs[i].style.display = "initial";
			sqrs[i].style.backgroundColor = colors[i];
		}
		else
		{
			sqrs[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	tries = 0;
	trial.innerHTML = tries;
}