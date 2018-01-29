/*
6.	Create a generator function that calculates foreign exchange price 
between given currencies
Use: https://api.fixer.io/latest?base=USD
exhcangeRate(from,to,amount)
exhcangeRate(USD,INR,100)
*/
function* exchangeRate(from, to, amount) {
    let url = `https://api.fixer.io/latest?base=${from}`;
    fetch(url)
        .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Error Code: ' + response.status);
                return;
            }

            response.json().then(function (data) {
                console.log(`${data.rates[to] * amount}.`);
            });
        }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}
const myRate = exchangeRate("USD", "INR", 100);
myRate.next();