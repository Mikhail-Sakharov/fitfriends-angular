import {Duration, Gender, Location, TrainingLevel, TrainingType, UserRole} from '../app.constant';

export interface CoachQuestionnaire {
  certificates: string[];
  description: string;
  isReadyToTrain: boolean;
};

export interface UserQuestionnaire {
  trainingDuration: Duration;
  dailyCaloriesCount: number;
  totalCaloriesCount: number;
  description?: string;
  isReadyToGetTrained: boolean;
};

export type Questionnaire = CoachQuestionnaire | UserQuestionnaire;

export interface User {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  userName: string;
  email: string;
  avatarUrl?: string;
  passwordHash: string;
  gender: Gender;
  birthday?: string;
  userRole: UserRole;
  location: Location;
  trainingLevel: TrainingLevel;
  trainingTypes: TrainingType[];
  questionnaire: Questionnaire;
  myFriends?: string[];
  refreshToken?: string | null;
}
