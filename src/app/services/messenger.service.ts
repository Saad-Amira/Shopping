import { Injectable } from '@angular/core';
//listening and trigger sth 
import{ Subject}  from 'rxjs'; 
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

 subject = new Subject()

  constructor() { }

  sendMsg(product){
    this.subject.next(product) //triggering an event : element declencheur d'un evnmnt 
  } 
  getMsg(){
return this.subject.asObservable() 
  }
}
