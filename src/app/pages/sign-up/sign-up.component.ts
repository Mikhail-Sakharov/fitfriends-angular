import {Component} from '@angular/core';
import {
  AppRoute,
  CustomSelectClassName,
  Gender,
  Location,
  UserRole,
  UserRoleDependentRedirectionRouteMap
} from 'src/app/app.constant';
import {SignUpStateService} from 'src/app/services/sign-up-state.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  public avatarUrl: string | null = null;
  public isAvatarSelected = false;
  public isCustomSelectOpened = false;
  public genderList = Object.values(Gender);

  public locations = Object.values(Location);
  public selectedLocation: Location | null = null;
  public locationSelectClasses = {
    [CustomSelectClassName.Opened]: false,
    [CustomSelectClassName.NotEmpty]: false
  };

  public userRole: UserRole | null = this.signUpStateService.userRole;
  public isUserRoleUser = this.userRole === UserRole.User;
  public isUserRoleCoach = this.userRole === UserRole.Coach;
  public userRoleDependentRedirectionRoute = this.userRole !== null
    ? UserRoleDependentRedirectionRouteMap[this.userRole]
    : `/${AppRoute.SignUp}`;

  public isUserAgreementInputChecked = true;

  constructor(
    private signUpStateService: SignUpStateService
  ) {}

  public handleFileInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const files = target.files;
    const file = files !== null ? files[0] : null;

    this.signUpStateService.avatarFile = file;
    this.avatarUrl = file ? URL.createObjectURL(file) : null;
    this.isAvatarSelected = true;
  }

  public handleUserNameInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const userNameValue = target.value;

    this.signUpStateService.userName = userNameValue;
  }

  public handleEmailInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const emailValue = target.value;

    this.signUpStateService.email = emailValue;
  }

  public handleBirthDateInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const birthDate = target.value;

    this.signUpStateService.birthDate = birthDate;
  }

  public handlePasswordInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const password = target.value;

    this.signUpStateService.password = password;
  }

  public handleGenderInputChange(gender: Gender) {
    this.signUpStateService.gender = gender;
  }

  public handleUserRoleInputChange(evt: Event) {
    const target = evt.currentTarget as HTMLInputElement;
    const value = target.value;

    const userRole = UserRole[value as keyof typeof UserRole];
    this.signUpStateService.userRole = userRole;
    this.userRoleDependentRedirectionRoute = UserRoleDependentRedirectionRouteMap[userRole];
  }

  public handleOpenCustomSelectButtonClick = () => {
    this.locationSelectClasses[CustomSelectClassName.Opened] = !this.isCustomSelectOpened
    this.isCustomSelectOpened = !this.isCustomSelectOpened;
  }

  public handleLocationSelectItemClick(location: Location) {
    this.locationSelectClasses = {
      [CustomSelectClassName.Opened]: !this.isCustomSelectOpened,
      [CustomSelectClassName.NotEmpty]: true
    };
    this.selectedLocation = location;
    this.signUpStateService.location = location;
    this.isCustomSelectOpened = false;
  }

  public handleUserAgreementInputChange() {
    this.isUserAgreementInputChecked = !this.isUserAgreementInputChecked;
  }

  public handleProceedButtonClick(evt: Event) {
    evt.preventDefault();
  }
}
