function calc(a,x,y) {

    const isNotNumber = typeof x !== 'number' || typeof y !== 'number'; 
    const isNotValid = x == undefined || !y ;

    if (isNotNumber || isNotValid) {
        return 'Error';
    }       
    
    switch (a)  {
        case 'pow':
            return x ** y;
            break;
        case 'sum':
            return x + y;
            break;
        case 'sub':
            return x - y;
            break;
        case 'multi':
            return x * y;
            break;
        case 'div':
            return x / y;
            break;
        case 'remDiv':
            return x % y;
            break;
        default:
            return "Unknown operation";
            break;
    }
    
}

console.log(calc('iv',10,10));
