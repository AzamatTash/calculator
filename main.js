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

    if (isNotNumber) {
        return 'Error';
    } else if (a in operations) {
        return operations[a];
    } else {
        return 'unknown operation';
    }
} 


console.log(calc('div',10,0));
