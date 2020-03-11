import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshCreateComponent } from './ssh-create.component';

describe('SshCreateComponent', () => {
  let component: SshCreateComponent;
  let fixture: ComponentFixture<SshCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
