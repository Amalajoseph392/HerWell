import { Component } from '@angular/core';
import { HerService } from 'src/app/her.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { teen } from 'src/assets/data';
@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}
  transform(url:any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-bsingle-post',
  templateUrl: './bsingle-post.component.html',
  styleUrls: ['./bsingle-post.component.css']
})
export class BsinglePostComponent { 
  single:any
constructor(private show:HerService){}
ngOnInit():void{
  let id=localStorage.getItem('id')
  let cat=localStorage.getItem('cat')
  console.log(cat);
  console.log(id);
  
  
if(cat==='teen'){
  let singleDataArray= this.show.getTeen()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}

else if(cat==='periods'){
  let singleDataArray= this.show.getPeriods()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}


else if(cat==='preg'){
  let singleDataArray= this.show.getPreg()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}


else if(cat==='abortion'){
  let singleDataArray= this.show.getAbortion()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}


else if(cat==='post'){
  let singleDataArray= this.show.getPost()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}


else if(cat==='pcod'){
  let singleDataArray= this.show.getPcod()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}

else if(cat==='bhome'){
  let singleDataArray= this.show.getBhome()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}

else{
  let singleDataArray= this.show.getPcod()
  console.log(singleDataArray);
  
  this.single=singleDataArray.filter(e=>e.title===id)
  console.log(this.single)
}


}
}
