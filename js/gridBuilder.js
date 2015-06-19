var gridBuilder = (function() {
    return {
        buildGrid: function(minNumber, maxNumber) {
            var promise = new Promise( function (resolve) {
                (function divCreator() {
                    var newDiv = document.createElement('div');
                    newDiv.textContent = minNumber;
                    newDiv.setAttribute('data-number', minNumber);
                    newDiv.setAttribute('class',this.settings.gridCellClass);
                    document.body.appendChild(newDiv);
                    if(minNumber < maxNumber) {
                        minNumber++;
                        setTimeout(divCreator,0);
                    } else {
                        resolve(document.body);
                    }
                }());
            });
            return promise;
        }
    }
})();