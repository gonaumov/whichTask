eventDelegator.initMethod(function(e) {
    if(e.target && e.target.className && e.target.className === this.settings.gridCellClass) {
        multiplesCalculator.findMultiples(parseInt(e.target.value,0), 144).then(function(result) {
            console.log(result);
        });
    }
});
gridBuilder.buildGrid(1,this.settings.maxGridNumber);