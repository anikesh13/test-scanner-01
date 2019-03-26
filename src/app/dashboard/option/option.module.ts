import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptionRoutingModule } from './option-routing.module';
import { OptComponent } from './opt/opt.component';
import { Opt1Component } from './opt1/opt1.component';
import { Opt2Component } from './opt2/opt2.component';

@NgModule({
  declarations: [OptComponent, Opt1Component, Opt2Component],
  imports: [
    CommonModule,
    OptionRoutingModule
  ]
})
export class OptionModule { }
