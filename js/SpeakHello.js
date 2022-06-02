(function (window) {
	var yaakovGreeter = {};
	yaakovGreeter.name = "Yaakov";
	var speakWord = "Hello";
	yaakovGreeter.sayHello = function() {
		console.log(speakWord + yaakovGreeter.name);
	}

	window.yaakovGreeter = yaakovGreeter;
})(window);










//var speakWord = "Hello";
//function speak(name) {
//  console.log(speakWord + " " + name);
//}