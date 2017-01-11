/////// USER TYPES THE MAX NUMBER ///////
// var firstNumber = prompt('Type any number:');
// var random = Math.floor(Math.random() * parseInt(firstNumber) + 1);
// var message = '<p>' + random + ' is a number between 1 and ' + firstNumber + '</p>';
// document.write(message);


/////// USER TYPES MIN AND MAX NUMBER ///////
var input1 = prompt('Please, type a starting secondNumber:');
var bottomNumber = parseInt(input1);
var input2 = prompt('Please, type another number');
var topNumber = parseInt(input2);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = '<p>' + randomNumber + ' is a number between ' + bottomNumber + ' and ' + topNumber + '</p>';
document.write(message);