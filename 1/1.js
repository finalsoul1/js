// 한줄 주석
/* 범위 주석
 */
/** 도큐먼트 주석
 */

/*
  JS는 클래스가 없다
*/

// 문법 외우자
// 문법이 왜 그럴까? WHY?

// class Start {
//   public static void main(String[] args) {
//     // global.b = 100; //설계도 대로 써야한다
//     X x = new X();
//     x.print();
//   }
// }
// class X {
//   int a = 10;
//   public void print(int a) {
//     system.out.println(a);
//   }
// }

//JS는 파일자체가 기동메소드, 따라서 기동메소드가 필요없다
global.b = 100;
//변수b 생성해서 100을 넣음. 설계도 개뿔, 하고 싶은 대로 해라
//First Class : JS 객체는 일급 객체다

var a = 10;

function print(a) {
  console.log(a);
}

print(a);
