/*
3. Create a class called TableGenerator, which contains data and title properties. 
Develop render method which generates html markup as table for given input data.
Input:

let data = [
    {title: 'apple', price: 2, qty: 30},
    {title: 'banana', price: 1, qty: 30},
    {title: 'chikoo', price: 1, qty: 30}
];

title = “fruits” 
*/
class TableGenerator {
  constructor(data, title) {
    this._data = data;
    this._title = title;
  }
  set Data(data) {
    this._data = data;
  }
  get Data() {
    return this._data;
  }
  set Title(title) {
    this._title = title;
  }
  get Title() {
    return this._title;
  }

  Render() {
    let output = "<TABLE><TH>title</TH><TH>price</TH><TH>qty</TH>";
    for (const row of this._data) {
      output += `<TR><TD>${row.title}</TD><TD>${row.price}</TD><TD>${
        row.qty
      }</TD></TR>`;
    }
    output += "</TABLE>";
    return output;
  }
}

let data = [
  { title: "apple", price: 2, qty: 30 },
  { title: "banana", price: 1, qty: 30 },
  { title: "chikoo", price: 1, qty: 30 }
];

let Title = "fruits";

var table = new TableGenerator(data, Title);
console.log(table.Render());
