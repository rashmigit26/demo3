import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenttransactionComponent } from './recenttransaction.component';

describe('RecenttransactionComponent', () => {
  let component: RecenttransactionComponent;
  let fixture: ComponentFixture<RecenttransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenttransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecenttransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
