import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  showLoader: boolean = false;
  hide: boolean = true;
  isEmail: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

  loginUser(loginForm: NgForm) {
    console.log(loginForm);


    this.showLoader = true;

    let header = {
      'X-USER': loginForm.value.userEmail, 'X-PASS': loginForm.value.userPassword
    };
    this.authService.login(header).pipe(takeUntil(this.destroy$))
      .subscribe(userLoggedInResponseData => {
        console.log('userLoggedInResponseDatauserLoggedInResponseData', userLoggedInResponseData)
        const sessionID = userLoggedInResponseData['headers'].get('X-SESSIONID');
        sessionStorage.setItem('ccsa_session_id', sessionID);
        this.router.navigateByUrl('/dashboard');
      }, error => {
        this.showLoader = false;
        console.log(error);
        this.snackBar.open('Invalid Credentials', 'OK', {
          duration: 3000
        });
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
