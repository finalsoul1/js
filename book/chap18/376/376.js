const para1 = document.getElementsByTagName('p')[0];

console.log(para1.textContent);
console.log(para1.innerHTML);

// 태그도 문자열로 취급하여 그대로 화면에 출력한다.
// 스탠다드 문법
// para1.textContent = "<i>Modified</i> HTML file"; 

// textContent의 사투리 문법
// para1.innerText = "<i>Modified</i> HTML file";

// 태그는 처리되고 문자열은 그냥 출력된다.
para1.innerHTML = "<i>Modified</i> HTML file";


const p1 = document.createElement('p');
const p2 = document.createElement('p');

p1.textContent = "I was created dynamically!";
p2.textContent = "I was also created dynamically!";


const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];

// firstChild 앞에 p1을 집어 넣어라
parent.insertBefore(p1, firstChild);

// 마지막자식을 추가: 이건 항상 뒤로 삽입
parent.appendChild(p2);