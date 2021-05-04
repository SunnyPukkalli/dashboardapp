import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path:'',redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent,pathMatch:'full'},
  { path:'dashboard', component:DashboardComponent,pathMatch:'full', canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
