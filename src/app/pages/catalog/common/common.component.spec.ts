import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonComponent } from './common.component';

describe('CommunComponent', () => {
  let component: CommonComponent;
  let fixture: ComponentFixture<CommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
