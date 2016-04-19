var myList = [];
var task = function (name, rate) {
  this.name = name;
  this.rate = rate;
};
var addItem = function (NAME, RATE) {
  var myTask = new task(this.NAME, this.RATE);
  myList.push(myTask);
};
