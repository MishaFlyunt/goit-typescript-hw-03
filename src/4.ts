class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;

  comeIn() {
    if (this.door) {
      this.tenants.push();
    }
  }
  tenants: Person[];

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key) {
    if (key === this.key) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
