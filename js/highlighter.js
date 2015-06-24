var highlighter = (function () {
    return {
        highlight: function (inputNumber) {
            var element = document.querySelector("*[data-number='" + inputNumber + "']");
            if (element) {
                var currentClass = element.getAttribute('class');
                currentClass = currentClass.concat(" gridCellSelected");
                element.setAttribute('class', currentClass);
            }
        },
        unhighlight: function (inputNumber) {
            var element = document.querySelector("*[data-number='" + inputNumber + "']");
            if (element) {
                var currentClass = element.getAttribute('class');
                currentClass = currentClass.replace("gridCellSelected", "").trim();
                element.setAttribute('class', currentClass);
            }
        }
    }
}());