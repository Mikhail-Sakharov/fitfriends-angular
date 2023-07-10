import {Component} from '@angular/core';
import {AppRoute} from 'src/app/app.constant';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  public signUpRoute = `/${AppRoute.SignUp}`;
  public signInRoute = `/${AppRoute.SignIn}`;
}
