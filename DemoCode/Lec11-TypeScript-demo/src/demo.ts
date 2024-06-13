// -------------------------------------------------------------------------------------
// Static type checking
// let num: number = "";
// let str: string = 1;
// let bool: boolean = 1;

// -------------------------------------------------------------------------------------
// Type inference

// Assigning different types
// let num = 2;
// num = "hello";

// Assigning a function output of a different type
// function sum(a: number, b: number) {
//   return a + b;
// }
// const str: string = sum(1, 2);

// Adding different types to an array
// const arr = [0, 1, ""];
// arr.push(true);

// -------------------------------------------------------------------------------------
// Primitive
// let num: number = 1;
// let str: string = "";
// let bool: boolean = true;
// let nul: null = null;
// let undef: undefined;

// let Num: Number = 1;
// let Str: String = "";
// let Bool: Boolean = true;

// Array
// const nums: number[] = [1, 2, 3];
// const nums2: Array<number> = [1, 2, 3];
// const readOnly1: readonly string[] = ["a", "b", "c"];
// const readOnly2: ReadonlyArray<string> = ["a", "b", "c"];
// readOnly2.push('a');

// Tuple
// const tuple: [number, string] = [1, ""];

// -------------------------------------------
// Enum

//* enum number values are default and auto-incremented
// enum enum1 {
//   Red,
//   Blue,
//   Green,
// }
// console.log("enum1.Red =", enum1.Red);
// console.log("enum1 =", enum1);

// enum1.Purple // cannot access unknown properties

// enum enum2 {
//   Red = 3,
//   Blue,
//   Green
// }
// console.log("enum2 =", enum2);

//* If there's one string, the following must be initialized
// enum enum3 {
//   Red = "",
//   Blue,
//   Green
// }

// enum enum3 {
//   Red = 'Red',
//   Blue = 'Blue',
//   Green = 'Green',
// }
// console.log('enum3 =', enum3);

//* const enums
// const enum constEnum {
//   Red,
//   Blue,
//   Green,
// }

// console.log(constEnum, constEnum.Red);

// -------------------------------------------------------------------------------------
// Other types

// any
// let untyped; // same as type any
// let anyTyped: any = 0;
// untyped = anyTyped = "";
// let untyped2 = 0; // type inference thinks its a number
// untyped2 = anyTyped = "";

// unknown
// let unknownVar: unknown = 0;
// unknownVar = "";
// unknownVar = true;
// const sum = unknownVar + 2;
// const sum2 = typeof unknownVar === "number" ? unknownVar + 2 : 0;

// void
// let voidType: void;
// voidType = undefined;
// voidType = null;
// const log = () => {
//   console.log('log');
// };

// never
// function throwError(message: string): never {
//   throw new Error(message);
// }

// function infiniteLoop(): never {
//   while (true) {
//     console.log("infinite loop");
//   }
// }

// -------------------------------------------------------------------------------------
// Function types

// function declaration
// function fn1(a: number, b: string): void {
//   console.log(a, b);
// }

// fn1();
// fn1(1);
// fn1(1, 1);
// fn1("", "");

// arrow function
// // arrowFn is a function that returns number
// const arrowFn = (a: number, b: number): number => a + b;
// // arrowFn2 is a function of type "(a: number, b: number) => number"
// const arrowFn2: (a: number, b: number) => number = (a, b) => a + b;

// // function expression (same as above)
// const fnExp = function (a: number, b: number): number {
//   return a + b;
// };
// const fnExp2: (a: number, b: number) => number = function (a, b) {
//   return 1;
// };

// -------------------------------------------------------------------------------------
// Object types

// 'object' type is non-specific. TS doesn't know what it contains
// const obj: object = { key: "value" };
// console.log(obj.key); // "What's key?"
// console.log(obj.notKey);

// Anonymous object type
// Object defined directly! no need to create an interface/type alias
// const obj2: { str: string; num: number } = { str: "String", num: 1 };
// console.log(obj2.str);
// obj2.str = "String 2";
// console.log(obj2.str);
// console.log(obj2.num);
// console.log(obj2.notKey);

// Type Alias
// type Point = {
//   x: number;
//   y: number;
// };

//* Typing object methods
// const arrowMethods: {
//   arrowType1: () => number;
//   arrowType2: () => number;
//   arrowType3: () => number;
// } = {
//   arrowType1: () => 1,
//   arrowType2: function () {
//     return 1;
//   },
//   arrowType3() {
//     return 1;
//   },
// };

// const signatureMethods: {
//   signatureType1(): number;
//   signatureType2(): number;
//   signatureType3(): number;
// } = {
//   signatureType1() {
//     return 1;
//   },
//   signatureType2: () => 1,
//   signatureType3: function () {
//     return 1;
//   },
// };

// -----------------------------------------
// Index signatures : Repetitive Objects

// obj is an object where all keys are string, and all values are number.
// const obj: { [key: string]: number } = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };
// const obj2: { [key: number]: number } = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 };

//* No type errors for undefined properties
// console.log(obj);
// console.log(obj.a, obj[5]); // 5 cast to string

// -----------------------------------------
// Records : tool for defining object types with fixed keys and specific value types
// "record must have a key "hello" with a value of type number"
// const record: Record<"hello", number> = { hello: 1 };
// const record2: Record<"hello", number> = { hello1: 1 };

// -------------------------------------------------------------------------------------
// Union (|) : Value can be one of several types

// let union: string | number | boolean = "";
// union = true;
// union = 2;
// union = "hello";
// union = {};

// The object must have keys "a", "b", and "c", with each key being type number
// const record2: Record<"a" | "b" | "c", number> = { a: 1, b: 1, c: 1 };
// const record1: Record<'a' | 'b' | 'c', number> = { a: 1, b: 1 };

// -----------------------------------------
// Intersection (&) : Combines multiple types into one

// let mixedObj: { a: number } & { b: string } = { a: 1 };
// let mixedObj2: { a: number } & { b: number } = { a: 1, b: 1 };

// let never: string & number = 0; // there's no value that can be a string and number

// -------------------------------------------------------------------------------------
// Type Guards : Using "typeof" to validate a type in the code. Used for Union/unknown types.

// Guard unknown types

// function fn(unknownVar: unknown): void {
//   console.log(unknownVar + 2);
//   console.log(unknownVar.split(""));

//   if (typeof unknownVar === "number") {
//     console.log(unknownVar + 2);
//   } else if (typeof unknownVar === "string") {
//     console.log(unknownVar.split(""));
//   } else {
//     console.log(unknownVar);
//   }
// }

// -----------------------------------------
// Guard union types

// function fn(num: number | string): void {
//   console.log(num + 2);
//   console.log(num.slice(1));

//   if (typeof num === "number") console.log(num + 2);
//   else console.log(num.slice(1));
// }

// -------------------------------------------------------------------------------------
// Type assertion

// const unknownVar: unknown = 1;
// const num1: number = unknownVar;
// const num2: number = unknownVar as number;
// const num3: number = <number>unknownVar;

// -----------------------------------------
// Const assertion : Locks a value down, making it unchangable

// //* primitives
// let str = "";
// str = "hello";
// let str2 = "" as const;
// str2 = "hello";

// // * objects become read-only
// const arr = [];
// arr.push(1);
// const arr2 = [] as const;
// arr2.push(1);

// const obj = { a: 1 };
// obj.a = 2;
// const obj2 = { a: 1 } as const;
// obj2.a = 2;

// -----------------------------------------
// keyof
// const obj: { a: number; b: number; c: number } = { a: 1, b: 2, c: 3 };
// const obj2: keyof typeof obj = {};

// -------------------------------------------------------------------------------------
// Type Alias

// These are type aliases!
// type primitive = number | string | boolean | symbol | bigint | undefined;
// type reference = object;
// type allTypes = primitive | reference;
// type promiseState = "Pending" | "Resolved" | "Rejected";

// type Person = {
//   name: string;
//   age: number;
//   email: string;
//   gender: "M" | "F" | "Other";
//   speak(): void;
//   [key: string]: any;
// };
// const personType: Person = {};

// -----------------------------------------
// Interface : Like Type Alias, but can be extended like a class

// interface IPerson {
//   name: string;
//   age: number;
//   email: string;
//   gender: "M" | "F" | "Other";
//   speak(): void;
//   [key: string]: any;
// }

// const personInterface: IPerson = {};

// -----------------------------------------
// Type Alias vs Interface

//* Extending the type
// type Human = { height: number; weight: number };
// type Student = Human & { courseId: number; grades: string[] };
// const studType: Student = {};

// interface IHuman {
//   height: number;
//   weight: number;
// }
// interface IStudent extends IHuman {
//   courseId: number;
//   grades: string[];
// }
// const studType: IStudent = {};

// // Extending a type
// interface IStudent extends Human {
//   courseId: number;
//   grades: string[];
// }

// const studInterface: IStudent = {};

//* Adding extra fields: types can't be redefined
// type x = {};
// type x = {};

// interface ICombined {
//   prop1: number;
// }
// interface ICombined {
//   prop2: number;
// }

// const obj: ICombined = {};

// -------------------------------------------------------------------------------------
// readonly, optional types (Classes, Object Literal Type, Object Type Alias, Interface

// interface IPerson {
//   readonly firstName: string; // Once assigned a value, can't be changed!
//   readonly lastName: string;
//   middleName?: string;
// }

// const person1: IPerson = {
//   firstName: "Calum",
//   lastName: "Chan",
//   middleName: "Sek",
// };
// person1.firstName = "Name";
// person1.middleName.split("");

// -------------------------------------------------------------------------------------
// Classes

// class Person {
//   //* Must define properties
//   public id: number;
//   private name: string;
//   protected age: number;
//   readonly gender: "M" | "F" | "Other";
//   private children?: Person[]; // isn't required to be initialized

//   //* Type the constructor arguments
//   constructor(
//     id: number,
//     name: string,
//     age: number,
//     gender: "M" | "F" | "Other"
//   ) {
//     // All 4 must be initialized because of their types
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   public introduce() {
//     console.log(`Hello! My name is ${this.name}.`);
//   }

//   //* Non-static vs static methods
//   public wave() {
//     console.log("Waving");
//   }
//   // static = only accessible thorugh Class itself
//   public static wave() {
//     console.log("Waving Static");
//   }
// }

// const person1 = new Person(1, "Name", 25, "M");
// person1.id = 3;
// person1.name = "";
// person1.age = 25;
// person1.gender = "Other";
// person1.wave(); // "Waving"

// Person.wave(); // "Waving Static"

// -----------------------------------------
// Class implements Interface

// interface IPerson {
//   id: number;
//   name: string;
//   age: number;
//   readonly gender: "M" | "F" | "Other";
//   children?: IPerson[];
//   introduce(): void;
// }

// // // Interfaces are used in many parts of code, so you can't have private/protected type members.
// class Person implements IPerson {
//   //* Must define properties
//   public id: number;
//   public name: string;
//   public age: number;
//   readonly gender: "M" | "F" | "Other";
//   public children?: Person[]; // isn't required to be initialized

//   constructor(
//     id: number,
//     name: string,
//     age: number,
//     gender: "M" | "F" | "Other"
//   ) {
//     // All 4 must be initialized because of their types
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   public introduce() {
//     console.log(`Hello! My name is ${this.name}.`);
//   }
// }

// const person1: IPerson = new Person(1, 'Name', 25, 'M');
// person1.introduce();

// class as type for objects
// class Person {
//   id: number;
//   name: string;
//   age: number;
//   gender: "M" | "F" | "Other";

//   constructor(
//     id: number,
//     name: string,
//     age: number,
//     gender: "M" | "F" | "Other"
//   ) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const person: Person = {};

// -------------------------------------------------------------------------------------
// Generics : Type Alias crossed with a function. Pass in a type as an argument.

//* Type composed of types
// interface Person {
//   name: string;
// }
// type List<T> = T[];

// const people: List<Person> = [{ name: "Tyler" }];

// Can P\pass in multiple types as arguments!
// function print<T, U>(key: T, val: U): void {
//   console.log(`key:${key}, val:${val}`);
// }

// print<number, number>(1, 2);
// print<string, number>("1", 2);

//* More realistic example, based on https://jsonplaceholder.typicode.com/users
// interface IUser {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
//   phone: string;
//   website: string;
// }

// async function getUsers(url: string): Promise<IUser | string> {
//   try {
//     const res: Response = await fetch(url);

//     if (!res.ok) {
//       throw new Error(`Request Failed with status ${res.status}`);
//     }

//     const users: IUser[] = await res.json();

//     // Intellisense is nice.
//     // users[0].

//     return users[0];
//   } catch (e: unknown) {
//     // Not able to type catch errors as anything besides any, unknown due to different error types during runtime.
//     if (e instanceof Error) {
//       return e.message;
//     } else {
//       return "Error occurred while loading users.";
//     }
//   }
// }

// getUsers('https://jsonplaceholder.typicode.com/users').then((data) => {
//   if (typeof data === 'string') {
//     console.error(data);
//   } else {
//     console.log(data);
//   }
// });
