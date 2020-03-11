import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratUsulanComponent } from './surat-usulan.component';

describe('SuratUsulanComponent', () => {
  let component: SuratUsulanComponent;
  let fixture: ComponentFixture<SuratUsulanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuratUsulanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratUsulanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
