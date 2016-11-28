(function(){	
	function god() {
		var func = arguments[0];
		var args = Array.prototype.slice.call(arguments, 1);
		return function() {
			return func.apply(this, args.concat(arguments[0]));
		};
	}
	
	function creator() {
		var func = arguments[1];
		var args = Array.prototype.slice.call(arguments, 2);
		return function() {
			return func.apply(this, args.concat(arguments[0])));
		};
	}
	
	function createAnimal(type, name) {
		return {
			showDetail: function() {
				return "Type: " + type + ", Identity: " + name;
			}
		}
	}
	
	function createHuman(sex, name) {
		return {
			showDetail: function() {
				return "Type: " + sex + ", Identity: " + name;
			}
		}
	}
	
	var animalCreator = god(creator,'Animal');
	var forestAnimalCreator = animalCreator(createAnimal, 'Forest');
	console.log(forestAnimalCreator('Elephant').showDetail());
	
	var humanCreator = god(creator,'Human');
	var maleHumanCreator = humanCreator(createHuman, 'Male');
	console.log(maleHumanCreator('Allan').showDetail());
}());