import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Subscription, Subject, Observable } from 'rxjs';
import { loginValidator } from 'src/app/validators/login-validator/login-validator';
import { passwordValidator } from 'src/app/validators/password-validator/password-validator';
import { AuthFormService } from '../services/auth-form.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private isDestroy$: Subject<void> = new Subject();
  public loginForm: FormGroup;
  public hasError: Boolean = true;
  public loginFormChangesSub: Subscription;
  public hasErrorBox: Boolean = false;
  public user: IUser = {
    login: 'q',
    password: 'q'
  };
  public currentUser: string;

  public get login() {
    return this.loginForm.get('login');
  }

  public get password() {
    return this.loginForm.get('password');
  }

  constructor(
    private authFormService: AuthFormService,
    private router: Router
  ) {}

  public ngOnInit() {
    this.createForm();

    localStorage.setItem('currentUser', JSON.stringify(this.user));

    if (this.loginFormChangesSub) {
      this.loginFormChangesSub.unsubscribe();
    }

    this.loginFormChangesSub = this.loginForm.valueChanges.subscribe(values => {
      const login = values && values.login;
      const password = values && values.password;
      this.hasError =
        login && password && (this.login.valid && this.password.valid)
          ? false
          : true;
    });
  }

  public createForm() {
    this.loginForm = new FormGroup({
      login: new FormControl(null, {
        validators: [Validators.required, loginValidator()],
        updateOn: 'blur'
      }),
      password: new FormControl(null, {
        validators: [Validators.required, passwordValidator()],
        updateOn: 'blur'
      })
    });

    // this.loginForm = this.formBuilder.group({
    //   login: [
    //     '',
    //     {
    //       validation: [Validators.required, loginValidator()],
    //       updateOn: 'blur'
    //     }
    //   ],
    //   password: [
    //     '',
    //     {
    //       validation: [Validators.required],
    //       updateOn: 'blur'
    //     }
    //   ]
    // });
  }

  public onSignIn() {
    const currentUserData = JSON.parse(localStorage.getItem('currentUser'));
    console.log('currentUserData', currentUserData);
    if (
      this.login.value === currentUserData.login &&
      this.password.value === currentUserData.password
    ) {
      this.authFormService
        .login(this.login.value, this.password.value)
        .pipe(takeUntil(this.isDestroy$))
        .subscribe(() => {
          this.hasErrorBox = false;
          this.router.navigateByUrl('/courses');
        });
    } else {
      this.hasErrorBox = true;
      this.loginForm.get('password').setValue('');
    }
  }

  public ngOnDestroy(): void {
    this.isDestroy$.next();
    this.isDestroy$.complete();
  }
}
