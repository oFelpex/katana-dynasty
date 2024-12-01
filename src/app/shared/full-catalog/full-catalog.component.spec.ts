import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCatalogComponent } from './full-catalog.component';

describe('FullCatalogComponent', () => {
  let component: FullCatalogComponent;
  let fixture: ComponentFixture<FullCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullCatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
