(function(window){ 
	var helloSpeaker ={};
	helloSpeaker.speak = function (name) {
  		console.log(speakWord + " " + name);
	}
	window.helloSpeaker = helloSpeaker;
})(window);