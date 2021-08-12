import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-implementer',
  templateUrl: './pipe-implementer.component.html',
  styleUrls: ['./pipe-implementer.component.css']
})
export class PipeImplementerComponent implements OnInit {


  userName = "Mayank Gupta";
  constructor() { }

  ngOnInit(): void {
  }

}
