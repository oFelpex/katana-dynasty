import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatanaFormComponent } from './katana-form.component';

describe('KatanaFormComponent', () => {
  let component: KatanaFormComponent;
  let fixture: ComponentFixture<KatanaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KatanaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KatanaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
