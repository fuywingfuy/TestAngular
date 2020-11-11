import { UserService } from './../services/user.service';
import { ToDoItem } from './../app.todoitem ';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  items$: ToDoItem[];
  id: string;
  constructor(private usersService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getService();
  }

  getService(): void {
    this.usersService.getUsers().subscribe((items) => {this.items$ = items});
  }

  switch(): void {
    if(confirm("Sure to discard changes")) {
        this.router.navigate(['/todo']);
    }
  }
}
