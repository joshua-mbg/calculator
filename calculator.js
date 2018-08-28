//one way to start
// var Calculator = function(input) {
//	var expression = input;
//
//   this.expr = function() {
//   };
//};

//another way to start
// var Calculator = function(input) {
//   return {
//     expr: function() {
//     }
//   };
// };

// //yet another way to start
var Calculator = function(input) {
	var self = this,
		expression = input;

	function setExpr (newInput) {
		expression = newInput;
	}
	self.setExpr = setExpr;

	function expr () {
		return expression;
	}
	self.expr = expr;

	function addSync () { 
		if (!expression) return 0;
		else if (expression.indexOf(',') === -1) return parseInt(expression);

		return expression.split(',').reduce(function(prev,cur) { return parseInt(prev)+parseInt(cur); });
	}
	self.addSync = addSync;

	function add (callback) {
		callback(null, addSync());
	}
	self.add = add;

	function diffSync () {
		if (!expression) throw "Error in diffSync";
		else if (expression.indexOf(',') === -1) throw "Error in diffSync";

		return expression.split(',').reduce(function(prev,cur) { return parseInt(prev)-parseInt(cur); });
	}
	self.diffSync = diffSync;

	function diff (callback) { 
		try {
			var value = diffSync();
			callback(null, value);
		} catch(e) {
			callback(e);
		}
	}
	self.diff = diff;

	function prod () { 
		if (!expression) throw "Error in prod";
		else if (expression.indexOf(',') === -1) return parseInt(expression);

		return expression.split(',').reduce(function(prev,cur) { return parseInt(prev)*parseInt(cur); });
	}
	self.prod = prod;

	function div () { 
		if (!expression) throw "Error in div";
		else if (expression.indexOf(',') === -1) return parseInt(expression);

		return expression.split(',').reduce(function(prev,cur) { return parseInt(prev)/parseInt(cur); });
	}
	self.div = div;

	return self;
};

// Calculator.prototype.expr = function() {
// };

module.exports = Calculator;
