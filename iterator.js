function iterator() {
  let index = 0;
  return {
    next() {
      if (index >= this.length) {
        return { value: undefined, done: true };
      } else {
        index++;
        return { value: index, done: false };
      }
    }
  };
}

function forOf(iterable) {
  let it = iterable[Symbol.iterator]();
  let r = it.next();
  while (!r.done) {
    console.log(r.value);
    r = it.next();
  }
}
