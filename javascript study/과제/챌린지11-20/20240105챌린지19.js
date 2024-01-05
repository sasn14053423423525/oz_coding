const todoList = document.getElementById('todo-list')
const todoForm = document.getElementById('todo-form')
let todoArr = [];


function saveTodos(){
    const todoString = JSON.stringify(todoArr)
    localStorage.setItem("myTodos",todoString)
}
function loadTodos(){
    const myTodos = localStorage.getItem("myTodos")
    if(myTodos !== null){
        todoArr = JSON.parse(myTodos)
        displayTodos()
        
    }
}

//할 일 삭제하기
function handleTodoBtnClick(clickedId){
    todoArr = todoArr.filter(function(aTodo){
        return aTodo.todoId !== clickedId
    })
    displayTodos()
    saveTodos()
}

//할 일 수정하기
function handleTodoItemClick(clickedId){
   todoArr = todoArr.map(function(aTodo){
        if(aTodo.todoId === clickedId){
            return {
                ...aTodo, todoDone: !aTodo.todoDone
            }
        }else{return aTodo}
        
    })
    displayTodos()
    saveTodos()
}

//할 일 보여주기
function displayTodos(){
    todoList.innerHTML=""
    todoArr.forEach(function(aTodo){
        const todoItem = document.createElement('li')
        const todoDelBtn = document.createElement('span')
        todoDelBtn.textContent = 'x'
        todoItem.textContent = aTodo.todoText
        todoItem.title="클릭하면 완료 됨"
        todoDelBtn.title="클릭하면 삭제 됨"
        if(aTodo.todoDone){
            todoItem.classList.add("done")
        }else{
            todoItem.classList.add("yet")
        }
        todoItem.addEventListener("click",function(){
            handleTodoItemClick(aTodo.todoId)
        })
        todoDelBtn.addEventListener("click",function(){
            handleTodoBtnClick(aTodo.todoId)
        })
        todoList.appendChild(todoItem)
        todoItem.appendChild(todoDelBtn)
    })
}

//할 일 추가하기
todoForm.addEventListener("submit",function(e){
    e.preventDefault()

        const toBeAdded ={
            todoText:todoForm.todo.value,
            todoId: new Date().getTime(),
            todoDone:false
        }
        todoForm.todo.value=""
        todoArr.push(toBeAdded)
        displayTodos()
        saveTodos()
})
//이해가 잘 안돼서 영상을 여러번 돌려보는데도 사실 이해가 잘 안돼요
//쓰여진 코드를 읽을 순 있는데 아무것도 없는 상태에서 쓰라고하면 못 쓸것 같아요 
//복습 열심히 하겠습니당