import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {TodoServiceService} from '../../shared/services/todoService.service' ;

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public todoList =[];
  private todoServiceSubscription:Subscription;

  constructor(private _todoService : TodoServiceService) {}

  ngOnInit() {
    
    this.todoServiceSubscription = this._todoService.serviceTodoSubjectObservable.subscribe((data)=>
    {
      this.todoList = data;
      console.log(data);
    }
    );
    
  }
  ngOnDestroy()
  {
  this.todoServiceSubscription.unsubscribe();
  }

}
