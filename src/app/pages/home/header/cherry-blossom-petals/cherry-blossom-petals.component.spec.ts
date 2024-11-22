import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryBlossomPetalsComponent } from './cherry-blossom-petals.component';

describe('CherryBlossomPetalsComponent', () => {
  let component: CherryBlossomPetalsComponent;
  let fixture: ComponentFixture<CherryBlossomPetalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CherryBlossomPetalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CherryBlossomPetalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
