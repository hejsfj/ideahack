import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDashboardComponent } from './city-dashboard.component';

describe('CityDashboardComponent', () => {
  let component: CityDashboardComponent;
  let fixture: ComponentFixture<CityDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
