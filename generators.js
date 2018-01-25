function* generateNumbers() {
  let r1 = yield 1;
  console.log(r1);
  let r2 = yield 2;
  console.log(r2);
}

function outer(abc) {
  return function inner() {
    console.log(abc);
  };
}

const address = { city: "NY", state: "NY" };
address.city = "KL";
