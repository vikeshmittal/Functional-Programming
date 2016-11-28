(function(){
	
	var createCircle = function(radius) {
		function diameter() {
			return 2 * Math.PI * radius;
		}
		
		function area() {
			return Math.PI * radius * radius;
		}
		
		return {
			radius: radius,
			diameter: diameter(radius),
			area: area(radius)
		}
	};
	var circle = createCircle(5); 
	console.log("Circle with radius of " + circle.radius);
	console.log("Diameter of Circle " + circle.diameter);
	console.log("Area of Circle " + circle.area);
}());