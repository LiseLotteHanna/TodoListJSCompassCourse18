function addTodo() {
    let inputField = document.querySelector(".todoInputField").value;
    console.log(inputField)
    let addTodoButton
    let todoListItem = document.createElement("li");
    let todosList = document.querySelector(".todoList");
    let addTextNode = document.createTextNode(inputField);
    document.querySelector(".todoInputField").value = " ";
    todoListItem.appendChild(addTextNode);
    todosList.appendChild(todoListItem);
}