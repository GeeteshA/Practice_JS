// ------------UNCLEAR 

// function funcA(){
// 	console.log("funcA ", this);
// 	(function innerFuncA1(){
// 		console.log("innerFunc1", this);
// 		(function innerFunA11(){
// 			console.log("innerFunA11", this);
// 		})();
// 	})();
// }
	
// console.log(funcA());

// -------------UNCLEAR

// var obj = {
//     message: 'hello',
//     innerMessage: !(function(){
//         console.log(this.message);
//     })()
// }
// console.log(obj.innerMessage);

// O/P -- [
//     undefined
//     true
// ]



//----------------------DONE
// var obj = {
// 	message: "Hello",
// 	innerMessage: function() {
// 		return this.message;
// 	}
// };
	
// console.log(obj.innerMessage());

// O/P -- Hello


//-----------------CHECK
// var obj = {
//     message: 'Hello',
//     innerMessage: function () {
//       (function () {
//         console.log(this.message);
//       }());
//     }
//   };
//   console.log(obj.innerMessage());

// O/P ----[
//                 undefined
//                 undefined
// ]


// --------------------CHECK
// var obj = {
//     message: 'Hello',
//     innerMessage: function () {
//         var self = this;
//       (function () {
//         console.log(self.message);
//       }());
//     }
//   };
//   console.log(obj.innerMessage());

//O/P ---  'Hello'

// ----------------------------CHECK
// function myFunc(){
// 	console.log(this.message);
// }
// myFunc.message = "Hi John";
	
// console.log(myFunc());

// O/P ---undefined 

