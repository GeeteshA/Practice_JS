//  GUESS THE OUTPUT
// 1.
// var empId = "123";
// (
//     function () {
//         console.log(empId);
//         var empId = '123456qq';
//     }
// )();

// Ans==== undefined 

// 2.
// var empId = "123";
// (
//     function () {
//         console.log(empId);
//         var empId = '123456qq';
//         (  function () {
//             var empId = '222222';
//         } )();
//     }
// )();
// Ans===== undefined 

// 3.
// (function () {
//     console.log( typeof ab);
//     var ab = function ab() {
//         console.log("hello this is geeteh aheriya");
//     }
// })();
// ANS======undefined

// 4.
// var empId = '12345';
// function ab() {
//     empId = '67890'
//     return;
// }
// ab();
// console.log(empId);

// ANS======= 67890

// 5. --------------**********************************
// var employeeId = 'abc123';

// function foo() {
// 	employeeId = '123bcd';
// 	return;

// 	function employeeId() {}
// }
// foo();
// console.log(employeeId);

// ANS====== 'abc123'

// 6.
// var employeeId = 'abc123';

// function foo() {
// 	employeeId();
// 	return;

// 	function employeeId() {
// 		console.log(typeof employeeId);
// 	}
// }
// foo();
// ANS=========== function

// 6.
// function foo() {
// 	employeeId();
//     var product = 'Car'; 
// 	return;

// 	function employeeId() {
// 		console.log(product);
// 	}
// }
// foo();
// ANS========'undefined' because function was called before product initialization;

// 7.
// (function foo() {
// 	bar();

// 	function bar() {
// 		abc();
// 		console.log(typeof abc);
// 	}

// 	function abc() {
// 		console.log(typeof bar);
// 	}
// }());
// ANS==========='function function' because function called after inialization


