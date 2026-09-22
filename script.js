function getNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    return [num1, num2];
}

function add() {
    let numbers = getNumbers();
    let result = numbers[0] + numbers[1];

    showResult(result);
    addHistory(numbers[0] + " + " + numbers[1] + " = " + result);
}

function subtract() {
    let numbers = getNumbers();
    let result = numbers[0] - numbers[1];

    showResult(result);
    addHistory(numbers[0] + " - " + numbers[1] + " = " + result);
}

function multiply() {
    let numbers = getNumbers();
    let result = numbers[0] * numbers[1];

    showResult(result);
    addHistory(numbers[0] + " × " + numbers[1] + " = " + result);
}

function divide() {
    let numbers = getNumbers();

    if (numbers[1] == 0) {
        showResult("Cannot divide by 0");
        return;
    }

    let result = numbers[0] / numbers[1];

    showResult(result);
    addHistory(numbers[0] + " ÷ " + numbers[1] + " = " + result);
}

function showResult(result) {
    document.getElementById("result").innerText = result;
}

function addHistory(calculation) {
    let historyList = document.getElementById("historyList");

    let item = document.createElement("li");
    item.innerText = calculation;

    historyList.appendChild(item);
}

function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "0";
}