var myList = [];
var task = function (name, rate) {
  this.name = name;
  this.rate = rate;
};
var addItem = function (TITLE, NAME, RATE) {
  this.title = new task(NAME, RATE);
  myList[myList.length] = this.title;
};
