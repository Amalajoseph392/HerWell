import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HerService } from '../her.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component {



  constructor(private show :HerService,private router : Router){
  }

  database=this.show.getTeen();
gotoHere(id:string){
  localStorage.setItem('id',id)
  this.router.navigate(['/single'])
}


  teen=[
    
    
    
    {
           
               "id":"1",
               "photo":"https://pyxis.nymag.com/v1/imgs/47c/71a/130bf1e557e534b3f2be3351afc2ecf952-17-rachel-green-jewish.rsquare.w700.jpg",
               "name":"Dr.RACHEL GREEN",
             "des":"Sexologist"
            },
    
    
     {
      "id":"2",
      "photo":"https://staticg.sportskeeda.com/editor/2021/12/ce8b2-16403350924610-1920.jpg",
      "name":"DR. DRAKE RAMORAY",
    "des":"Obstetrician and Gynecologist"
            
        },
        
{

  "id":"3",
  "photo":"https://www.stylist.co.uk/images/app/uploads/2019/09/12102728/gettyimages-143479380-1120x1120.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress",
  "name":"PHEOBE BUFFAY",
"des":"Adolescent Medicine Specialist"
       },

   





      ]}


      