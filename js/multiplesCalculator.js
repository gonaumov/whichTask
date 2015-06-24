var multiplesCalculator = (function() {
    return {
        findMultiples: function(inputNumber, maxNumber, calculationCallBack) {
			if (typeof inputNumber === 'undefined' || typeof maxNumber === 'undefined') {
					throw new Error("inputNumber and maxNumber parameters are obligatory!");
			}
			
			if (typeof inputNumber !== 'number' && typeof inputNumber !== 'number') {
				   throw new Error("inputNumber and maxNumber must be numbers!");
			}
			
			var result = [], currentMultiplicand = 1;
            var promise = new Promise(PromiseHandler);

            function PromiseHandler(resolve) {
                (function calculate() {
                    var currentNumber = (inputNumber*currentMultiplicand);
                    if(typeof calculationCallBack === 'function') {
                        calculationCallBack(currentNumber);
                    }
                    result.push(currentNumber);
                    var nextResult = inputNumber*(currentMultiplicand+1);
                    if(nextResult < maxNumber) {
                        currentMultiplicand++;
                        setTimeout(calculate,0);
                    } else {
                        resolve(result);
                    }
                }());
            };

            return promise;
        }
    }
})();
