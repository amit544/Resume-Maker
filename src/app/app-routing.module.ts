import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FrontComponent } from './front/front.component';
import { Resume1Component } from './resume1/resume1.component';


const routes: Routes = [
 
  {path:'',component:FrontComponent},
  {path:'form',component:FormComponent},
  {path:'resume1',component:Resume1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
