let calculator = document.querySelector(".calculator");
let output = document.querySelector(".output");
let keys = calculator.querySelector(".keys");

let buttons = document.querySelectorAll("button");

keys.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('button')) {
        const key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent;

        let displayedNum = output.textContent;
        let previousKeyType = calculator.dataset.previousKeyType;
        if (!action) {
            console.log("number key", displayedNum);
            if (displayedNum === "0" || previousKeyType === "operator" || previousKeyType === "calculate") {
                output.textContent = keyContent;
            } else {
                output.textContent = displayedNum + keyContent;
            }
            calculator.dataset.previousKeyType = "number";

        } else {
            if (action == 'add' || action == "mul" || action == "div" || action == "sub") {
                let firstValue = calculator.dataset.firstValue;
                let operator = calculator.dataset.operator;
                let secondValue = displayedNum;
                if (firstValue && operator && previousKeyType !== "operator" && previousKeyType !== "calculate") {
                    const calcVal = calculate(firstValue, operator, secondValue);
                    output.textContent = calcVal;
                    // Update calculated value as firstValue
                    calculator.dataset.previousKeyType = calcVal;
                } else {
                    // If there are no calculations, set displayedNum as the firstValue
                    calculator.dataset.previousKeyType = displayedNum;
                }
                key.classList.add("is-depressed");
                //add custom attributes
                calculator.dataset.previousKeyType = "operator";
                calculator.dataset.firstValue = displayedNum;
                calculator.dataset.operator = action;
                Array.from(key.parentNode.children).forEach(k => k.classList.remove("is-depressed"));
            }
            if (action === "decimal") {
                //do nothing if output have dot 
                if (!displayedNum.includes(".")) {
                    output.textContent = displayedNum + '.';
                }
                if (previousKeyType === "operator" || previousKeyType === "calculate") {
                    output.textContent = "0.";

                }
                calculator.dataset.previousKeyType = 'decimal';
            }
            if (action === "calculate") {
                let firstValue = calculator.dataset.firstValue;
                let operator = calculator.dataset.operator;
                let secondValue = displayedNum;
                // console.log("first value ", firstValue)
                if (firstValue) {
                    if (previousKeyType === "calculate") {
                        firstValue = displayedNum;
                        secondValue = calculator.dataset.modValve;
                    }
                    output.textContent = calculate(firstValue, operator, secondValue);
                }
                //set modValue attributes
                calculator.dataset.modValve = secondValue;
                calculator.dataset.previousKeyType = "calculate";
            }
            if (action === "clear") {
                if (key.textContent == "AC") {
                    calculator.dataset.modValve = '';
                    calculator.dataset.previousKeyType = "";
                    calculator.dataset.firstValue = '';
                    calculator.dataset.operator = '';
                } else {

                    key.textContent = "AC";
                }
                output.textContent = 0;
                calculator.dataset.previousKeyType = "clear";
            }
            if (action !== "clear") {
                const clearButton = document.querySelector("[data-action=clear]");
                clearButton.textContent = "CE";
            }
        }

    }

})
let calculate = (n1, operator, n2) => {
    let result = "";
    if (operator === "add") {
        result = parseFloat(n1) + parseFloat(n2);
    } else if (operator == "mul") {
        result = parseFloat(n1) * parseFloat(n2);
    } else if (operator == "div") {
        result = parseFloat(n1) / parseFloat(n2);
    } else if (operator == "sub") {
        result = parseFloat(n1) - parseFloat(n2);
    }
    return result;
}
