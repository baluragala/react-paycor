let getFirstName = () => "bala";

let greet = (first, last) => {
  let name = first + " , " + last;
  return `Hello, ${name}`;
};

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.print = () => {
    console.log(this);
    console.log(this.name, this.age);
  };
}

for (let i = 0; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
