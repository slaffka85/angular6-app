import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TasksComponent} from './tasks/tasks.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/#', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'notifications', component: NotificationsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
