let x: string = " "; 

let ix: string = ' ';  

let empName: string = "Rohan";
let empDept: string = "IT";
  
// Before-ES6  
let output1: string =empName + " works in the " + empDept + " department.";
  
// After-ES6  
let output2: string = `${empName} works in the ${empDept} department.`;

console.log(output1);//Rohan works in the IT department.   
console.log(output2);//Rohan works in the IT department. 