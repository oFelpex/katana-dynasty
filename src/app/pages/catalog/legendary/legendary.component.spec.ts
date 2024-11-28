import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendaryComponent } from './legendary.component';

describe('LegendaryComponent', () => {
  let component: LegendaryComponent;
  let fixture: ComponentFixture<LegendaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegendaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegendaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
