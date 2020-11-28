import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelFormComponent } from './model-form/model-form.component';

const routes: Routes = [
  {path: 'modelform', component: ModelFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
