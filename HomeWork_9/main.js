// First Task

class SomeClass {
  static #count = 0;

  callMe() {
    ++SomeClass.#count;
  }

  static callCount() {
    return this.#count;
  }
}

const instance1 = new SomeClass();
const instance2 = new SomeClass();

/* some tests

instance1.callMe();
instance1.callMe();
instance1.callMe();
instance2.callMe();
instance2.callMe();
instance1.callMe();
instance1.callMe();
instance2.callMe();

console.log(SomeClass.callCount());*/

// Second Task

class PersonGenderError extends Error {
  constructor(message) {
    super(message);
  }

  toString() {
    return `${this.name} ${this.message}`;
  }
}

class Person {
  static GENDER = {
    NOT_DEFINED: 0,
    MAN: 1,
    WOMAN: 2,
  };

  _name = "NoName";
  _gender = Person.GENDER.NOT_DEFINED;

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (name !== "") {
      this._name = name;
    }
  }

  get gender() {
    return this._gender;
  }

  set gender(gender) {
    try {
      if (gender == 0 || gender == 1 || gender == 2) {
        this._gender = gender;
      } else throw new PersonGenderError("Invalid values");
    } catch (e) {
      console.log(e.message);
    }
  }
}

// Third Task

class PersonLog extends Person {
  #logs = [];

  constructor(gender, name) {
    super(gender, name);
  }

  set gender(gender) {
    this.#logs.push(`gender: ${super.gender} ${gender}`);
    super.gender = gender;
  }

  get gender() {
    return super.gender;
  }

  set name(name) {
    this.#logs.push(`name: ${super.name} ${name}`);
    super.name = name;
  }

  get name() {
    return super.name;
  }

  printLogs() {
    console.table(this.#logs);
  }
}
