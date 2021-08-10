class Employee {
    constructor(name, age, designation) {
        debugger;
        this.empName = name;
        this.empAge = age;
        this.empDesignation = designation;
    }
}

var employeeOne = new Employee("Mayank", 33, "Manager"); 

var employeeTwo = new Employee("Anshul", 30, "Developer");

var employeeThree = new Employee("Meha", 30, "Manager");

var empList = [employeeOne, employeeTwo, employeeThree]