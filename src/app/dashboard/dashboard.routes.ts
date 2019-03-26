import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';

const dashboardRoutes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // { path: ':id', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'option', loadChildren: './option/option.module#OptionModule'  }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dashboardRoutes)],
    exports: [RouterModule]
})

export class DashboardRoutingModule { }
