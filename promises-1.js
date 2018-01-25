let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 resolved"), 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p2 resolved"), 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3 resolved"), 3000);
});

p1
  .then(data => {
    console.log(data);
    return p2;
  })
  .then(data => {
    console.log(data);
    return p3;
  })
  .then(data => {
    console.log(data);
  });
