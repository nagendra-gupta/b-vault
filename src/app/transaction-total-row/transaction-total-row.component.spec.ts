import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTotalRowComponent } from './transaction-total-row.component';

describe('TransactionTotalRowComponent', () => {
  let component: TransactionTotalRowComponent;
  let fixture: ComponentFixture<TransactionTotalRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTotalRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTotalRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
