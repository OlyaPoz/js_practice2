'use strict';

/*Реализовать функцию конструктор MyArray.*/
function MyArray(){};
MyArray.prototype = new Array();

/*Реализовать следующие методы функции конструктора:
MyArray.isMyArray();  // подсказка: instanceof */
const testArr = [1, 2, 3];
const arr = new MyArray();
console.log(arr instanceof MyArray);

/*Реализовать прототип для создаваемых коллекций, 
со следующими методами:
MyArray.prototype.push(); */ 
testArr.push(4);
console.log(testArr);

/*MyArray.prototype.pop(); // tip: delete */
testArr.pop();
console.log(testArr);

/*MyArray.prototype.unshift();*/
testArr.unshift(0);
console.log(testArr);

/*MyArray.prototype.shift(); */
testArr.shift();
console.log(testArr);

/* MyArray.prototype.concat();*/
const test = testArr.concat(4, 5, 6);
console.log(test);

/*MyArray.prototype.reverse(); */
const test1 = test.reverse();
console.log(test1);

/*MyArray.prototype.forEach(); */
let sum = null;
testArr.forEach(element => sum += element);
console.log(sum);

/*MyArray.prototype.map(); */
let res = testArr.map(element => element * 2);
console.log(res);
