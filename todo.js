const list = {
    'creat a task': 'In Progress',
    'make a bed': 'Done',
    'write a post': 'To Do',
}

const ToDo = 'To Do';
const InProgress = 'In Progress';
const Done = 'Done';

function changeStatus(task, status) {
    list[task] = status;
}

function addTask(task) {
    list[task] = ToDo;
}

function deleteTask(task) {
    delete list[task];
}


let quantityTask = 0;

function showList () {

    console.log('To Do:')
    for (key in list) {
        if (list[key] === ToDo) {
            console.log(` ${key},`);
            quantityTask++;
        }
        
    }
    if (quantityTask === 0) {
        console.log('-');
    }
    quantityTask = 0;

    console.log('In Progress:')
    for (key in list) {
        if (list[key] === InProgress) {
            console.log(` ${key},`);
            quantityTask++;
        }
    }
    if (quantityTask === 0) {
        console.log('-');
    }
    quantityTask = 0;

    console.log('Done:')
    for (key in list) {
        if (list[key] === Done) {
            console.log(` ${key},`);
            quantityTask++;
        }
        
    }
    if (quantityTask === 0) {
        console.log('-');
    }

}

addTask('write a letter');
showList();
console.log('\n')
changeStatus('write a letter', InProgress);
showList();
console.log('\n')
changeStatus('write a letter', Done);
showList()
console.log('\n')
deleteTask('write a letter');
deleteTask('make a bed');
showList();
