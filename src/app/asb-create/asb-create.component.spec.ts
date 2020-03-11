import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbCreateComponent } from './asb-create.component';

describe('AsbCreateComponent', () => {
  let component: AsbCreateComponent;
  let fixture: ComponentFixture<AsbCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsbCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
