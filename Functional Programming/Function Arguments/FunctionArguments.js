(function(){
	
	var createShape = function(type) {
		function showFunctionArguments(arguments) {
			console.log("Arguments of " + arguments.callee.name + " method of " + type);
			if (arguments.length === 0) {
				console.log("No Arguments");
			} else {
				for (i = 0; i < arguments.length; i++) {
					console.log(arguments[i]);
				};
			}
		}
		function createRectangle() {
			var length, breadth;		
			
			return {
				type: type,
				configure: function(l, b) {
					showFunctionArguments(arguments);
					length = l;
					breadth = b;
				},
				showConfiguration: function() {
					showFunctionArguments(arguments);
					return ("Length: " + length + " And Breadth: " + breadth);
				},
				area: function() {
					showFunctionArguments(arguments);
					return length * breadth;
				}
			};
		}
		
		function createSquare() {
			var side;
			
			return {
				type: type,
				configure: function(s) {
					showFunctionArguments(arguments);
					side = s;
				},
				showConfiguration: function() {
					showFunctionArguments(arguments);
					return ("Side: " + side);
				},
				area: function() {
					showFunctionArguments(arguments);
					return side * side;
				}
			};
		}
		
		
		var shape = null;
		if (type === 'rectangle') {
			shape = createRectangle();
		} else if (type === 'square') {
			shape =  createSquare();
		}
		return shape;
	};
	var rectangle = createShape('rectangle'); 
	var square = createShape('square'); 
	rectangle.configure(2,3);
	square.configure(5);
	console.log(rectangle.type + " with " + rectangle.showConfiguration() + " has area of " + rectangle.area());
	console.log(square.type + " with " + square.showConfiguration() + " has area of " + square.area());
}());