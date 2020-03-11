import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HspkDetailComponent } from './hspk-detail.component';

describe('HspkDetailComponent', () => {
  let component: HspkDetailComponent;
  let fixture: ComponentFixture<HspkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HspkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HspkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
