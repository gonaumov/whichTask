describe("Multiple calculator", function() {
	describe("Valid case", function() {
		var multipleResult;
		
		beforeEach(function(done) {
			multiplesCalculator.findMultiples(1, 10).then(function(result) {
				multipleResult = result;
				done();
			});
		});
		
		it("the result must be array with numbers from 1 to 9", function(done) {
			expect(multipleResult).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			done();
		});
		
		
		afterEach(function(done) {
		  done();
		});
    });
    
    describe("Invalid cases", function() {
	   it("Must be Error when parameters is not provided", function() {
		   expect(function() {
			   multiplesCalculator.findMultiples();
		   }).toThrow(new Error("inputNumber and maxNumber parameters are obligatory!"));
	   });
	  
	   it("Must be Error when parameters is not provided", function() {
		   expect(function() {
			   multiplesCalculator.findMultiples("a","b");
		   }).toThrow(new Error("inputNumber and maxNumber must be numbers!"));
	   });
	});
});
