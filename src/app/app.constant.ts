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

export enum TrainingType {
  Yoga = 'йога',
  Running = 'бег',
  Boxing = 'бокс',
  Stratching = 'стрейчинг',
  Crossfit = 'кроссфит',
  Aerobics = 'аэробика',
  Pilates = 'пилатес',
  PowerLifting = 'силовые'
}

export enum Duration {
  TenToThirty = '10-30 мин',
  ThirtyToFifty = '30-50 мин',
  FiftyToEighty = '50-80 мин',
  LongerThanEighty = 'больше 80 мин'
}

export enum TrainingLevel {
  Newbie = 'новичок',
  Amateur = 'любитель',
  Pro = 'профессионал'
}

export enum CustomSelectClassName {
  Opened = 'is-open',
  NotEmpty = 'not-empty'
}

export const UserRoleDependentRedirectionRouteMap = {
  [UserRole.User]: `/${AppRoute.SignUpUser}`,
  [UserRole.Coach]: `/${AppRoute.SignUpCoach}`
}
