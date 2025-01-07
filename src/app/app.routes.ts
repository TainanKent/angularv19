import { Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicComponent } from './basic/basic.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'test', component: TestComponent },
    { path: 'dash', component: DashboardComponent },
    { path: 'basic', component: BasicComponent },
];
