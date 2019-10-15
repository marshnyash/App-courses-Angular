import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {
  constructor() {}

  public login(login: string, password: string): Observable<IUser> {
    const user = {
      login: login,
      password: password
    };
    return of(user);
    // .pipe(
    //   tap(userData => {
    //     return userData;
    //   })
    // );
  }
}
