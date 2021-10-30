// Переменные---------------------------------------

let x = +prompt('Введите число');
let a = prompt('Введите опирацию');
let y = +prompt('Введите число');

// Функция для проверки вычесляемых значений-------

function checkValue(a,x,y) {

    if (a == '' || x == '' || y == '') {
        return false;
    } else if (!a || !x || !y) {
        return false;
    } else {
        return true;
    }

}

// Функция калькулятора-----------------------------

function calc(a,x,y) {

    if (checkValue(a,x,y)) {

        if (a == '^') {
            alert('итог : ' + pow(x,y));
        } else if (a == '+') {
            alert('итог : ' + sum(x,y));
        } else if (a == '-') {
            alert('итог : ' + sub(x,y));
        } else if (a == '*') {
            alert('итог : ' + multi(x,y));
        } else if (a == '/') {
            alert('итог : ' + div(x,y));
        } else if (a == '%') {
            alert('итог : ' + remDiv(x,y));
        } else {
            alert('Unknown operation');
        }   

    } else {
        alert ('Error');
    }
   
}

// Вызов функции калькулятора-----------------------

calc(a,x,y);

// Математические опирации---------------------------

// Возведение в степень
function pow(x,y) {
    return x ** y;   
}

// Сумма
function sum(x,y) {
    return x + y;   
}

// Вычитание
function sub(x,y) {
    return x - y;   
}

// Умножение
function multi(x,y) {
    return x*y;   
}

// Деление
function div(x,y) {
    return x / y;   
}

// Остаток от деления
function remDiv(x,y) {
    return x % y;   
}

























