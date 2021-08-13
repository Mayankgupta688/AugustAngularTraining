import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.less']
})
export class ReactiveComponent {

  employeeDetailsForm = new FormGroup({
    userName: new FormControl("Anshul Gupta", [Validators.required]),
    userId: new FormControl("40000", [Validators.required, Validators.min(200)]),
    userCreatedAt: new FormControl("", [Validators.required, Validators.minLength(6)]),
    userAvatar: new FormControl("https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGVtcGxveWVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",[Validators.required, Validators.minLength(10)])
  });

  submitData() {
    debugger;
  }

}
