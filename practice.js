const out = console.log.bind();
// 1. two boolean and number type variables;
// let var1= true;
// let var2 = 26;

// console.log(typeof(var1));
// console.log(typeof(var2));

// // 2. let and const, let value is possible to change but const is not changeable;
// let name = "Monaem";
// const dateOfBirth = "08-03-1997";
// name = "Monaem Hossain";

// console.log(name);


// 3. +,-,*,/,%
// let num1 = 8;
// let num2 = 17;

// let add = num1 + num2;
// let sub = num1 - num2;
// let multi = num1 * num2;
// let divide = num1 / num2;
// divide = Math.floor(divide);
// let factorial = num1 % num2;

// let allResult = [add, sub, multi, divide, factorial];
// console.log(allResult);

// 4. comparison
// let a = 9;
// let b = 8;
// let equal = a == b;
// let notEqual = a != b;
// let greaterThan = a > b;
// let greaterThanEqual = a >= b;
// let lessThan = a < b;
// let lessThanEqual = a <= b;
// let outAll = [
//     equal,
//     notEqual,
//     greaterThan,
//     greaterThanEqual,
//     lessThan,
//     lessThanEqual
// ]
// console.log(outAll)

// 5. and, or 

let fruit = "mango";
let price = 24;
if(fruit == "mango" && price >= 25){
    out("yap! i can buy this");
}else{
    out("no thanks");
}

// while loop

let num = 7;
while(num <= 19){
    out(num);
    num++;
}