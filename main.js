function calc(a,x,y) {

    if (x == undefined || !y || (typeof x !== 'number') || (typeof y !== 'number')) {
        result = 'Error'
    } else if (a === 'pow') {
        result = x ** y;
    } else if (a === 'sum') {
        result = x + y;
    } else if (a === 'sub') {
        result = x - y;
    } else if (a === 'multi') {
        result = x * y;
    } else if (a === 'div') {
        result = x / y;
    } else if (a === 'remDiv') {
        result = x % y;
    } else {
        result = "Unknown operation"
    }
    return result;
    
}

console.log(calc('sum',1,1));
