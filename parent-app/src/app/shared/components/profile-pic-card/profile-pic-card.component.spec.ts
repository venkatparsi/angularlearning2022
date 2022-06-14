import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePicCardComponent } from './profile-pic-card.component';

describe('ProfilePicCardComponent', () => {
  let component: ProfilePicCardComponent;
  let fixture: ComponentFixture<ProfilePicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePicCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
