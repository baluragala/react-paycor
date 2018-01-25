class Person {
  _name;
  _age;

  static type = "PERSON";

  get Name() {
    let derivedName;
    return this._name;
  }

  set Name(value) {
    this.name = name;
  }

  get Age() {
    return this.age;
  }

  set Age(value) {
    if (value < 0 || value > 125) {
      throw new Error("Invalid age");
    }
    this.age = value;
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {}
}

//Person.type = "PERSON";

var jon = new Person("jon", 22);
jon.Age = 200;

class Student extends Person {
  constructor() {
    super();
    this._age;
  }

  toString() {
    this.toString();
  }
}
