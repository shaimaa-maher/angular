import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todos =[
    {
      title:'have a goooooooooooooood day ',
      id :1,
      // isChekced :'',
      // isDeletes : ''
    },
    {
      title:'complete all labs and codes ',
      id :2,
      // isChekced :'',
      // isDeletes : ''
    },
    {
      title:'buy a wifi usb to my laptop',
      id :3,
      // isChekced :'',
      // isDeletes : ''
    },
    {
      title:'get more ideas for the graduation project',
      id :4,
      // isChekced :'',
      // isDeletes : ''
    },
  ];

  private serviceTodoSubject = new BehaviorSubject(this.todos);

  get serviceTodoSubjectObservable()
  {
    return this.serviceTodoSubjectObservable;
  }

  set serviceTodoSubjectObservable(todos)
  {
    this.serviceTodoSubjectObservable= todos;
   
  }
  
  constructor() {}

  
}
