import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDisplayDetailsComponent } from './toggle-display-details.component';

describe('ToggleDisplayDetailsComponent', () => {
  let component: ToggleDisplayDetailsComponent;
  let fixture: ComponentFixture<ToggleDisplayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleDisplayDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleDisplayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
