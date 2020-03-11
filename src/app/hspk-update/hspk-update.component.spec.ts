import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HspkUpdateComponent } from './hspk-update.component';

describe('HspkUpdateComponent', () => {
  let component: HspkUpdateComponent;
  let fixture: ComponentFixture<HspkUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HspkUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HspkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
