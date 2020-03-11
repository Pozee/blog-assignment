import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenasteComponent } from './senaste.component';

describe('SenasteComponent', () => {
  let component: SenasteComponent;
  let fixture: ComponentFixture<SenasteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenasteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
