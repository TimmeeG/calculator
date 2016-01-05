angular.module('starter')
.controller('CalculatorController', function($scope, calculator) { 
	$scope.display = "";

	$scope.clear = function () {
		$scope.display="";
	};

    $scope.equals = function () {
        var equation = $scope.display;
        var result = calculator.calculate(equation);
        $scope.display = result;
    };

	$scope.appendToDisplay = function (character) {
        $scope.display = $scope.display + character;
    };
})
.factory('calculator', function() {
    var calculate = function(equation) {
        var parser = new Epsilon.ExpressionParser(equation);
        return parser.evaluate();
    };
 
    return {
        calculate: calculate
    };
});

