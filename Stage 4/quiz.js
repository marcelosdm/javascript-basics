var points = 0;
var crown = '';
var question1 = prompt('What programming language is the name of a gem?');
if ( question1.toUpperCase() === 'RUBY' ){
	points += 1;
} 

var question2 = prompt("What was the color of the white Napoleon's horse?");
if (question2.toUpperCase() === 'WHITE'){
	points += 1;
} 

var question3 = prompt("What can you never eat for breakfast?");
if (question3.toUpperCase() === 'DINNER'){
	points += 1;
} 

var question4 = prompt("What can you never eat for breakfast?");
if (question4.toUpperCase() === 'DINNER'){
	points += 1;
} 

var question5 = prompt("What can you never eat for breakfast?");
if (question5.toUpperCase() === 'DINNER'){
	points += 1;
} 

//output results
document.write("<p>You got " + points + " out of 5 points!</p>");

//output rank
if (points == 5){
	document.write("<p><strong>Congratiulations! You've got the GOLDEN crown!</strong></p>");
} else if (points >= 3){
	document.write("<p>Congratiulations! You've got the SILVER crown!</p>");
} else if (points >= 1){
	document.write("<p>Congratuilations! You've got the BRONZE crown!</p>");
} else {
	document.write("<p>Sorry, you've got no crown!</p>");
}
