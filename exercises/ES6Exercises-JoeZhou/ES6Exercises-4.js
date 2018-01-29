/*
4.	Create a promise based code that echoes input 5 times after a give delay
*/
function Echo(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(input), 2000);
        console.log(input);
    })
}
const input = "Echoing...";
Echo(input).then((input) => Echo(input))
.then((input) => Echo(input))
.then((input) => Echo(input))
.then((input) => Echo(input));