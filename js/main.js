eventDelegator.initMethod(function(e) {
    if(e.target && e.target.className && (new RegExp(".*" + this.settings.gridCellClass + "*.")).test(e.target.className)) {
        /**
         * here we will
         * attach events for
         * next click
         */
        e.target.addEventListener("click", function clickHandler(e) {
            var clickedButton = this;
            multiplesCalculator.findMultiples(parseInt(clickedButton.textContent,0), this.settings.maxGridNumber, function(currentNumber) {
                highlighter.unhighlight(currentNumber);
            }).then(function() {
                clickedButton.removeEventListener("click", clickHandler);
            });
            e.preventDefault();
            e.stopPropagation();
        });

        multiplesCalculator.findMultiples(parseInt(e.target.textContent,0), this.settings.maxGridNumber, function(currentNumber) {
            highlighter.highlight(currentNumber);
        });
    }
});

gridBuilder.buildGrid(1,this.settings.maxGridNumber).then(function() {
    var pleaseWaitMessage = document.getElementById('pleaseWaitMessage');
    if(pleaseWaitMessage) {
        pleaseWaitMessage.parentNode.removeChild(pleaseWaitMessage);
    }
});