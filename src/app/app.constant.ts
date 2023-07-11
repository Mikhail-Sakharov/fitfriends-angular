export enum AppRoute {
  Intro = 'intro',
  SignUp = 'sign-up',
  SignIn = 'sign-in',
  SignUpCoach = 'coach',
  SignUpUser = 'user',
  NotFound = '**'
}

export enum Location {
  Pionerskaya = 'Пионерская',
  Petrogradskaya = 'Петроградская',
  Udelnaya = 'Удельная',
  Zvezdnaya = 'Звёздная',
  Sportivnaya = 'Спортивная'
}

export enum UserRole {
  Coach = 'тренер',
  User = 'пользователь'
}

export enum Gender {
  Male = 'мужской',
  Female = 'женский',
  Undefined = 'неважно'
}

export enum CustomSelectClassName {
  Opened = 'is-open',
  NotEmpty = 'not-empty'
}
