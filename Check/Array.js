//           GUESS THE OUTPUT

// 1.
// (function() {
// 	var array = new Array('100');
// 	console.log(array);
// 	console.log(array.length);
// }());
// ANS=== ['100'], 1

// 2.
// ( function(){
//     var array1 = [];
//     var array2 = new Array(100);  // means 100 elements in array 
//     var array3 = new Array(['1',2,'3',4,5.6]);  // array of objects
//     console.log(array1);
//     console.log(array2);
//     console.log(array3);
//     console.log(array3.length);
// })();
// ANS======== [], (100), Array[(5)], 1  'one empty array, one 100 length array with no element, one array of object with one length

// 3.
// (function () {
//     var array = new Array('a', 'b', 'c', 'd', 'e');
//     array[10] = 'f';
//     delete array[10];
//     console.log(array.length);

//   }());
// ANS======11

// 4.
// (function(){
// 	var animal = ['cow','horse'];
// 		animal.push('cat');
// 		animal.push('dog','rat','goat');
// 		console.log(animal.length);
// })();
// ANS==== 6

// 5.
// (function(){
// 	var array = [1,2,3,4,5];
// 	console.log(array.indexOf(2));
// 	console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'}));
// 	console.log([[1],[2],[3],[4]].indexOf([3]));
// 	console.log("abcdefgh".indexOf('e'));
// })();     



// 6.
(function(){
	var array = [1,2,3,4,5,1,2,3,4,5,6];
	console.log(array.indexOf(2));
	console.log(array.indexOf(2,3));
	console.log(array.indexOf(2,10));
})();