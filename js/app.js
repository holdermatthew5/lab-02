'use strict';

var a = 0;
var name1 = prompt('Hi! I\'m Matt. What\'s your name?');
alert('Hi ' + name1 + '! I\'m so glad to meet you');

var goodBye = ('Thanks so much for visiting ' + name1 + '! Come back soon!');
document.getElementById('name2').innerHTML = goodBye;

function question1() {
  var response1 = prompt('1. Does my first name have two "t\'s"? Yes or no?');
  var answer1 = response1.toLowerCase();
  if (answer1 === 'yes' || answer1 === 'y') {
    alert ('Yes, my name does have two t\'s!');
    a++;
  } else if (answer1 === 'no' || answer1 === 'n') {
    alert ('Actually my name does have two t\'s');
  }
}

function question2() {
  var response2 = prompt('2. Have I ever left the U.S.?');
  var answer2 = response2.toLowerCase();
  if (answer2 === 'yes' || answer2 === 'y') {
    alert ('Correct! I\'ve been to about 10 countries!');
    a++;
  } else if (answer2 === 'no' || answer2 === 'n') {
    alert ('Incorrect! I\'ve been to about 10 countries');
  }
}

// var response3 = prompt('3. Did I join the Army?');
// var answer3 = response3.toLowerCase();
// if (answer3 !== 'yes' && answer3 !== 'y' && answer3 !== 'no' && answer3 !== 'n') {
//   response3 = prompt('Please answer yes or no. Did I join the Army?');
// }
// if (answer3 === 'no' || answer3 === 'n') {
//   alert('Correct! I served 4 years active duty in the Navy!');
//   a++;
// } else {
//   alert('Incorrect! I served 4 years active duty in the Navy!');
// }
// console.log(response3);
// document.getElementById('q3').innerHTML = response3;

// var response4 = prompt('4. Do I have any pets?');
// var answer4 = response4.toLowerCase();
// if (answer4 !== 'yes' && answer4 !== 'y' && answer4 !== 'no' && answer4 !== 'n') {
//   response4 = prompt('Please answer yes or no. Do I have any pets?');
// }
// if (answer4 === 'yes' || answer4 === 'y') {
//   alert('Correct! I have a beautiful puppy named Macy!');
//   a++;
// } else {
//   alert('Incorrect! I have a beautiful puppy named Macy!');
// }
// console.log(response4);
// document.getElementById('q4').innerHTML = response4;

// var response5 = prompt('5. Am I interested in robotics?');
// var answer5 = response5.toLowerCase();
// if (answer5 !== 'yes' && answer5 !== 'y' && answer5 !== 'no' && answer5 !== 'n') {
//   response5 = prompt('Please answer yes or no. Am I interested in robotics?');
// }
// if (answer5 === 'yes' || answer5 === 'y') {
//   alert('Correct! It\'s my passion!');
//   a++;
// } else {
//   alert('Incorrect! It\'s my passion!');
// }
// console.log(response5);
// document.getElementById('q5').innerHTML = response5;

// var response6 = prompt('How many years did I spend at my permanent duty station?');
// var i = 0;
// while (i <= 3) {
//   if (response6 === 3) { break; }
//   while (response6 < 3) {
//     i++;
//     response6 = prompt('Incorrect! Too low, try again.');
//     break;
//   }
//   while (response6 > 3) {
//     i++;
//     response6 = prompt('Incorrect! Too high, try again.');
//     break;
//   }
//   if (i === 3) { break; }
// }
// if (response6 === 3) {
//   alert('Correct! I spent 3 years at my permanent duty station and about 1 year between laerning to be the best sailor I could be and taking leave at the end of my contract to prepare myself for civilian life.');
//   a++;
// } else {
//   alert('Incorrect! I spent 3 years at my permanent duty station and about 1 year between laerning to be the best sailor I could be and taking leave at the end of my contract to prepare myself for civilian life.');
// }
// console.log(response6);
// document.getElementById('q6').innerHTML = response6;

// var states = ['texas', 'illinois', 'california', 'washington'];
// var response7 = prompt('Try guessing a state I\'ve been to.');
// var answer7 = response7.toLowerCase();
// var pass = false;
// for (var j = 0; j < 5; j++) {
//   console.log(`guess ${j}`);
//   for (var k = 0; k < states.length; k++) {
//     answer7 = response7.toLowerCase();
//     console.log(answer7, states[k]);
//     if (states[k] === answer7) {
//       pass = true;
//     }
//   }
//   if (pass === false) {
//     response7 = prompt('Incorrect! Guess again.');
//   }
// }
// if (pass) {
//   alert('Correct! I\'ve been to Texas, Illinois, California and now Washington!');
//   a++;
// } else {
//   alert('Incorrect! I\'ve been to Texas, Illinois, California and now Washington.');
// }
// console.log(response7);
// document.getElementById('q7').innerHTML = response7;

// console.log('You got ' + a + ' out of 7 correct.');
alert('You got ' + a + ' out of 7 correct.');
// var result1 = ('You got ' + a + ' out of 7 correct.');
// document.getElementById('result').innerHTML = result1;
