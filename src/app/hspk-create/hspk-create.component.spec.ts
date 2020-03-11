import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HspkCreateComponent } from './hspk-create.component';

describe('HspkCreateComponent', () => {
  let component: HspkCreateComponent;
  let fixture: ComponentFixture<HspkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HspkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HspkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
