import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicalCarouselComponent } from './radical-carousel.component';

describe('RadicalCarouselComponent', () => {
  let component: RadicalCarouselComponent;
  let fixture: ComponentFixture<RadicalCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadicalCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadicalCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
