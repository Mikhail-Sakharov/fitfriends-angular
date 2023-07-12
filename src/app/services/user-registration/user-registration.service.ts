import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ApiRoute, USER_SERVICE_URL} from 'src/app/app.constant';
import CreateUserDto from 'src/app/types/create-user.dto';
import {LoggedUserRdo} from 'src/app/types/logged-user.rdo';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  private userServiceUrl = `${USER_SERVICE_URL}${ApiRoute.RegisterUser}`;

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient: HttpClient
  ) {}

  public registerUser(user: CreateUserDto): Observable<LoggedUserRdo> {
    // TODO добавить сервис работы с localStorage и сохранение токенов
    return this.httpClient.post<LoggedUserRdo>(
      this.userServiceUrl,
      user,
      this.httpOptions
    );
  }
}
