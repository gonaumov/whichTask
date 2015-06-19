var multiplesCalculator = (function() {
    return {
        findMultiples: function(inputNumber, maxNumber) {
			var result = [], currentMultiplicand = 1;
            return new Promise(function (resolve) {
                (function calculate() {
				    result.push((inputNumber*currentMultiplicand));
                    var nextResult = inputNumber*(currentMultiplicand+1);
                    if(nextResult < maxNumber) {
                        currentMultiplicand++;
                        setTimeout(calculate,0);
                    } else {
                        resolve(result);
                    }
                }());
            });
        }
    }
})();
