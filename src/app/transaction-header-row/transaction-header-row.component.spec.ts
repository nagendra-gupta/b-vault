import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHeaderRowComponent } from './transaction-header-row.component';

describe('TransactionHeaderRowComponent', () => {
  let component: TransactionHeaderRowComponent;
  let fixture: ComponentFixture<TransactionHeaderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionHeaderRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionHeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
