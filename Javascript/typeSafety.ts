var userName: string = "Mayank Gupta";
var userAge: number = 10;
var isEmployeed: boolean = false;

interface IAddress {
    street?: string;
    country: string;
    state: string; 
}

interface IEmployee {
    userName: string;
    userAge: number;
    userDesignation: string;
    previousSalary?: number[]
    salary?: number,
    address?: IAddress;
}

interface IEmployeeSpeciel{
    userName: string;
    userAge: number;
    userDesignation: string;
    salary: number;
}

var employeeDetails: IEmployee = {
    userName: "Mayank",
    userAge: 33,
    userDesignation: null,
    previousSalary: [10, 20, 30, 23],
    address: {
        country: "India",
        state: "New Delhi"
    }
}

var employeeDetailsTwo: IEmployee = {
    userName: "Anshul",
    userAge: 33,
    userDesignation: "Developer"
}

var employeeDetailsThree: IEmployeeSpeciel = {
    userName: "Anshul",
    userAge: 33,
    userDesignation: "Developer",
    salary: 1000
}

var employeeDetailsTwo: IEmployee = {
    userName: "Anshul",
    userAge: 33,
    userDesignation: "Developer",
    salary: 1000
}

var employeeArray: IEmployee[] = [employeeDetails, employeeDetailsTwo];

var data: number[] = [10, 20, 30];


function addDta(a: number, b: number): void {
    console.log(a + b)
}