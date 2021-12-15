function calc(a,x,y) {
    const isNotNumber = typeof x !== 'number' || typeof y !== 'number'; 
        
    let operations = {
        sum: x + y,
        sub: x - y,
        multi: x * y,
        div: y == 0 ? 'Error' : x / y,
        pow: x ** y,
        remDiv: x % y,
    }
    
    try {
        if (isNotNumber) {
            throw new ReferenceError('Вы ввели не число!'); 
        } 
    } catch (e) {
        console.log(e.message);   
    }

    try {
        if (a in operations) {
            return operations[a];
        } else {
            throw new Error('Не известная операция!')       
        }    
    } catch (e) {
        console.log(e.message);
    }
} 

console.log(calc('div',10,2));