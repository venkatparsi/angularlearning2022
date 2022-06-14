import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { PasswordResetComponent } from './pages/password-reset/password-reset.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgotPasswordComponent, OtpVerificationComponent, PasswordResetComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
