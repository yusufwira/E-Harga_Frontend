import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HspkSbuComponent } from './hspk-sbu.component';

describe('HspkSbuComponent', () => {
  let component: HspkSbuComponent;
  let fixture: ComponentFixture<HspkSbuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HspkSbuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HspkSbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
