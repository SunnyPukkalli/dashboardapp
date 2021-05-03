import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path:'', component:HomeComponent,pathMatch:'full'},
  { path:'login', component:LoginComponent,pathMatch:'full'},
  { path:'dashboard', component:DashboardComponent,pathMatch:'full', canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
