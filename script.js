function getNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    return [num1, num2];
}

function add() {
    let numbers = getNumbers();
    document.getElementById("result").innerText = numbers[0] + numbers[1];
}

function subtract() {
    let numbers = getNumbers();
    document.getElementById("result").innerText = numbers[0] - numbers[1];
}

function multiply() {
    let numbers = getNumbers();
    document.getElementById("result").innerText = numbers[0] * numbers[1];
}

function divide() {
    let numbers = getNumbers();

    if (numbers[1] == 0) {
        document.getElementById("result").innerText = "Cannot divide by 0";
    } else {
        document.getElementById("result").innerText = numbers[0] / numbers[1];
    }
}

function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerText = "0";
}