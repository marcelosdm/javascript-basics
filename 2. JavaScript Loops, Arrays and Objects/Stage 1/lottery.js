function randomNumber(upper) {
	return Math.floor(Math.random() * upper)+1;
}

var counter = 0;

while(counter < 6){
	var randNum = randomNumber(60);
	document.write(randNum + ' ');
	counter += 1;
}