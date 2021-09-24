
/* typeof */
var i = 1;
while (i < 10) {
	document.write('omg!!!' + String(i) + '<br />');
	i++;
}
	alert(typeof true) //boolean
	alert(typeof -0) // number 
alert(typeof NaN) // number : 0/0과 같은 연산의 결과로 만들어지는 특수한 데이터 형으로, 계산할 수 없는 수 

	alert(typeof null) // object : 값이 없는 상태를 한 개체로 의도적으로 만든 것
alert(typeof undefined) // undefined : 그냥 값이 없다

	alert(true == 1) // 숫자 1을 true로 간주, 1이 아닌 수를 false 
alert(true === 1) // boolean 과 number형이기 때문에 false를 리턴

alert(NaN === NaN) // false : 계산할 수 없는 수 끼리는 같지 않다.

/* ***** prompt() : 사용자의 입력값을 읽음 (scanf와 비슷) **** */
id = prompt('아이디를 입력해주세요.')
if (id == 'hlkim') {
	alert('아이디가 일치 합니다.')
} else {
	alert('아이디가 일치하지 않습니다.')
}

/* ********* false로 간주되는 데이터 형 ******** */
if (!'') {	// 빈 문자열은 false로 인식
	alert('빈 문자열')
}

if (!undefined) {
	alert('undefined')
}

var a;
if (!a) {
	alert('값이 할당되지 않은 변수');
}

if (!null) {
	alert('null');
}

if (!NaN) {
	alert('NaN');
}

document.write('omg!!!'); //: 창에 출력
document.write('omg!!!' + '<br />');	//: <br/ > = 개행
document.write('omg!!!' + String(i) + '<br />');	//:  String (int to String ) 함수 

