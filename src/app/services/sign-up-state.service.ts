import {Injectable} from '@angular/core';
import {Gender, Location, UserRole} from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class SignUpStateService {
  public avatarFile: File | null = null;
  public avatarUrl: string | null = null;
  public userName: string | null = null;
  public email: string | null = null;
  public birthDate: string | null = null;
  public location: Location | null = null;
  public password: string | null = null;
  public gender: Gender | null = null;
  public userRole: UserRole | null = null;
}
