import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbComponent } from './asb.component';

describe('AsbComponent', () => {
  let component: AsbComponent;
  let fixture: ComponentFixture<AsbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
