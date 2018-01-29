/*
2. Implement function called calculatePrice that simulates named parameters concept. calculatePrice takes 3 params named price, tax and discount, out of which discount is default with 10. 
Logic to use:
taxablePrice = price - (price * (discount / 100))
    	priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));

Concepts to use:
•	Block scoping
•	Arrow functions
•	Destructuring
*/
calculatePrice = ({price, tax, discount = 10}) => {
    let taxablePrice = price - (price * (discount / 100));
    let priceWithTax =  taxablePrice + (taxablePrice * (tax / 100));
    return priceWithTax;
}

console.log(calculatePrice({price: 100, tax: 8.25}));