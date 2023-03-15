import { getLocaleExtraDayPeriods } from '@angular/common';
import { Injectable } from '@angular/core';
import { abortion, bhome, pcod, periods, post, preg, teen } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HerService {

  constructor() {}
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


}
