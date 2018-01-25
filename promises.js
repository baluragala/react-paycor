let p = new Promise(function(resolve, reject) {
  setTimeout(() => resolve({ username: "hh" }), 2000);
});
console.log("one");
console.log("two");
p
  .then(data => {
    console.log(data);
  })
  .then(_ => console.log("three"));
