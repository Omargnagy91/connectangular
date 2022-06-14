import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFactoriesComponent } from './dashboard-factories.component';

describe('DashboardFactoriesComponent', () => {
  let component: DashboardFactoriesComponent;
  let fixture: ComponentFixture<DashboardFactoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFactoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFactoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
