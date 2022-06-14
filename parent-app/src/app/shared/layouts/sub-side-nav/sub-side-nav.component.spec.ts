import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SubSideNavComponent } from './sub-side-nav.component';

describe('SubSideNavComponent', () => {
  let component: SubSideNavComponent;
  let fixture: ComponentFixture<SubSideNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
