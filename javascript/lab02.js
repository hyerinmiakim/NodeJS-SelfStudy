// ---------------------- function ------------------------------- //
var func1 = function func(arg, arg2) {
	var i = 1;
	while (i < 10) {
		document.write('omg!!!' + String(i) + arg + arg2 + '<br />');
		i++;
	}
	return 'end';
}
func1('hello121', 444); //함수 선언 후, 반드시 호출해주어야 함 
/*
   alert(func('hello! ', 33)); //alert이 먼저 실행되고, 웹 페이지 업데이트 됨.
   num();  // undefined, undefined
   func('hello121', 444); //var로 묶여있지 않으면 실행되지 않음 
 */

// ---------------------- Array ------------------------------- //
var array = ['hyerin',, 'hello']
alert(array);	// 문자열 처럼 	hyerin,,hello가 나옴
alert(array[1]) // undefined
alert(array[2]) 

function func2 () {
		var array2 = ['this is array', 'hello', 'bye']
			//return array2;
			return ['hlkim','javascript', undefined]
	}
alert(func2());

var ret_val = func2();
document.write(ret_val[0]);
document.write(ret_val[0].length);
document.write('<br />')

for(i = 0; i < ret_val.length; i++)
{
	document.write(ret_val[i].toUpperCase())	//모두 대문자로
	document.write('<br />')
}

for (var idx in ret_val) {
	console.log(idx); //인덱스가 표시 (0,1,2 .. )
	console.log(ret_val[idx])	//배열 원소가 표시
}

function func2_array () {
	var arr = [4,28,6,4];

	document.write(arr);
	document.write('<br />');

	arr.push(5);	// 맨 뒤에 원소 한 개 추가
	document.write(arr + '<br />');

	arr = arr.concat(6,7);	// 맨 뒤에 원소 복수개 추가
	arr = arr.concat(8);
	arr = arr.concat([9, 10]);
	document.write(arr + '<br />');

	arr.unshift(0); // 맨 앞에 추가
	document.write(arr + '<br />');

	arr.shift();	//맨 앞에 원소 제거 
	document.write(arr + '<br />');

	arr.pop();	//맨 뒤에 원소 제거
	document.write(arr + '<br />');

	document.write(arr.length + '<br />');
	arr.splice(2,0,100)	// 2번째 idx뒤에 0개의 숫자를 제거하고, 100 을 넣는다. (arr idx 시작: 1, 2, ...)
		document.write(arr + '<br />');
	document.write(arr.length + '==== <br />');

	arr.sort();	// 오름 차순 정렬 (100,28,4,4,5,6,6,7,8,9), 문자 기준으로 정렬이라, 잘 안됨 (자체 비교 함수 만들어야함.)
	document.write(arr + '<br />');

	arr.reverse();	// 내림 차순 정렬 (9,8,7,6,6,5,4,4,28,100)
	document.write(arr + '=========<br />');

	function sortfunc (a,b) {
		return a > b	//오름 차순 정렬	
	}

	arr.sort(sortfunc)
		document.write(arr + '<br />'); // 4,4,5,6,6,7,8,9,28,100

	var arr2 = ['y', 'v', 'b']
		arr2.sort(sortfunc)
		document.write(arr2 + '<br />');

	return arr;
}
func2_array();

