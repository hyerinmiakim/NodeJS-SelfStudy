/*
var vscode = 'global';
function fscope() {
  var vscode = 'local';
  alert(vscode);  // 전역, 지역이 같이 되어있을 경우 지역 호출
  for(i = 0; i < 3; i++) {
    var vscode2 = 'for';
  }  
  vscode = 'local2';  // local vscode에 대입됨
  vscode = vscode2; // for문 안에 vscode2를 선언했어도, 같은 함수 내에서는 사용할 수 있음.
}
fscope();
alert(vscode + 'jui');  //함수에 local "선언"형태로 되어 있다면 global이고, "대입"형태로 되어있으면 local로 나옴
*/

/* 안전하게 전역변수 사용하는 예 1 
  사용하고자 하는 객체의 속성값으로 값을 넣고, 계산한다.

var myapp = {};
myapp.calculator = {  //피연산잔의 각 항
'left' : null,
'right' : null
}
myapp.coordinate = {  //오직 위치를 의미
  'left' : null,
  'right' : null
}

myapp.calculator.left = 90;
myapp.calculator.right = 30;
function sum() {
  return myapp.calculator.left + myapp.calculator.right;
}
document.write(sum())
*/
/* 안전하게 전역변수 사용하는 예 2
  함수 선언 후 (함수) 형태로 묶어주면, 전역변수가 지역변수처럼 됨. 
  만약, function myappfun() {...} 로 선언을 하게되면,
  myappfun 자체도 변수 안에 함수가 있는 것이기 때문에, myappfun 변수가 전역변수가 됨

(function() {
var myapp = {};
myapp.calculator = {  //피연산잔의 각 항
'left' : null,
'right' : null
}
myapp.coordinate = {  //오직 위치를 의미
  'left' : null,
  'right' : null
}

myapp.calculator.left = 90;
myapp.calculator.right = 30;
function sum() {
  return myapp.calculator.left + myapp.calculator.right;
}
document.write(sum())
}() //함수 선언 후 바로 사용할 때: 익명함수
)
*/

/*
  정적 유효범위 

var i = 5;
function s() {
  var i = 10;
  b();
}
function b() {
  document.write(i); 
  /* b가 i를 찾는 순서
    1. 자신의 함수에 포함되었는 가?
    2. 전역변수에 있는지?
    [!] 절대 자신을 호출한 함수에서 찾지 않아용
  
}
s();
*/

/* 객체로서의 함수 */
function cal(func, num) {
  return func(num)
}
function increase(num) {
  return num+1
}

function decrease(num) {
  return num-1
}

//alert(cal(increase, 1));
//alert(cal(decrease, 1));

function fun1(mode) {
  var funcs = {
    'plus':function(left, right) {return left+right},
    'minus':function(left, right) {return left-right}
  }
  return funcs[mode];
}
//alert(fun1('plus')(2,1));
//alert(fun1('minus')(2,1));

/* 함수를 배열에 넣을 수 있음 : 익명함수로 들어감. */
var process = [
  function(input) {return input+10},
  function(input) {return input*input},
  function(input) {return input/2},
];

var input1 =1;
for(var i = 0; i < process.length; i++)
{
  input1 = process[i](input1) //input이 이전 function[input]에 누적되어 들어감 (for문 안에 있으면 노 )
  alert(input1);
}