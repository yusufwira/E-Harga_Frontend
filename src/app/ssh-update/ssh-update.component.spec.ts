import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshUpdateComponent } from './ssh-update.component';

describe('SshUpdateComponent', () => {
  let component: SshUpdateComponent;
  let fixture: ComponentFixture<SshUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
