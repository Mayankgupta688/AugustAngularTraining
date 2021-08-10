interface IEmployeeDetails {
    getEmployeeDetails(): void;
}

class EmployeeDetails implements IEmployeeDetails {
    private name: string = "Mayank"
    private age: number = 33;

    getEmployeeDetails(): void {
        console.log("User Name is: " + myEmployee.name)
        console.log("User Age is: " + myEmployee.age)
    }
}

var myEmployee = new EmployeeDetails();
myEmployee.getEmployeeDetails();

console.log(userName)