import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbDetailComponent } from './asb-detail.component';

describe('AsbDetailComponent', () => {
  let component: AsbDetailComponent;
  let fixture: ComponentFixture<AsbDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsbDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsbDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
