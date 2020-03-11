import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsulanUpdateComponent } from './usulan-update.component';

describe('UsulanUpdateComponent', () => {
  let component: UsulanUpdateComponent;
  let fixture: ComponentFixture<UsulanUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsulanUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsulanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
