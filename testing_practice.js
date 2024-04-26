export function capitalize(string){
    return string[0].toUpperCase();
}

export function reverseString(string){
    return string.split('').reverse().join('');
}

export const calculator = {

    add : function(num1, num2){
        if(typeof(num1) === 'number' && typeof(num2) === 'number') return num1 + num2;
        else return 'Invalid Input';
    },

    subtract : function(num1, num2){
        if(typeof(num1) === 'number' && typeof(num2) === 'number') return num1 - num2;
        else return 'Invalid Input';
    },

    divide : function(num1, num2){
        if(typeof(num1) === 'number' && typeof(num2) === 'number'){
            if(num2 === 0) return;
            else return num1 / num2;
        }else{
            return 'Invalid Input';
        }
    },

    multiply : function(num1, num2){
        if(typeof(num1) === 'number' && typeof(num2) === 'number') return num1 * num2;
        else return 'Invalid Input';
    },
}

