(function(){	
	function goToFloor(houseNo, floors){
		function openMainDoor(){
			function goToStaircase(floor){
				console.log('You are at ' + floor + ' floor of house ' + houseNo);
			}
			for(var i=1; i <= floors; i++){
				goToStaircase(i);
			}
		}
		openMainDoor(floors);
	}
	goToFloor('H-34',2);
}());