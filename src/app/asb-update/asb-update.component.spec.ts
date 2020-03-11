import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbUpdateComponent } from './asb-update.component';

describe('AsbUpdateComponent', () => {
  let component: AsbUpdateComponent;
  let fixture: ComponentFixture<AsbUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsbUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsbUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
