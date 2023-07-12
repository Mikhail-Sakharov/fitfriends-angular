import {Gender, Location, TrainingLevel, TrainingType, UserRole} from '../app.constant';
import {Questionnaire, User} from './user.interface';

export class UserRdo {
  public id!: string;
  public createdAt!: string[];
  public updatedAt!: string[];
  public userName!: string;
  public email!: string;
  public avatarUrl!: string;
  public gender!: Gender;
  public birthday!: string;
  public userRole!: UserRole;
  public location!: Location;
  public trainingLevel!: TrainingLevel;
  public trainingTypes!: TrainingType[];
  public questionnaire!: Questionnaire;
  public myFriends!: User[];
}
