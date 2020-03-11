import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SshViewComponent } from './ssh-view.component';

describe('SshViewComponent', () => {
  let component: SshViewComponent;
  let fixture: ComponentFixture<SshViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SshViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SshViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
