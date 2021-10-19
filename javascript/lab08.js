/* 상속 */
function Person(name){
  this.name = name;
}
Person.prototype.name=null;
Person.prototype.introduce = function(){
  return 'My name is '+this.name; 
}

function Programmer(name){
  this.name = name;
}
Programmer.prototype = new Person();
// Programmer의 prototype에 Person 생성자를 넣음. 
// == Programmer는 Person을 상속한다.
Programmer.prototype.coding = function () { // 이는 Person 객체에서는 접근 못할 것
  return "hello world!";
}

function Designer(name){
  this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.design = function () { // 이는 Person 객체에서는 접근 못할 것
  return "Beautiful!";
}

var p1 = new Programmer('egoing');
document.write(p1.introduce()+"<br />");
document.write(p1.coding()+"<br />");

var p2 = new Designer('hlkim');
document.write(p2.design()+"<br />");
document.write(p2.introduce()+"<br />");

/* 무작위로 도시 고르기 */
var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
function func1(city) {
  var index = Math.floor(city.length*Math.random());
  // Math.random() : 0 ~ 1 사이의 소수를 가지고 온다.
  return city[index];
}

console.log(func1(arr));

/* 배열 기본 객체의 prototype에 해당 함수 추가하기 */
Array.prototype.rand = function() {
  var index = Math.floor(this.length*Math.random());
  return this[index];
}

var arr = new Array('seoul','new york','ladarkh','pusan', 'Tsukuba');
console.log(arr.rand());

/* Object.keys() : key값만 출력 */
var arr = ["a", "b", "c"];
console.log('Here is printed : ', Object.keys(arr));  // 0,1, 2

/* Object.prototype.toString() */
var o = new Object();
var a = new Array(1, 2, 3);
console.log('Here is prototype.toString: ', o.toString());
console.log('Here is proto~', a.toString());


Object.prototype.contain  = function(value) {
  for(var name in this) {
    if(this[name] === value) {
      return true;
    }
  }
}
var hi  = {'hello':'hlkim', 'hlkim':'bye'};
console.log(hi.contain('hlkim')); //value 중 해당 값을 포함한다면 true, 아니면 false

var bye = ['fall', 'cool', 'time'];
console.log(bye.contain('time'));

