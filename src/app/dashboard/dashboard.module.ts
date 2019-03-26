import { DashboardRoutingModule } from './dashboard.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [LayoutComponent, HomeComponent, AdminComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
