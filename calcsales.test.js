const {calculateTotalSales, findEmployeeById} = require(`./calcsales`);

test (`test adding of total sales`, () => {
    expect(calculateTotalSales()).toBe(2163.89);
});


test (`test real employee find`, () => {
    expect(findEmployeeById(3)).toBe(`Employee ID: 3, First Name: Fred, Last Name: Jones`);
    
});

test (`test not real employee find`, () => {
    expect(findEmployeeById(6)).toBe(`Employee not found!`);
    
});

