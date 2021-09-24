var func1 = function welcome() {
	document.write('hello hyerin');
}

//정규표현식 리터럴
var pattern = /a/;	//a가 바로 찾고자 하는 것
var pattern1 = new RegExp('a');	//Regular Expression. 정규 표현식 객체
// /a/ == new RegExp('a')
console.log(pattern.exec('abcdef'));	//a 가 담긴 문자열로 리턴 or null
pattern.test('abcdef')	//값이 있으면 true, 없으면 false

// string 에서 값 찾기
// 찾기
var str = 'abrcd';
str.match(pattern);
// 변경 
str.replace(pattern, 'A');	// 있으면 변경, 없으면 교체X

/* 대소문자 구분 안하고 찾기 */
var oi = /a/i;
"arar".match(oi);

/* 해당 되는 애 모두 찾기 */
var og = /a/g;	
console.log("abcdea".match(og));	// 해당하는 아이들 모두 한 문자열에 담아서 리턴

/* 캡쳐 :  해당 표현식의 패턴을 가지고 와서 재사용하는 것 */
var pattern = /(\w+)\s(\w+)/;	
/* 
	(): 그룹. 변수처럼 재사용 가능 
	\w : 알파벳이나 digit	--> 유효한 문자열을 한 그룹으로 지정
	+ : 수량자. 앞의 패턴이 한 개 이상이어야 유효
	\s : space
*/
var str = "coding everybody";
var result = str.replace(pattern, "$2, $1");
//공백을 사이로 유효한 문자열이 있다면, 패턴안의 두번째 (그룹)와 첫번째(그룹)을 치환
console.log(result);

/* 치환:  */
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
		/*
			urlPattern에 적합한게 있다면, function(url)의 인자로 넘겨줌.
		 */
});
console.log(result);