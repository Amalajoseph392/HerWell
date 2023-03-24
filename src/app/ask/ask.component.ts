import { Component } from '@angular/core';
import { HerService } from '../her.service';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent {
  ques:string='';

  constructor(private hero:HerService){}
  submit(){
    let details={
     ques:this.ques
    }
  

  this.hero.setData(details);
  this.ques='';

  }
}
