import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaligraphyGardenPageComponent } from './caligraphy-garden-page.component';

describe('CaligraphyGardenPageComponent', () => {
  let component: CaligraphyGardenPageComponent;
  let fixture: ComponentFixture<CaligraphyGardenPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaligraphyGardenPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaligraphyGardenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
