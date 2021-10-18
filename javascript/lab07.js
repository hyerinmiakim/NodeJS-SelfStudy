var person = {}
person.name = 'egoing';
person.introduce = function(){  // 객체의 속성 중 함수 형태인 것. == 메소드
    return 'My name is '+this.name; // this : 해당 함수를 가지고 있는 객체 가리킴
}
document.write(person.introduce());

/* 같은 표현 (가독성, 응집성이 더 좋음) */
var person = {
  'name' : 'egoing',
  'introduce' : function(){
      return 'My name is '+this.name;
  }
}
document.write(person.introduce());

/* 객체 */
function Person(){}
var p = new Person(); // 함수의 형태를 갖는 객체를 새로 생성해서 p에 넣음
p.name = 'egoing';
p.introduce = function(){
    return 'My name is '+this.name; 
}
document.write(p.introduce());

/* 생성자를 이용해 코드의 중복을 줄인다 */
function Person(name){
  this.name = name;
  this.introduce = function(){
      return 'My name is '+this.name; 
  }   
}
var p1 = new Person('egoing');
document.write(p1.introduce()+"<br />");

var p2 = new Person('leezche');
document.write(p2.introduce());

/* this */
function func(){
  if(window === this){  // 웹 페이지에서는 전역 객체(window)가 func의 객체이다
      console.log("window === this");
  }
}
func(); 

/* 메소드에서의 호출 */
var o = {
  func : function(){
      if(o === this){
          console.log("o === this");
      }
  }
}
o.func();

/* new의 존재 */
var funcThis = null; 
 
function Func(){
    funcThis = this;
}

/* 0. new 없이 호출 */
var o1 = Func();
if(funcThis === window){
    document.write('window <br />');
}
 
/* 1. new와 호출*/
var o2 = new Func();
if(funcThis === o2){
    document.write('o2 <br />');
}

/* Apply */
var o = {}	//객체 생성
var p = {}
function func(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func();	// 함수로서 호출. 객체: window
func.apply(o);	// func의 this가 객체 o를 가리키도록 생성하는 것. 
func.apply(p);

/* call */
type = "zero"; 
var type1 = { type: "one" }; 
var type2 = { type: "two" }; 
function getType() { 
    console.log(this.type); 
    this.type = "hello";	// this의 type 변경
}
getType(); 	// zero
getType.call(this);	//zero 
getType.call(type1);	//one
getType.call(type2);	//two

/* bind */
var obj = {
  string: 'zero',
  yell: function() {
    alert(this.string);
  }
};
var obj2 = {
  string: 'what?'
};
var yell2 = obj.yell.bind(obj2);
yell2(); // 'what?'

