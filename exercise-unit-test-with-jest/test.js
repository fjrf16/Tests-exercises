// import function sum from app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// The test for the sum
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    // the value we expected for the test
    expect(total).toBe(23);
});

// The test for the convert functions into another divise
test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

test("One dollar should be 127.9 yen", function(){
    const { fromDollarToYen } = require('./app.js')
    
    expect(fromDollarToYen(3.5)).toBe(447.65); 
})

test("One yen should be 0.8 pound", function(){
    const { fromYenToPound } = require('./app.js')
    
    expect(fromYenToPound(3.5)).toBe(2.8); 
})

