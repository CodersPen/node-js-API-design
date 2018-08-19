const arrays = require('../src/arrays');

describe('find', () => {
    test('it finds an element when it exists in the array', () => {
        const haystack = [1, 2, 3, 4];
        const needle = arrays.find(1, haystack);

        expect(needle).toEqual(1);
    });

    test('it throws an error when it receives and undefined element', () => {
        const haystack = [1, 2, 3, 4];

        expect(() => { arrays.find(undefined, haystack); }).toThrow();
    });

    test('it return null when it does not find the element inside the array', () => {
        const haystack = [1, 2, 3, 5];
        const needle = arrays.find(4, haystack);

        expect(needle).toEqual(null);
    });
});
