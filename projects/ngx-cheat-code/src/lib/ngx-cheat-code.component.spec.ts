import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCheatCodeComponent } from './ngx-cheat-code.component';

describe('NgxCheatCodeComponent', () => {
  let component: NgxCheatCodeComponent;
  let fixture: ComponentFixture<NgxCheatCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCheatCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCheatCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
