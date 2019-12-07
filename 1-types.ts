const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';

const arrNum: number[] = [1, 2, 3, 4, 5];
const arrNum2: Array<number> = [1, 2, 3, 4, 5];

const words: string[] = ['Hello', 'Typescript'];


/** Tuple */
const contact: [string, number, any] = [
  'Vladilen',
  1234567,
  {name: 'Galym', age: 31}
];
// console.log(contact);


/** Any */
let variable: any = 42;
variable = 'New string';
variable = [];


/** Function */
function sayMyName(name: string): void {
  console.log(name);
}
// sayMyName('Haizenberg');

function calc(a: number, b: number | string): number {
  if (typeof b === 'string') b = +b;
  return a + b;
}
console.log(calc(5, 10));


/** Never */
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while(true) {
  }
}


/** Type */
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id1: ID = 1234;
const id2: ID = 'Hello';

type SomeType = string | null | undefined;