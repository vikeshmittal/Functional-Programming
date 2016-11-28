(function(){
	var immutableString = "This is an immutable string";
	immutableString.slice(11,20);
	console.log("'" + immutableString + "' after applying slice(11,9), it is '" + immutableString + "'");
	
	var mutableArray = [1,2,3,4,5];
	
	console.log("Before splice : '" + mutableArray.map(i => i) + "'");
	mutableArray.splice(1,1);
	console.log("After applying splice(1,1), it is '" + mutableArray.map(i => i) + "'");
	mutableArray.splice(2,1);	
	console.log("After applying splice(2,1), it is '" + mutableArray.map(i => i) + "'");
}());