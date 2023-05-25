const addButton = document.getElementById('#addbutton');
const listTodo = document.getElementById('#tasks');
const deleteButton = document.getElementById('#dbtn');

let newArray = [];

function addTask() {
    const input = prompt('Add your new task..');
    let whitespace = /^[a-z][a-z\s]*$/;
    if (input.match(whitespace)) {
        for (let i = input; i < input.length; i++);
        newArray.push(input);
        let li = document.createElement('li');
        li.innerHTML = input;
        listTodo.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '&times';
        li.append(span);
    } else {
        alert('You have add Nothing to your list!!!');
    }
}
addButton.addEventListener('click', function () {
    addTask();

})

listTodo.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

listTodo.addEventListener('click', function (e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);

