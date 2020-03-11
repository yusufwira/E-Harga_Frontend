import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbHspkComponent } from './asb-hspk.component';

describe('AsbHspkComponent', () => {
  let component: AsbHspkComponent;
  let fixture: ComponentFixture<AsbHspkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsbHspkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsbHspkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
