(function(){
	var students = [{
		name: "John", id: "1", marks: 40
	},{
		name: "Mock", id: "2", marks: 25
	},{
		name: "Craig", id: "3", marks: 50
	},{
		name: "Mark", id: "4", marks: 70
	}];
	function prepareResult(student) {
		return {
			name: student.name,
			result: student.marks >= 45 ? "Pass" : "Fail"
		}
	}
	var studentsResult = students.map(function(student) {
		return prepareResult(student);
	});
	console.table(students);
	console.table(studentsResult);
	
	var names = students.map(function(student) {
		return student.name;
	});

	var reducedResult = students.reduce(function(result, student, index) { 
		result[index] = prepareResult(student)
		return result;
	}, []);
	console.table(reducedResult);
	
	// var number = "153";
	// var numberArray = Array.prototype.map.call(number, function(num) {
		// return parseInt(num);
	// });
	// var result = numberArray.reduce(function(initial, digit){
		// return initial + digit * digit * digit;
	// }, 0);
	// console.log(number + ' is ' + (result !== parseInt(number) ? ' not ' : '') +'armstrong');
}());