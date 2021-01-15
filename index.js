'use strict';

/*Реализовать функцию конструктор MyArray.*/
function MyArray() {
  this.length = 0;
  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
}
//MyArray.prototype = new MyArrayProto();

/*Реализовать следующие методы функции конструктора:
MyArray.isMyArray();  // подсказка: instanceof */
MyArray.isMyArray = function (obj) {
  return obj instanceof MyArray;
};

/*Реализовать прототип для создаваемых коллекций, 
со следующими методами:
MyArray.prototype.push(); */ 
this.push = function push() {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
    ++this.length;
  }
  return this.length;
};

/*MyArray.prototype.pop(); // tip: delete */
this.pop = function pop() {
  if (this.length <= 0) {
    return;
  }
  const lastItem = this[this.length - 1];
  delete this[--this.length];
  return lastItem;
};


/*MyArray.prototype.unshift();*/
this.unshift = function unshift(item) {
  for (let i = this.length; i > 0; i--) {
    this[i + 1] = this[i];
  }
  for(let i = 0; i < item.length; i++) {
   this[i] = item[i];
  }
  return item.length;
};

/*MyArray.prototype.shift();*/

this.shift = function shift() {
  if (this.length > 0){
  const firstItem = this[0];
  delete this[0];
  for(let i = 0; i < this.length; i++){
    this[i] = this[i + 1];
  }
  delete this[--this.length];
  return firstItem;
  }
}; 

/* MyArray.prototype.concat();*/
this.concat = function concat(myArrayInstance) {
  const result = new MyArray();

  for (let i = 0; i < this.length; i++) {
    result.push(this[i]);
  }

  for (let i = 0; i < myArrayInstance.length; i++) {
    result.push(myArrayInstance[i]);
  }

  return result;
};

/*MyArray.prototype.reverse(); */
this.reverse = function reverse() {
  const copy = new MyArray();
  for (let i = 0; i < this.length; i++) {
    copy.push(this[i]);
  }
  for (let i = 0; i < this.length; i++) {
    this[i] = copy.pop();
  }
  return this
};

/*MyArray.prototype.forEach(); */
this.forEach = function forEach(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

/*MyArray.prototype.map(); */
this.map = function map(cb) {
  const result = new MyArray();
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};