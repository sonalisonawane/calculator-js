** *
let inputBtns = document.querySelectorAll(".btn")
let resultBox = document.querySelector(".result-box")
let screenValue = "" //value inside result box

inputBtns.forEach(element => {
    element.addEventListener("click", function(e) {
        let buttonText = e.target.value;
        if (buttonText == "x") {
            buttonText = "*";
            screenValue += buttonText;
            resultBox.value = screenValue;
        } else if (buttonText == "RESET") {
            screenValue = ""
            resultBox.value = screenValue;
        } else if (buttonText == "DEL") {
            // screenValue -= 1;
            resultBox.value = resultBox.value.substring(0, resultBox.value.length - 1);
        } else if (buttonText == "=") {
            resultBox.value = eval(screenValue)
        } else {
            screenValue += buttonText;
            resultBox.value = screenValue;

        }
    })
    window.addEventListener("keydown", function(e) {
        newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        if (e.key == "=" || "ENTER") {
            resultBox.value = eval(screenValue)
        } else if (e.key == "Backspace") {
            resultBox.value = resultBox.value.substring(0, resultBox.value.length - 1);
        }


    })
});