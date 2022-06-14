import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFactoriesComponent } from './home-factories.component';

describe('HomeFactoriesComponent', () => {
  let component: HomeFactoriesComponent;
  let fixture: ComponentFixture<HomeFactoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFactoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFactoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
