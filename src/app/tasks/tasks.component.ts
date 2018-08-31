import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {TasksService} from '../services/tasksservice/tasks.service';
import {Hero} from '../model/hero';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  title = 'fucks';
  heroes: Hero[];

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.fillHeroes();
  }

  fillHeroes(): void {
    this.taskService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
