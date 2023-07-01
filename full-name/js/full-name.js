// function submitFullName(){
//   let fullName;

//   let name = document.getElementById('input-name').value;
//   fullName = name;

//   let firstSurname = document.getElementById('input-first-surname').value;
//   fullName = fullName + ' ' + firstSurname;

//   let secondSurname = document.getElementById('input-second-surname').value;
//   fullName = fullName + ' ' + secondSurname;

//   document.getElementById('full-name').innerText = fullName;
// }
// document.getElementById('button-submit').addEventListener('click', submitFullName);


//Arrow function and 'click' event:
let getName = () => document.getElementById('input-name').value;
let getFirstSurname = () => document.getElementById('input-first-surname').value;
let getSecondSurname = () => document.getElementById('input-second-surname').value;
let getFullName = () => getName() + ' ' + getFirstSurname() + ' ' + getSecondSurname();
let submitFullName = () => document.getElementById('full-name').innerText = getFullName();
// let eventListener = () => document.getElementById('button-submit').addEventListener('click', submitFullName);
// eventListener();


// 'Keyup' event:
document.getElementById('input-name').addEventListener('keyup', submitFullName);
document.getElementById('input-first-surname').addEventListener('keyup', submitFullName);
document.getElementById('input-second-surname').addEventListener('keyup', submitFullName);