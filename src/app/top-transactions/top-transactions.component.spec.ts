import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTransactionsComponent } from './top-transactions.component';

describe('TopTransactionsComponent', () => {
  let component: TopTransactionsComponent;
  let fixture: ComponentFixture<TopTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
