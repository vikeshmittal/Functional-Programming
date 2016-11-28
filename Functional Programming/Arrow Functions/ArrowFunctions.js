(function(){	

	var createAnimal = function(type, ...animals) {
		console.log(type + " Animals created with names " + animals.map(function(animal){
			return animal;
		}));
	};

	
	var createHuman = (sex, ...humanNames) => {
		console.log(sex + " Humans created with names " + humanNames.map(name => name));
	};
	
	createHuman('Male', 'Alan', 'Henry', 'Jolly');
	createHuman('Female', 'Hillary', 'Angel');
	
	createAnimal('Forest', 'Elephant', 'Lion');
}());