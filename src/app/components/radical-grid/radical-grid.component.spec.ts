import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicalGridComponent } from './radical-grid.component';

describe('RadicalGridComponent', () => {
  let component: RadicalGridComponent;
  let fixture: ComponentFixture<RadicalGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadicalGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadicalGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
