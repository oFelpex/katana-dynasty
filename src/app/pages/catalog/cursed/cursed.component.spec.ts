import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursedComponent } from './cursed.component';

describe('CursedComponent', () => {
  let component: CursedComponent;
  let fixture: ComponentFixture<CursedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
