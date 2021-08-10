import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employeeList = [{
    name: "Mayank Gupta",
    info: "Mayank is Working as a Trainer for Frontent Technologies...",
    image: "https://st3.depositphotos.com/1000975/17945/i/600/depositphotos_179453774-stock-photo-businessman-winning-best-employee-of.jpg"
  }, {
    name: "Anshul Gupta",
    info: "Anshul is Working as a Trainer for Frontent Technologies...",
    image: "https://st3.depositphotos.com/1000975/17945/i/600/depositphotos_179453774-stock-photo-businessman-winning-best-employee-of.jpg"
  }, {
    name: "Meha Gupta",
    info: "Meha is Working as a Trainer for Frontent Technologies...",
    image: "https://st3.depositphotos.com/1000975/17945/i/600/depositphotos_179453774-stock-photo-businessman-winning-best-employee-of.jpg"
  }, {
    name: "Ankit Gupta",
    info: "Ankit is Working as a Trainer for Frontent Technologies...",
    image: "https://st3.depositphotos.com/1000975/17945/i/600/depositphotos_179453774-stock-photo-businessman-winning-best-employee-of.jpg"
  }, {
    name: "Aniket Gupta",
    info: "Aniket is Working as a Trainer for Frontent Technologies...",
    image: "https://st3.depositphotos.com/1000975/17945/i/600/depositphotos_179453774-stock-photo-businessman-winning-best-employee-of.jpg"
  }]
  constructor() { }

}
