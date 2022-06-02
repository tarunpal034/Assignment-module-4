(function (window) {
	var johnGreeter = {};
	johnGreeter.name = "Yaakov";
	var speakWord = "Good Bye";
	yaakovGreeter.sayGoodBye = function() {
		console.log(speakWord + johnGreeter.name);
	}

	window.johnGreeter = johnGreeter;
})(window);










//var speakWord = "Good Bye";
//function speak(name) {
//  console.log(speakWord + " " + name);
//}