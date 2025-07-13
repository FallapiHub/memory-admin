import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageScoreBars } from './average-score-bars';

describe('AverageScoreBars', () => {
  let component: AverageScoreBars;
  let fixture: ComponentFixture<AverageScoreBars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageScoreBars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageScoreBars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
