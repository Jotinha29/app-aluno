import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { TurmasComponent } from './turmas/turmas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about/:id', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'turmas', component: TurmasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
