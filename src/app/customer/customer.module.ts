import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DetailComponent } from './detail/detail.component';



const routes: Routes = [
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'update/:id', component: UpdateComponent},
];
@NgModule({
  declarations: [AddComponent, ListComponent, UpdateComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CustomerModule { }
