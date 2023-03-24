import { Component } from '@angular/core';
import { HerService } from 'src/app/her.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  name:string='';
comment:string='';

constructor(private fire:HerService){}

submit(){
  let commentinfo={
   name:this.name,
   comment:this.comment
}

this.fire.commentData(commentinfo)
 this.name='';
 this.comment='';


}
}
