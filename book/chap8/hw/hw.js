var buttonAdd = document.getElementById('buttonAdd'); 
var inputTitle = document.getElementById('inputTitle');
var target = document.getElementById('target');

// 데이터 배열
let todos = [];
let id = 0;

// 배열에 추가하는 함수
function addTodo(title) {
  id = todos.length + 1;
  let todo = {
    id,
    title,
    done: false
  };
  todos.push(todo)
}

// 배열의 데이터를 조회하는 함수
function getTodos() {
  return todos;
}

// 화면에 표시
function init() {
  var todos = getTodos();
  var html = '';
  target.innerHTML = '';
  for (var todo of todos) {
    html =`
    <tr class=${todo.done}>
      <td>${todo.id}</td>
      <td>${todo.title}</td>
      <td>
        <button type="button" onclick="buttonDone(${todo.id})">완료</button>
        <button type="button" onclick="buttonDelete(${todo.id})">삭제</button>
      </td>
    </tr>
    `;
    target.innerHTML += html;
  }
}
init();

// 데이터 입력받는 함수
buttonAdd.addEventListener('click', function () {
  var title =  inputTitle.value;
  addTodo(title);
  init();
  inputTitle.value = '';
})

// 배열의 객체의 done 값을 변경하는 함수 #A
function doneTrue(id) {
  todos[id-1].done = !(todos[id-1].done);
}

// 배열의 해당 객체를 삭제하는 함수 #B
function tableErase(id) {
  todos.splice((id-1), 1);
}

function buttonDone(id) {
  // #A 함수 호출
  // text-decoration: line-through;
  doneTrue(id);
  init();
}

function buttonDelete(id) {
  // #B 함수 호출
  tableErase(id);
  init();
}

