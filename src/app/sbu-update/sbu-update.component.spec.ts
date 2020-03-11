import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbuUpdateComponent } from './sbu-update.component';

describe('SbuUpdateComponent', () => {
  let component: SbuUpdateComponent;
  let fixture: ComponentFixture<SbuUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbuUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbuUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
