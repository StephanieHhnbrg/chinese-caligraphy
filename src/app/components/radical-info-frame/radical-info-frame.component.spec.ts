import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicalInfoFrameComponent } from './radical-info-frame.component';

describe('RadicalInfoFrameComponent', () => {
  let component: RadicalInfoFrameComponent;
  let fixture: ComponentFixture<RadicalInfoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadicalInfoFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadicalInfoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
