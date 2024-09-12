import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMainSectionComponent } from './store-main-section.component';

describe('StoreMainSectionComponent', () => {
  let component: StoreMainSectionComponent;
  let fixture: ComponentFixture<StoreMainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreMainSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
