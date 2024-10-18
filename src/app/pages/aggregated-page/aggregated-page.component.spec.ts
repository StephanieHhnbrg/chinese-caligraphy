import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatedPageComponent } from './aggregated-page.component';

describe('AggregatedPageComponent', () => {
  let component: AggregatedPageComponent;
  let fixture: ComponentFixture<AggregatedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggregatedPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggregatedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
