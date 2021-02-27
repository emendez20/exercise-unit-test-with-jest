// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
describe("conversion moneda", function () {

    test("One euro should be 1.206 dollars", function () {
        //import the function from app.js
        const { fromEuroToDollar } = require('./app.js')

        // use the function like its supposed to be used
        const dollars = fromEuroToDollar(3.5)

        // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
        const expected = 3.5 * 1.2;

        // this is the comparison for the unit test
        expect(expected).toBe(dollars);
    });

    test("One dollar should be 106.5 yens", function () {
        //import the function from app.js
        const { fromDollarToYen } = require('./app.js')

        // use the function like its supposed to be used
        const yens = fromDollarToYen(10)

        // if 1 dollar are 106.5 yens, then 10 dollars should be (10 / 1.2 * 127.9)
        const expected = 10 * 106.5;

        // this is the comparison for the unit test
        expect(expected).toBe(yens);
    });

    test("One yen should be 0.0067 pounds", function () {
        //import the function from app.js
        const { fromYenToPounds } = require('./app.js')

        // use the function like its supposed to be used
        const pounds = fromYenToPounds(1000);

        // if 1 yen is 0.0067 pounds, then 1000 yens should be (1000 * 0.0067)
        const expected = 1000 * 0.0067;

        // this is the comparison for the unit test
        expect(expected).toBe(pounds);
    });

});