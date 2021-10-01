// ############## 클로저 ############## //
: 내부 함수가 외부 함수의 맥락(context)에 접근할 수 있는 것*/
/*function outter() {
  var title = "coding hyerin";
  function inner() {
    alert(title);
  }
  inner();
}
outter();
*/

/* 내부함수는 외부함수가 종료되어도, 외부함수의 변수를 참조할 수 있다. 
   == 외부함수는 자신의 변수를 참조하는 내부함수가 소멸될 때까지, 소멸하지 않는다.

function outter() {
  var title = "coding hyerin";
  return function() {
    alert(title);
  }
}
inner = outter(); //outter에서 return 한 내부 함수. outter는 종료됨) 
inner();  //outter는 종료되었지만, 내부함수는 외부함수의 변수를 참조하여 실행할 수 있음.
*/

/* Example : 클로저를 이용해 get/set 함수 생성하기
  자바에서는 접근지정자로 public, private을 지원하지만 javascript는 기본적으로 private속성을 지원하지 않기 때문에,
  클로저의 특성을 이용하여 파라미터를 보호할 수 있다.
  pubilc: get_title(), set_title()객체. 멤버로 리턴되었기 때문
  private: 인수롤 받은 title. factory_movie가 종료되면 외부에서 사용안됨. 
*/

function factory_movie(title) {
  return {
    get_title: function () {
      return title
    },
    set_title: function (_title) {
      if (typeof _title == 'String') {
        title = _title
      }
      else {
        alert("Not a String Type")
      }
    }
  }
}
ghost = factory_movie("Ghost in th shell"); //위 함수에서 리턴한 객체를 담음
matrix = factory_movie("Matrix");
alert(ghost.get_title());
//alert(ghost.set_title("hyerin")); //이렇게 하면 undefined이 리턴됨. --> set_title에는 리턴값이 업기 때문
ghost.set_title(4); //Error
alert(ghost.get_title());
alert(matrix.get_title());
//alert(title); //Error

/* Example 2: 5만 5번 출력됨 
  : function()에는 자신이 호출되는 순간 참조하는 
  i값이 없음. 그래서 변경된 i 만을 넣음 
  (참조할 수 있는 범위가 아니라.. )

var arr = []
  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i;
    }
  }
for (var index in arr) {
  console.log(arr[index]());
}*/
/* Example 2: 0 ~ 4 까지 출력되도록 하기 */

var arr = []
for(var i = 0; i < 5; i++) {
  arr[i] = function(id) { // i를 인자로 받아서 내부함수에서 참조할 수 있는 id를 리턴
    return function() {
      return id;
    };
  }(i)
}
for(var index in arr) {
  console.log(arr[index]());
}