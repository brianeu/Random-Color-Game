var squares = document.querySelectorAll(".square");
var pickedColor;
var winningColor = document.querySelector("#currentColor");
var gameBoard = document.getElementById("body");
var colors = generateRandomColor();
var easyMode = document.querySelectorAll(".mode")[0];

function generateColor() {
	color = "rgb(";
	color += Math.floor(Math.random() * (255 - 1)) + 1;
	color += ", ";
	color += Math.floor(Math.random() * (255 - 1)) + 1;
	color += ", ";
	color += Math.floor(Math.random() * (255 - 1)) + 1;
	color += ")";
	return color; 
	}
console.log(gameBoard);




for (var i = 0; i < squares.length; i ++){
	squares[i].style.backgroundColor = generateColor();
	pickColor();
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor){
		changeColor(clickedColor);
		}else {
		this.style.backgroundColor = "#232323";
		}
		
	});

	}
	
function changeColor(color) {
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
		var color = squares[Math.floor(Math.random() * squares.length)];
		pickedColor = color.style.backgroundColor;
		return color.style.backgroundColor;
	}

winningColor.textContent = pickedColor;

easyMode.addEventListener("click", function() {
		var easy = "[<div class=\"row\">";
		for(var i = 0; i < 3; i++){
		easy +=  "<div class=\"square\"></div>";}	
		easy += "</div>, ]";
		console.log(squares);
		console.log(easy);
	 	gameBoard.innerHTML = easy;
	 	console.log(squares);
});


function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num colors to the array
	for (var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(generateColor());
	}
	//return array
	return arr;
}