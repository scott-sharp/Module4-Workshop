const employees = JSON.parse(`[{
    "id":1,
    "firstName":"John",
    "lastName":"Smith",
    "gender":"Male",
    "age":23,
    "position":"Manager"
},
{
    "id":2,
    "firstName":"Mary",
    "lastName":"Sue",
    "gender":"Female",
    "age":32,
    "position":"Salesperson"
},
{
    "id":3,
    "firstName":"Fred",
    "lastName":"Jones",
    "gender":"Non-Binary",
    "age":54,
    "position":"Salesperson"
},
{
    "id":4,
    "firstName":"Jane",
    "lastName":"Doe",
    "gender":"Female",
    "age":41,
    "position":"Accountant"
},
{
    "id":5,
    "firstName":"Joe",
    "lastName":"Bloggs",
    "gender":"Male",
    "age":65,
    "position":"IT Administrator"
}]`)

const sales = JSON.parse(`[{
    "staffId":1,
    "item":"Wi-Fi Adapter",
    "price":40.00,
    "date":"01-09-2022"
},
{
    "staffId":1,
    "item":"Wi-Fi Adapter",
    "price":40.00,
    "date":"03-09-2022"
},
{
    "staffId":1,
    "item":"USB Cable",
    "price":5.00,
    "date":"03-09-2022"
},
{
    "staffId":1,
    "item":"Thermal Paste",
    "price":7.50,
    "date":"05-09-2022"
},
{
    "staffId":1,
    "item":"Wi-Fi Adapater",
    "price":40.00,
    "date":"07-09-2022"
},
{
    "staffId":2,
    "item":"USB Stick",
    "price":10.99,
    "date":"06-09-2022"
},
{
    "staffId":3,
    "item":"Pre-built PC",
    "price":1999.95,
    "date":"02-09-2022"
},
{
    "staffId":3,
    "item":"USB Cable",
    "price":5.00,
    "date":"02-09-2022"
},
{
    "staffId":3,
    "item":"HDMI Cable",
    "price":15.45,
    "date":"02-09-2022"
}]`)




let totalSalesAmount = 0;

function calculateTotalSales() {
    let salesArray = [];
    for (let index = 0; index < sales.length; index++) {
        let formatSales = {"Price:": sales[index].price};
        salesArray.push(formatSales);
    
    console.table(salesArray);
    totalSalesAmount = totalSalesAmount + sales[index].price;
    console.log(`Total Sales: ${totalSalesAmount}`);
}
return totalSalesAmount;
}


function findEmployeeById(id) {
    let found = false;
    for (let index = 0; index < employees.length; index++) {
        if (id === employees[index].id) {
            return `Employee ID: ${employees[index].id}, First Name: ${employees[index].firstName}, Last Name: ${employees[index].lastName}`;
            found = true;
        }
        
    }
    if (found === false) {
        return `Employee not found!`;
    }
}

module.exports = {
    findEmployeeById,
    calculateTotalSales
}