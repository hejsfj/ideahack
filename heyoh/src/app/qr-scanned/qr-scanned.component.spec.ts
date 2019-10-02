import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrScannedComponent } from './qr-scanned.component';

describe('QrScannedComponent', () => {
  let component: QrScannedComponent;
  let fixture: ComponentFixture<QrScannedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrScannedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrScannedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
