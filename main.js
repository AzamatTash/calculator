function calc(a,x,y) {

    const isNotNumber = typeof x !== 'number' || typeof y !== 'number'; 
   
    if (isNotNumber) {
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
            switch (y) {
                case 0:
                    return 'Error';
                    break;
            }
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

console.log(calc('div',10,0));
