function askName() {
 var name1;
 if (name1 != '') {
   name1 = prompt('Hi! I\'m Matt. What\'s your name?');
   document.write(name1);
 } else {
   document.write(name1);
 }
}

function question1() {
  var response1 = prompt('1. Does my first name have two \"t\'s\"? Yes or no?');
  document.getElementById('q1').innerHTML = response1.toLowerCase();
}

function question2() {
var response2 = prompt('2. Have I ever left the U.S.?');
  document.getElementById('q2').innerHTML = response2.toLowerCase();
}

function question3() {
var response3 = prompt('3. Did I join the Army?');
  document.getElementById('q3').innerHTML = response3.toLowerCase();
}

function question4() {
var response4 = prompt('4. Do I have any pets?');
  document.getElementById('q4').innerHTML = response4.toLowerCase();
}

function question5() {
var response5 = prompt('5. Am I interested in robotics?');
  document.getElementById('q5').innerHTML = response5.toLowerCase();
}