// Q.1
// console.log(employeeId)
// Output- not defined

//Q. 2
console.log(Id)
var Id = '1223'
// OUTPUT- var prmotes hoisting so it will give undefined

// Q.3
var employeeId = '1234abe';
(function(){
	console.log(employeeId);
	var employeeId = '122345';
})();

//OUTPUT - it result undefined bacause it will first employeeId because it is declared but it is not initialize so will give undefined

// Q.4 
var empId = '111';
(function() {
	console.log(empId);
	var empId = '222';
	(function() {
		var empId = '333';
	}());
}());
// OUTPT- result will give undefined

// Q.5 
(function(){
    console.log(typeof displayFun);
    var displayFun = function(){
        console.log('Hello inner function')
    }
}())
//OUTPUT- will result undefined because variable declare with var are hosted on top of their scope

// Q.6
var stdId = '000';
function foo(){
	stdId = '111';
	return;
}
foo();
console.log(stdId);

// OUTPUT- will give result 999 bcz function initialize and will return

// Q.7 
var stdeId = '0000';
function foo(){
    stdeId = '999';
    return;
    function stdeId(){}
}
foo();
console.log(stdeId);