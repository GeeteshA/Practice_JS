let employees = [
    {id:1, name:"Geetesh", sal:45000},
    {id:2, name:"Meetesh", sal:55000},
    {id:3, name:"Pratik", sal:65000}
]
let createEmployee =(emp, callback)=> {
    setTimeout(()=>{
        employees.push(emp);
        callback()

    },1000)
}
let getEmployee =() => {
    setTimeout(()=>{
        let rows =""
        for (employee of employees) {
            rows = rows +  `<tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.sal}</td>
            </tr>`
        }
        document.getElementById('table_data').innerHTML = rows
    },2000)
}
createEmployee({id:4,name:"Animesh",sal:69000},getEmployee)
// getEmployee()
// console.log(employee);
