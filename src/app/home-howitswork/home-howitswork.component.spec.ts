import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHowitsworkComponent } from './home-howitswork.component';

describe('HomeHowitsworkComponent', () => {
  let component: HomeHowitsworkComponent;
  let fixture: ComponentFixture<HomeHowitsworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHowitsworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHowitsworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
