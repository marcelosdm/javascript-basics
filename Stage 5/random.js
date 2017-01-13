function getRandomNumber(min, max){
	if(isNaN(min) || isNaN(max)){
		throw new Error('Both arguments must be numbers');
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 6));
console.log(getRandomNumber('nine', 6));
