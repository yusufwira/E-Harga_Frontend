import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsbSshComponent } from './asb-ssh.component';

describe('AsbSshComponent', () => {
  let component: AsbSshComponent;
  let fixture: ComponentFixture<AsbSshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsbSshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsbSshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
