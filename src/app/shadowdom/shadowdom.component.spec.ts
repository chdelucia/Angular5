import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowdomComponent } from './shadowdom.component';

describe('ShadowdomComponent', () => {
  let component: ShadowdomComponent;
  let fixture: ComponentFixture<ShadowdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
