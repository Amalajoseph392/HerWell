import { Component } from '@angular/core';
import { HerService } from '../her.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  name:string='';
  email:string='';
  constructor(private fire:HerService){}

  submit(){
    let data={
     name:this.name,
     email:this.email
    } 
    this.fire.addData(data)
    this.name='';
    this.email='';
   


 }

}
