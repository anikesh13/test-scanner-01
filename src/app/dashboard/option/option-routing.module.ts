import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptComponent } from './opt/opt.component';
import { Opt1Component } from './opt1/opt1.component';
import { Opt2Component } from './opt2/opt2.component';

const routes: Routes = [
  {
    path: '',
    component: OptComponent,
    children: [
      { path: 'option1', component: Opt1Component },
      { path: 'option2', component: Opt2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OptionRoutingModule { }
