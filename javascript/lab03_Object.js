 /* 객체 
  - 여러 컨테이너 (배열)의 인덱스를 객체화하는 것 (C++ 에서 map 컨테이너가 객체의 예)
  */
    /* 생성법 1 */
    var grades = {'hyerin':10, 'javascript': 15, 'social':40};
    // " Key : value " 형태를 가짐
    /* 생성법 2 */
    var grades1 = {};
    grades1['hyerin'] = 20;
    grades1['javascropt'] = 115;
    /* 생성법 3 */
    var grades2 = new Object();
    grades2['hyerin'] = 30;

    /* 접근 */
    var item = grades['hyerin']; // 10
    var item2 = grades.hyerin;
    var item3 = grades['hye' + 'rin'];
   // var item4 = grades.'hye'+'rin'; // syntax error

   /* 반복 
   - 배열을 사용하는 for문과는 달리, 바로 배열 원소의 key 접근 가능. 
   */
   for(key in grades){
     document.write("key3: " + key + ", value: " + grades[key]+ "<br/ >");
     console.log(grades[key]);
    }
 
  var obj = {
    // 이중 선언. list의 value로 아래 객체가 선언
    'list' : {'hyerin' : 10, 'first' : 20, 'second' : 440},
    // value로 함수 선언 가능
    'show' : function() {
      alert("show key의 value로 이 함수가 실행됨.")
      //alert(this);  //이 함수가 속해있는 객체를 포인팅함. == obj
      for(var name in this.list) {
        console.log(name, this.list[name]); // , 는 이어서 출력하는 것.
      }
    }
  } 
  //alert(obj['list']['hyerin']);
  //obj['show']();  //객체 함수 호출
  obj.show();
