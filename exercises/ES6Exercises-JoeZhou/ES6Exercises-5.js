/*
5.	Create a generator function that returns 10 random numbers 
    between 10 and 50
*/
function* Randomizer()
{
    for(var i = 1; i <= 10; i++)
    {
        yield console.log(Math.floor((Math.random() * 40)) + 10);
    }
}

const myRandomNumber = Randomizer();
for(var i = 1; i <= 10; i++)
{
    myRandomNumber.next();
}