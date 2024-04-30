export function capitalize(string){
    return string[0].toUpperCase();
}

export function reverseString(string){
    return string.split('').reverse().join('');
}

export const calculator = {
    valueCheck : function(num1, num2){
        if(typeof(num1) === 'number' && typeof(num2) === 'number') return [num1, num2];
        else return;
    },

    add : function(num1, num2){
        if(this.valueCheck(num1, num2)) return num1 + num2;
    },

    subtract : function(num1, num2){
        if(this.valueCheck(num1, num2)) return num1 - num2;
    },

    divide : function(num1, num2){
        if(num2 !== 0 && this.valueCheck(num1, num2)) return num1 / num2;
    },

    multiply : function(num1, num2){
        if(this.valueCheck(num1, num2)) return num1 * num2;
    },
}

export function caesarCipher(string, shiftFactor = 0){
    const lettersOnly = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const lettersAndPunctuation = ['.',',','?','!','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const newString = [];
    let punctuationIncluded = false;
    let index = 0;

    if(string.match(/[.,?!]/)) punctuationIncluded = true;

    while(newString.length < string.length){
        const char = string[index];

        if(char === ' '){
            newString.push(char);
        }else{
            const plainAlphabet = punctuationIncluded ? lettersAndPunctuation.slice() : lettersOnly.slice();
            let isUpperCase = (char === char.toUpperCase() && !(char.match(/[.,?!]/))) ? true : false;
            let arrayPosition = punctuationIncluded ? lettersAndPunctuation.indexOf(char.toLowerCase()) : lettersOnly.indexOf(char.toLowerCase());

            arrayPosition += shiftFactor;
            arrayPosition = (arrayPosition >= plainAlphabet.length) ? arrayPosition - plainAlphabet.length : arrayPosition;

            if(isUpperCase) newString.push(plainAlphabet[arrayPosition].toUpperCase());
            else newString.push(plainAlphabet[arrayPosition]);
        }

        index++;
    }

    return newString.join('');
}

export function analyzeArray(arr){
    const obj = {};

    arr.sort((a,b) => a - b);
    obj.average = arr.reduce((sum, addend) => sum + addend) / arr.length
    obj.min = arr[0];
    obj.max = arr[arr.length - 1];
    obj.length = arr.length;

    return obj;
}
