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