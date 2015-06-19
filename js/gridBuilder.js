var gridBuilder = (function() {
    return {
        buildGrid: function(minNumber, maxNumber) {
            var promise = new Promise( function (resolve) {
                (function divCreator() {
                    var button = document.createElement('input');
                    button.setAttribute('type', 'button');
                    button.setAttribute('value', minNumber);
                    button.setAttribute('class',this.settings.gridCellClass);
                    document.body.appendChild(button);
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