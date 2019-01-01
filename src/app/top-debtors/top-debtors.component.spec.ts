import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDebtorsComponent } from './top-debtors.component';

describe('TopDebtorsComponent', () => {
  let component: TopDebtorsComponent;
  let fixture: ComponentFixture<TopDebtorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDebtorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDebtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
