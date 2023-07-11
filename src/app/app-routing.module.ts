import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IntroComponent} from './pages/intro/intro.component';
import {SignUpComponent} from './pages/sign-up/sign-up.component';
import {AppRoute} from './app.constant';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {SignUpQuestionnaireCoachComponent} from './pages/sign-up-questionnaire-coach/sign-up-questionnaire-coach.component';
import {SignUpQuestionnaireUserComponent} from './pages/sign-up-questionnaire-user/sign-up-questionnaire-user.component';

const routes: Routes = [
  {path: '', redirectTo: AppRoute.Intro, pathMatch: 'full'},
  {path: AppRoute.Intro, component: IntroComponent},
  {path: AppRoute.SignUp, component: SignUpComponent},
  {path: AppRoute.SignUpCoach, component: SignUpQuestionnaireCoachComponent},
  {path: AppRoute.SignUpUser, component: SignUpQuestionnaireUserComponent},
  {path: AppRoute.SignIn, component: SignInComponent},
  {path: AppRoute.NotFound, component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
