import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyappComponent } from './myapp/myapp/myapp.component';


const routes: Routes = [
  { path: 'myapp', component: MyappComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
