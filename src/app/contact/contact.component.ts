import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<h2>{{name}}</h2><br>converting to uppercase : <h2>{{name | uppercase}}</h2><br>converting to lowercase<h2>{{name | lowercase}}</h2><br>Slice: {{message | slice:3}} <br> <h2> Json :<br>{{person | json}}',
  styles: []
})


export class ContactComponent implements OnInit {

public name="Angular js is running";
public message = "welcome to javascript";
public person = {
  "firstName" : "John",
  "lastName" : "Doe"
}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


}
