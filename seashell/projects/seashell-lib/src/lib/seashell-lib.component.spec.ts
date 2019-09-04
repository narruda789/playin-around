import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeashellLibComponent } from './seashell-lib.component';

describe('SeashellLibComponent', () => {
  let component: SeashellLibComponent;
  let fixture: ComponentFixture<SeashellLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeashellLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeashellLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
