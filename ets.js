let container = document.getElementById("container");
let color = "black";
let rainbow = false;

for(let r = 0; r < 16; r++){
	let row = document.createElement("div");
	row.setAttribute("class", "row");
	for(let c = 0; c < 16; c++){
		let col = document.createElement("div");
		col.setAttribute("style", "width: 40px; height: 40px;");
		col.setAttribute("class", "square");
		row.appendChild(col);
	}
	container.appendChild(row);
}


let squares = document.querySelectorAll(".square");

let drawColor = (e) => {
	if(rainbow){
		function getRandomColor(){
		let letters = '0123456789ABCDEF';
		let newColor = '#';
		for(let i = 0; i < 6; i++){
			newColor += letters[Math.floor(Math.random() * 16)];
		}
		return newColor;
	}
	color = getRandomColor();
	}
	e.target.style.backgroundColor = color;
}

squares.forEach(square => square.addEventListener("mouseenter", drawColor));

let reset = () => {
	squares.forEach(square => square.style.backgroundColor = "white");
}

let clearGrid = document.querySelector("#clear");
clearGrid.addEventListener("click", reset);

let setRainbow = () =>{
	rainbow = true;
}

let rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener("click", setRainbow);






