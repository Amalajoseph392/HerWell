import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { abortion, bhome, pcod, periods, post, preg, teen } from 'src/assets/data';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class HerService {

  constructor(private fs:Firestore) {}
  getTeen(){
    return teen
  }

  getSingle(id:any){
    return teen[id]
  }

getPreg(){
  return preg
}

getPregSingle(id:any){
  return preg[id]
  }

getPeriods(){
  return periods
}

getPeriodsSingle(id:any){
  return periods[id]
  }


getAbortion(){
  return abortion
}

getAbortionSingle(id:any){
  return abortion[id]
  }


getPost(){
  return post
}

getPostSingle(id:any){
  return post[id]
  }


getPcod(){
  return pcod
}

getPcodSingle(id:any){
  return pcod[id]
  }

getBhome(){
  return bhome
}

getBhomeSingle(id:any){
  return bhome[id]
  }



setData(details:any){   
  const contactinfo=collection(this.fs,'questions')
  addDoc(contactinfo,details).then(result=>{
   console.log(result)
   Swal.fire(
    'Good job!',
    'Question Submitted Successfully!',
    'success'
  )
  }).catch(err=>{
   console.log(err);
  })

  }


  addData(data:any){
    const dataCollection = collection(this.fs,'subscription')
    addDoc(dataCollection,data).then(res=>{
      console.log(res);
      Swal.fire(
        'Good job!',
        'Thankyou For Subscribing',
        'success'
      )
    }).catch(err=>{
      console.log(err);
    })
  }


 commentData(details:any){   
    const comments=collection(this.fs,'comments1')
    addDoc(comments,details).then(result=>{
     console.log(result)
     Swal.fire(
      'Good job!',
      'We value Your Comment',
      'success'
    )
    }).catch(err=>{
     console.log(err);
    })
 
   } 

   contactData(contactinfo:any){   
    const comments=collection(this.fs,'contact')
    addDoc(comments,contactinfo).then(result=>{
     console.log(result)
     Swal.fire(
      'Good job!',
      'Thankyou For Contacting Us',
      'success'
    )
    }).catch(err=>{
     console.log(err);
    })
 
   } 

 }
 
 



