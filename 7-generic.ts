const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen'];
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
// console.log(reverse(arrayOfNumbers));
// console.log(reverse(arrayOfStrings));

interface User {
  id: number;
  name: string;
  age: number;
}

// noinspection TypeScriptValidateTypes
const users: Array<User> = [
  {id: 1, name: 'V', age: 22},
  {id: 2, name: 'E', age: 23}
];

// noinspection TypeScriptValidateTypes
const users2: User[] = [
  {id: 1, name: 'V', age: 22},
  {id: 2, name: 'E', age: 23}
];
console.log(users);
console.log(users2);