(function(){
	
	var createShape = function(type) {
		console.log("Type parameter of createShape is " + type);
	};
	
	var readBook = function(bookType = 'Spritual') {
		console.log("Reading " + bookType + " Book.");
	};
	
	var createHuman = function(sex, ...humanNames) {
		for(i = 0; i < humanNames.length; i++) {
			console.log(sex + " Human created with name " + humanNames[i]);
		}
	};
	
	console.log("Calling createShape without any parameter...");
	createShape();
	console.log("Calling createShape with rectangle parameter...");
	createShape('rectangle');
	
	console.log();
	
	readBook();
	readBook('Novel');
	createHuman('Male', 'Alan', 'Henry', 'Jolly');
	createHuman('Female', 'Hillary', 'Angel');
}());