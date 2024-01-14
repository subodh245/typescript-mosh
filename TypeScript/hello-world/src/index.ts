// let sales: number = 123_456_789;
// let course: string = "TypeScript";
// let is_published = true;
// let level;
// level = 1;

//ARRAYS in typescript

// let number: number[] = [];
// number forEach(n => n)

//TUPLE in type script

// let user: [number, string] = [1, "Mosh"];
// user.push(1); //best practice is store only 2 values in tuple

//ENUMS
// enum Size {
//   Small,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

//FUNCTIONS

// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) return income * 1.2;
//   return income * 1.3;
// }

// calculateTax(10_000);

// OBJECT
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "subodh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//TYPE ALIASES
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "subodh",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

// UNION TYPES
// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") return weight * 2.2;
//   else return parseInt(weight) * 2.2;
// }

// kgToLbs(10);
// kgToLbs("10kg");

// INTERSECTION
// type Draggable = {
//   drag: () => void;
// };

// type Resizeble = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizeble;

// let textBox: UIWidget = {
//   drag: () => {},

//   resize: () => {},
// };

// LITRAL
// type Quantity = 50 | 100;
// let quantity: 50 | 100 = 100;

// type Metric = "cm" | "inch";

//NULABLE VALUES

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("hello");
// }

// greet(null);

//OPTION CHAINING

// type Customer = {
//   birthday: Date;
// };
// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }

// let customer = getCustomer(1);

// console.log(customer?.birthday);
