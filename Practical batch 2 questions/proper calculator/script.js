const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("btn"));
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

let currentNum = "";
let prevNum = "";
let operation = null;
let decimalUsed = false;

const updateDisplay = () => {
	display.value = currentNum;
};

const addToCurrentNum = (num) => {
	currentNum += num;
	updateDisplay();
};

const handleDecimal = () => {
	if (!decimalUsed) {
		currentNum += ".";
		decimalUsed = true;
		updateDisplay();
	}
};

const clearAll = () => {
	currentNum = "";
	prevNum = "";
	operation = null;
	decimalUsed = false;
	updateDisplay();
};

const handleOperation = (op) => {
	if (currentNum === "") return;
	if (prevNum !== "") handleEquals();
	operation = op;
	prevNum = currentNum;
	currentNum = "";
	decimalUsed = false;
};

const handleEquals = () => {
	if (currentNum === "" || prevNum === "") return;
	let result;
	const prevNumDouble = parseFloat(prevNum);
	const currentNumDouble = parseFloat(currentNum);
	switch (operation) {
		case "+":
			result = prevNumDouble + currentNumDouble;
			break;
		case "-":
			result = prevNumDouble - currentNumDouble;
			break;
		case "*":
			result = prevNumDouble * currentNumDouble;
			break;
		case "/":
			if (currentNumDouble === 0) {
				alert("Cannot divide by zero");
				clearAll();
				return;
			}
			result = prevNumDouble / currentNumDouble;
			break;
		default:
			return;
	}
	currentNum = result.toString();
	prevNum = "";
	operation = null;
	decimalUsed = false;
	updateDisplay();
};

const handleButtonClick = (e) => {
	const buttonText = e.target.innerText;
	if (buttonText === "C") {
		clearAll();
	} else if (buttonText === ".") {
		handleDecimal();
	} else if (buttonText === "=") {
		handleEquals();
	} else {
		addToCurrentNum(buttonText);
	}
};

const addListeners = () => {
	buttons.map((button) =>
		button.addEventListener("click", handleButtonClick)
	);
	decimal.addEventListener("click", handleButtonClick);
	equals.addEventListener("click", handleButtonClick);
	add.addEventListener("click", () => handleOperation("+"));
	subtract.addEventListener("click", () => handleOperation("-"));
	multiply.addEventListener("click", () => handleOperation("*"));
	divide.addEventListener("click", () => handleOperation("/"));
};

addListeners();