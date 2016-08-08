
var beeEmmEye = function(weight, height) {
	return weight / (height * height) * 703;
}

var myWeight = parseFloat(prompt("What is your weight?"));
var myHeight = parseFloat(prompt("How tall are you?"));

alert(beeEmmEye(myWeight, myHeight));

var temperature = function(celsius) {
	return celsius * 1.8 + 32;
};

var celsius = parseInt(prompt("Temperature in C?"));

alert(temperature(celsius));

var volume = function(teaspoon) {
	return teaspoon / 3;
};

var teaspoon = parseInt(prompt("How many teaspoons?"));

alert(volume(teaspoon));
