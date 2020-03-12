var displayFaculty = function(Employees)
{
    var rows = d3.select("#EmployeeTable")
    .selectAll("tr")
    .data(Employees)
    .enter()
    .append("tr")

    rows.append("td")
        .text(function(Employee)
     {
        return Employee.firstName;
    })
        rows.append("td")
        .text(function(Employee)
     {
        return Employee.lastName;
    })
    
     rows.append("td")
        .append("img")
        .attr("src", function(Employees)
             
             {
         return Employees.photo
     })

     rows.append("td")
        .text(function(Employee)
     {
        return Employee.title;
    })
     rows.append("td")
        .text(function(Employee)
     {
        return Employee.unit;
    })
     rows.append("td")
        .text(function(Employee)
     {
        return Employee.email;
    })
     rows.append("td")
        .text(function(Employee)
     {
        return Employee.bio;
    })
}


var EmployeePromise = d3.json("employee.json");
EmployeePromise.then(
function(Employees)
       {
        displayFaculty(Employees)
        console.log("worked", Employees);
        },
    function (err)
{
    console.log("failed",err);
})
    
       

/*var getEmployees = function(Employee)
{
    return Employee;
}*/

