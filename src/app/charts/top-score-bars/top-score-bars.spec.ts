import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScoreBars } from './top-score-bars';

describe('TopScoreBars', () => {
  let component: TopScoreBars;
  let fixture: ComponentFixture<TopScoreBars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopScoreBars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopScoreBars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
