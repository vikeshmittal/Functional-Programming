(function(){
	
	var createShape = function(type) {
		function createRectangle() {
			var length, bredth;		
			
			return {
				type: type,
				configure: function(l, b) {
					length = l;
					bredth = b;
				},
				showConfiguration: function() {
					return ("Length: " + length + " And Bredth: " + bredth);
				},
				area: function() {
					return length * bredth;
				}
			};
		}
		
		function createSquare() {
			var side;
			
			return {
				type: type,
				configure: function(s) {
					side = s;
				},
				showConfiguration: function() {
					return ("Side: " + side);
				},
				area: function() {
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