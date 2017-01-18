var questions = [
	['How many states are in the United States?', 50],
	['How many continents are there?', 5],
	['How many legs has a centipede?', 100]	
];

var correctAnswers = 0;
var answer;
var question;
var response;
var correct = [];
var wrong = [];

function print(message){
	var outputDiv = document.querySelector('#output');
	outputDiv.innerHTML = message;
}

function buildList(arr){
	var listHTML = '<ol>'
	for (var i = 0; i < arr.length; i += 1){
		listHTML += '<li>' + arr[i] + '</li>';
	}
	listHTML += '</ol>';
	return listHTML;
}

for (var i = 0; i < questions.length; i += 1){
	question = questions[i][0];
	answer = questions[i][1];
	response = parseInt(prompt(question));
	if (response === answer){
		correctAnswers += 1;
		correct.push(question);
	} else{
		wrong.push(question);
	}
}

html = 'You got ' + correctAnswers + ' questions right.';
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);