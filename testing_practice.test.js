import { capitalize, reverseString, calculator } from './testing_practice';

describe('capitalize first letter', () => {
    test('all lowercase', () => {
        expect(capitalize('teddy')).toBe('T');
    });

    test('first letter capitalized', () => {
        expect(capitalize('Cindy')).toBe('C');
    });

    test('multiple capitalized letters', () => {
        expect(capitalize('McCraig')).toBe('M');
    });
});


describe('reverse the string', () => {
    test('one word', () => {
        expect(reverseString('Egg')).toBe('ggE');
    });

    test('multiple words and punctuation', () => {
        expect(reverseString('Reverse this!')).toBe('!siht esreveR');
    });

    test('numbers and punctuation', () => {
        expect(reverseString('25!?36678-')).toBe('-87663?!52');
    });
});

describe('calculator functions', () => {
    describe('addition', () => {
        test('number plus number', () => {
            expect(calculator.add(5, 10)).toEqual(15);
        });

        test('string plus number', () => {
            expect(calculator.add('8', 20)).toBe('Invalid Input');
        });

        test('neg. number plus neg. number', () => {
            expect(calculator.add(-6, -10)).toEqual(-16);
        });

        test('floating point plus floating point', () => {
            expect(calculator.add(1.1,5.6)).toBeCloseTo(6.7);
        });
    });
    
    describe('subtraction', () => {
        test('number minus number', () => {
            expect(calculator.subtract(6, 4)).toEqual(2);
        });

        test('string minus number', () => {
            expect(calculator.subtract('9', 2)).toBe('Invalid Input');
        });

        test('pos. number minus neg. number', () => {
            expect(calculator.subtract(3, -8)).toEqual(11);
        });

        test('neg. number minus neg. number', () => {
            expect(calculator.subtract(-5, -1)).toEqual(-4);
        });
    });
    
    describe('division', () => {
        test('number divided by number', () => {
            expect(calculator.divide(1, 4)).toEqual(.25);
        });

        test('string divided by number', () => {
            expect(calculator.divide('0', 7)).toBe('Invalid Input');
        });

        test('number divided by 0', () => {
            expect(calculator.divide(10, 0)).toBeUndefined();
        });

        test('pos. number divided by neg. number', () => {
            expect(calculator.divide(2, -1)).toEqual(-2);
        });
    });
    
    describe('multiplication', () => {
        test('number multiplied by number', () => {
            expect(calculator.multiply(6, 4)).toEqual(24);
        });

        test('string multiplied by number', () => {
            expect(calculator.multiply('17', 2)).toBe('Invalid Input');
        });
        
        test('pos. number multiplied by neg. number', () => {
            expect(calculator.multiply(3, -8)).toEqual(-24);
        })
        test('neg. number multiplied by neg. number', () => {
            expect(calculator.multiply(-5, -1)).toEqual(5);
        });
    });
});

describe('confirm ciphers are generating correctly', () => {
    test('wrapping from z to a', () => {
        expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 3)).toBe('defghijklmnopqrstuvwxyzabc');
    });

    test('keeping the same case', () => {
        expect(caesarCipher('Apple Bottom Jeans', 5)).toBe('Fuuqj Gtyytr Ojfsx');
    });

    test('words with punctuation', () => {
        expect(caesarCipher('boots with the fur!', 2)).toBe('dqqvu ykvj vjg hwtb');
    });

});

describe('get basic info about array contents', () => {
    test('array of positive numbers', () => {
        expect(analyzeArray([1,2,3,4,5,6])).toEqual({'average': 3.5, 'min': 1, 'max': 6, 'length': 6});
    });

    test('array of all the same numbers', () => {
        expect(analyzeArray([1,1,1,1])).toEqual({'average': 1, 'min': 1, 'max': 1, 'length': 4});
    });

    test('array of negative numbers', () => {
        expect(analyzeArray([-7,-2,-5,-4,-2])).toEqual({'average': -4, 'min': -7, 'max': -2, 'length': 5});
    });
});
