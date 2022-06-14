import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeStartnowComponent } from './home-startnow.component';

describe('HomeStartnowComponent', () => {
  let component: HomeStartnowComponent;
  let fixture: ComponentFixture<HomeStartnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeStartnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeStartnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
