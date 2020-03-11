import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsulanCreateComponent } from './usulan-create.component';

describe('UsulanCreateComponent', () => {
  let component: UsulanCreateComponent;
  let fixture: ComponentFixture<UsulanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsulanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsulanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
