
const myList = document.querySelector('.myList');
const button = document.querySelector('.addbtn');
const listTodo = document.querySelector('.todo');
button.addEventListener('click', function () {
    addTask();
})

function addTask() {
    const input = prompt('Add your new task!');
    if (input === '') {
        alert('You have add NOTHING to your list!!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input;
        listTodo.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '&times';
        li.append(span);
    }
}
listTodo.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);
