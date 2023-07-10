import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from './pages/intro/intro.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {AppRoute} from './app.constant';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';

const routes: Routes = [
  {path: '', redirectTo: AppRoute.Intro, pathMatch: 'full'},
  {path: AppRoute.Intro, component: IntroComponent},
  {path: AppRoute.SignUp, component: SignUpComponent},
  {path: AppRoute.SignIn, component: SignInComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
