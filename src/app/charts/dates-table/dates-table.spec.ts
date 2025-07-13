import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatesTable } from './dates-table';

describe('DatesTable', () => {
  let component: DatesTable;
  let fixture: ComponentFixture<DatesTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatesTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatesTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
