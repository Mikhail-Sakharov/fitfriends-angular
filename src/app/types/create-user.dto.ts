import {Gender, Location, TrainingLevel, TrainingType, UserRole} from '../app.constant';
import {Questionnaire} from './user.interface';

export default class CreateUserDto {
  public userName!: string;
  public email!: string;
  public avatarUrl?: string;
  public password!: string;
  public gender!: Gender;
  public birthday?: string;
  public userRole!: UserRole;
  public location!: Location;
  public trainingLevel!: TrainingLevel;
  public trainingTypes!: TrainingType[];
  public questionnaire!: Questionnaire;
}
