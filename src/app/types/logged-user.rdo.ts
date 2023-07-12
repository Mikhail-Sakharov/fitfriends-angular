import {UserRdo} from './user.rdo';

class Tokens {
  public accessToken!: string;
  public refreshToken!: string;
}

export class LoggedUserRdo {
  public user!: UserRdo;
  public tokens!: Tokens;
}
