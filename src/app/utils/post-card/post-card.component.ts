import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from 'src/app/her.service';
import { teen } from 'src/assets/data';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  constructor(private show :HerService,private router : Router){
  }
database=this.show.getTeen();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}

}
