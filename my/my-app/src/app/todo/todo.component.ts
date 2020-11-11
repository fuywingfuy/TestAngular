import { ToDoItem } from './../app.todoitem ';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ObjectUnsubscribedError } from 'rxjs';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // item: ToDoItem;
  constructor(private usersService: UserService, private router: Router, private route: ActivatedRoute) { }
  title = 'TO-DO List';
  items$: ToDoItem[];
  item: ToDoItem;

  selectAll: boolean = true;

  getService(): void {
    this.usersService.getUsers().subscribe((items) => {this.items$ = items});
  }

  getMongoId(): string{

    return String(Math.random());
  }

  add(): void {
    let item = {id: this.getMongoId(), description: '', createdTime: new Date(), done: false, favorite: false, children: []};
    // this.usersService.addUser(item).subscribe();

    this.items$.push(item);
  }
  // getServiceId(): void {
  //   this.usersService.getUser(this.item.id).subscribe(i => this.item = i);
  // }
  ngOnInit() {
   // const id = this.route.snapshot.params['id'];
    this.getService();
    //this.getServiceId();
  }

  delete(ids) {
    if(confirm("Sure to delete?")) {
      this.items$ = this.items$.filter(item => ids.indexOf(item.id) === -1);
    }
  }

  search() {
    this.items$[0];
    //return this.items$[0];
    //return this.items$.find(item => item.id = ids);
  }

  switch(id: string): void {
     this.router.navigate(['todo/detail/' + id]);
  }

}

