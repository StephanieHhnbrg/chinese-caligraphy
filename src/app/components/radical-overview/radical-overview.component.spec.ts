import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadicalOverviewComponent } from './radical-overview.component';

describe('RadicalOverviewComponent', () => {
  let component: RadicalOverviewComponent;
  let fixture: ComponentFixture<RadicalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadicalOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadicalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
