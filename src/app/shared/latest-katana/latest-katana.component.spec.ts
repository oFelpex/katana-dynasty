import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestKatanaComponent } from './latest-katana.component';

describe('LatestKatanaComponent', () => {
  let component: LatestKatanaComponent;
  let fixture: ComponentFixture<LatestKatanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestKatanaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestKatanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
