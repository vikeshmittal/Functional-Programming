(function(){
    function greetMorning(name) {
		return "Hey Mr./Miss. " + name + ", Good Morning";
	}
	
	function greetAfternoon(name) {
		return "Hey Mr./Miss. " + name + ", Good Afternoon";
	}
	
    function morningGreeter(timedGreetMessage, name) {
		return "Good Morning";
	}
	
	function afternoonGreeter(timedGreetMessage, name) {
		return "Good Afternoon";
	}
	
	function greeter(morningGreeter, name) {
		return "Hey Mr./Miss. " + name + ", " + morningGreeter();
	}
	
	function timedGreeter(time) {
		return function() {
			var message = "Good Morning";
			if (time === 'Noon') {
				message = "Good Afternoon!";
			} else if (time === 'Evening') {
				message = "Good Evening!";
			}
			return message;
		}
	}
	
	function greet(timed, name) {
		return "Hey Mr./Miss. " + name + ", " + timed();
	}
	
	console.log(greetMorning("Alan Desk"));
	console.log(greetAfternoon("Alan Desk"));
	var greetMessage = greeter(morningGreeter, "John Carry");
	console.log(greetMessage);
	
	var greetMessage = greeter(afternoonGreeter, "John Carry");
	
	console.log(greetMessage);
	
	var timed = timedGreeter('Evening');
	console.log(greet(timed, 'Thomas Cook'))
}());