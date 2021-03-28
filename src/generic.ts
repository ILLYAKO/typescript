const cars1: string[] = ["Ford", "Audi"];
const cars2: Array<string> = ["Ford", "Audi"];

const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});

function mergeObject<T, R>(a: T, b: R) {
  //only Object
  return Object.assign({}, a, b);
}

const merged1 = mergeObject({ name: "Illya" }, { age: 26 });
const merged2 = mergeObject({ model: "Ford" }, { year: 2010 });

//-----------------------------

interface ILength {
  length: number;
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `Objest has ${value.length} characters`,
  };
}
console.log(withCount("Hello typescript"));
console.log(withCount(["I ", "am ", "Array"]));

//-----------------------

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: "Illya",
  age: 26,
  job: "JavaScript",
};
console.log(getObjectValue(person, "name"));
console.log(getObjectValue(person, "age"));
console.log(getObjectValue(person, "job"));

//--------------------------------------------
class Collection<T extends number | string | boolean> {
  //private _item: T[] = [];
  constructor(private _item: T[] = []) {}

  add(item: T) {
    this._item.push(item);
  }
  remove(item: T) {
    this._item = this._item.filter((i) => i !== item);
  }

  get items(): T[] {
    return this._item;
  }
}

const strings = new Collection<string>(["I", "Am", "Strings"]);
strings.add("!");
strings.remove("Am");
console.log(strings.items);

const numbers = new Collection<number>([1, 2, 3, 4]);
numbers.add(5);
numbers.remove(3);
console.log(numbers.items);

//-----------------------------
interface Car {
  model: string;
  year: number;
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {};
  if (model.length > 3) {
    car.model = model;
  }
  if (year > 2000) {
    car.year = year;
  }
  return car as Car;
}

//-----------------------------------------
const cars: Readonly<Array<string>> = ["Ford", "Audi"]; // Readonly

const ford: Readonly<Car> = {
  model: "Ford",
  year: 2020,
};
