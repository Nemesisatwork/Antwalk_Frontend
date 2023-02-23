var x = " ";
var ix = ' ';
var empName = "Rohan";
var empDept = "IT";
// Before-ES6  
var output1 = empName + " works in the " + empDept + " department.";
// After-ES6  
var output2 = "".concat(empName, "\u00A0works\u00A0in\u00A0the\u00A0").concat(empDept, "\u00A0department.");
console.log(output1); //Rohan works in the IT department.   
console.log(output2); //Rohan works in the IT department. 
