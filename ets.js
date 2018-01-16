let container = document.getElementById("container");


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
	e.target.style.backgroundColor = 'black';
}

squares.forEach(square => square.addEventListener("mouseenter", drawColor));

let reset = () => {
	squares.forEach(square => square.style.backgroundColor = "white");
}

let clearGrid = document.querySelector("#clear");
clearGrid.addEventListener("click", reset);
