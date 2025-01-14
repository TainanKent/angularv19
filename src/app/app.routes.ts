import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BasicComponent } from './pages/basic/basic.component';
import { Chat2Component } from './pages/chat2/chat2.component';
import { Chat3Component } from './pages/chat3/chat3.component';
export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'dash', component: DashboardComponent },
    { path: 'basic', component: BasicComponent },
    { path: 'chat2', component: Chat2Component },
    { path: 'chat3', component: Chat3Component },
];
