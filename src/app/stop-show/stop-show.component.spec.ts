import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopShowComponent } from './stop-show.component';

describe('StopShowComponent', () => {
  let component: StopShowComponent;
  let fixture: ComponentFixture<StopShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
