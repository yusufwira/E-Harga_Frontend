import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbuCreateComponent } from './sbu-create.component';

describe('SbuCreateComponent', () => {
  let component: SbuCreateComponent;
  let fixture: ComponentFixture<SbuCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbuCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbuCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
