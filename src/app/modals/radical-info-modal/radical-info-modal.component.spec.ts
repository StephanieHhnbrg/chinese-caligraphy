import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicalInfoModalComponent } from './radical-info-modal.component';

describe('RadicalInfoModalComponent', () => {
  let component: RadicalInfoModalComponent;
  let fixture: ComponentFixture<RadicalInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadicalInfoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadicalInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
