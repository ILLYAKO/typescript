const str: string = "Hello world!";

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const messge: string = "Hello Typescript";

const numberArray1: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]; //generic

const words: string[] = ["Hello", "Typescript"];

//Tuple
const contact: [string, number] = ["Illya", 123456798];

//Any
let variable: any = 42;
variable = "New String";
variable = [];

//function
function sayMyName(name: string): void {
  console.log(name);
}
sayMyName("Illya");

//Never
function throwError(message: string): never {
  throw new Error(message);
}

//Never
function infinite(): never {
  while (true) {}
}

//Type
type Login = string;
const login: Login = "admin";

//Type
type ID = string | number;
const id1: ID = 12345;
const id2: ID = "12345";

// NULL undefined
type SomeType = string | null | undefined;
