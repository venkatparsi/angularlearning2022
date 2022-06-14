import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OtpVerificationComponent } from './otp-verification.component';

describe('OtpVerificationComponent', () => {
  let component: OtpVerificationComponent;
  let fixture: ComponentFixture<OtpVerificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
