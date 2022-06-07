class Person {
  constructor (firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(user) {
    this._firstName = user;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(user) {
    this._lastName = user;
  }

  get age() {
    return this._age;
  }

  set age(user) {
    this._age = user;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(user) {
    this.fullName = user;
  }

}



const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);