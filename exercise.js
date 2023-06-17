class Person {
  firstName = "";
  lastName = "";
  age = 1;
  constructor (firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

  set age (ageVal) {
    if (ageVal < 1) {
      this.age = 1;
    } else if (ageVal > 120) {
      this.age = 120;
    } else {
      this.age = ageVal;
    }
  }

  set firstName (nameVal) {
    if (nameVal === number) {
      this.firstName = null;
    } else {
      this.firstName = nameVal;
    }
  }

  set lastName (lastVal) {
    if (lastVal === number) {
      this.lastName = null;
    } else {
      this.lastName = lastVal;
    }
  }

  set fullName (fullName) {
    fullName = this.firstName + this.lastName;
  }

  get age () {
    return this.age;
  }

  get firstName () {
    return this.firstName;
  }

  get lastName () {
    return this.lastName
  }

  get fullName () {
    return this.firstName + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);