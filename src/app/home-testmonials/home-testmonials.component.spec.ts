import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTestmonialsComponent } from './home-testmonials.component';

describe('HomeTestmonialsComponent', () => {
  let component: HomeTestmonialsComponent;
  let fixture: ComponentFixture<HomeTestmonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTestmonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTestmonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
