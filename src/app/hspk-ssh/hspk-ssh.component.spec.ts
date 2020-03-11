import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HspkSshComponent } from './hspk-ssh.component';

describe('HspkSshComponent', () => {
  let component: HspkSshComponent;
  let fixture: ComponentFixture<HspkSshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HspkSshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HspkSshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
