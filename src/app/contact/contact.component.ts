import { Component } from '@angular/core';
import { HerService } from '../her.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string='';
  email:string='';
  message:string='';

  constructor(private fire:HerService){}
  submit(){
    let data={
     name:this.name,
     email:this.email,
     message:this.message
    }

    this.fire.contactData(data)
 this.name='';
 this.email='';
 this.message='';


  }


}
