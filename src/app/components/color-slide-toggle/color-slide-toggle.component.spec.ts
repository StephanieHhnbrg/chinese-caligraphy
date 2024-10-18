import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorSlideToggleComponent } from './color-slide-toggle.component';

describe('ColorSlideToggleComponent', () => {
  let component: ColorSlideToggleComponent;
  let fixture: ComponentFixture<ColorSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorSlideToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
