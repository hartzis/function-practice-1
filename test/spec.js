// describe("Module", function() {
//     it("should do something", function() {
//         expect(true).toEqual(false);
//     });
// });


// describe('tripleFive should print out Five! three times', function(){
// 	it("should log out three 'Five!'s", function() {
// 		expect(tripleFive())
// 	})
// })

describe("lastLetter should output the last letter of a string", function() {
    it("should log out last letter of string", function() {
        expect(lastLetter('yup')).toBe('p');
        expect(lastLetter('yu')).toBe('u');
        expect(lastLetter('y')).toBe('y');
    });
});

describe("square should square the argument number", function() {
    it("should square the argument", function() {
        expect(square(2)).toBe(4);
        expect(square(3)).toBe(9);
        expect(square(5)).toBe(25);

    });
});

describe("negate should return the negative of the argument", function() {
    it("should return the negative of the argument", function() {
        expect(negate(3)).toBe(-3);
        expect(negate(5)).toBe(-5);
        expect(negate(-8)).toBe(8);
    });
});

describe("'toArray' which takes three arguments and returns an array with each of those arguments as items.", function() {
    it("should make an array from a list", function() {
        expect(toArray(1, 4, 5)).toEqual([1, 4, 5]);
        expect(toArray(8, 9, 10)).toEqual([8, 9, 10]);
    });
});


describe("startsWithA which takes a string and returns true if it starts with an a", function() {
    it("should be true if starts with a", function() {
        expect(startsWithA('aardvark')).toBe(true);
        expect(startsWithA('bear')).toBe(false);
    });
});

describe("'excite' which takes a single string argument and returns the given string plus three exclamation marks.", function() {
    it("should add '!!!' to the end of a string", function() {
        expect(excite('yes')).toBe('yes!!!');
        expect(excite('go')).toBe('go!!!');
    });
});

describe("'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.", function() {
    it("should return true if word has 'sun' in it", function() {
        expect(sun('sundries')).toBe(true);
        expect(sun('asunder')).toBe(true);
        expect(sun('catapult')).toBe(false);
    });
});

describe("'tiny' which takes a single number argument and returns true if the number is between 0 and 1.", function() {
    it("should return true if number between 0-1", function() {
        expect(tiny(0.3)).toBe(true);
        expect(tiny(14)).toBe(false);
        expect(tiny(-5)).toBe(false);
    });
});

describe("'getSeconds' which takes a single string argument in the format 'MM:SS' (hours, minutes, and seconds) and returns the total number of seconds represented by that timespan.", function() {
    it("should return total seconds of minutes and seconds", function() {
        expect(getSeconds('01:30')).toBe(90);
        expect(getSeconds('10:25')).toBe(625);

    });
});