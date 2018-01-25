let x = 3;
function func(randomize) {
  if (randomize) {
    let x = Math.random(); // (A) scope: whole function
    return x;
  }
  return x; // accesses the x from line A
}

console.log(func(false)); // undefined
