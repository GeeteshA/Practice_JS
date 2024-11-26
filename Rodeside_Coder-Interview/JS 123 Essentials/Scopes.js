// Q.1 
function passwordMngr(){
    var password = 123456;
    this.username = 'Geetesh';
    return {
        pwd: password
    };
}
const userInfo = passwordMngr()
console.log(userInfo.pwd);
console.log(userInfo.username);
// OUTPUT - 12345 and udefined

// Q.2 
var empId = 1234;
function ShowId(){
    this.empId = 123
}
console.log(ShowId.empId)

// Q.3
var employeeId = 'aq123';

function Employee() {
	this.employeeId = 'bq1uy';
}
console.log(new Employee().employeeId);
Employee.prototype.employeeId = 'kj182';
Employee.prototype.JobId = '1BJKSJ';
console.log(new Employee().JobId);
console.log(new Employee().employeeId);

 // OUtPUT- bq1uy 1BJKSJ aq123

//  Q.4
var id = 'aq123';
(function Employe() {
	try {
		throw 'foo123';
	} catch (id) {
		console.log(id);
	}
	console.log(id);
}());
