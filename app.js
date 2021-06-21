let inputBtns = document.querySelectorAll(".btn")
let resultBox = document.querySelector(".result-box")

inputBtns.forEach(button => {
    button.addEventListener("click", function(e) {
        let buttonText = e.target.value;
        if (buttonText == "x") {
            buttonText = "*";
            resultBox.value += buttonText;
        } else if (buttonText == "RESET") {
            resultBox.value = "";
        } else if (buttonText == "DEL") {
            resultBox.value = resultBox.value.substring(0, resultBox.value.length - 1);
        } else if (buttonText == "=") {

            if (resultBox.value == "") {
                resultBox.value = ""
            } else {
                resultBox.value = eval(resultBox.value)
            }
        } else {
            resultBox.value += buttonText;
        }
    })
});

const themeSwitcher = document.querySelectorAll(".inner");
const defaultTheme = localStorage.getItem("theme") || "theme-1"
setTheme(defaultTheme);


themeSwitcher.forEach((button) => {
    button.addEventListener("click", (e) => {
        setTheme(e.target.value);
    });
});

function setTheme(theme) {
    theme = theme || "theme-1";
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    themeSwitcher.value = theme;
}