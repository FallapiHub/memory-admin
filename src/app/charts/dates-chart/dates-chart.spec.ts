import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesChart } from './dates-chart';

describe('DatesChart', () => {
  let component: DatesChart;
  let fixture: ComponentFixture<DatesChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatesChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
