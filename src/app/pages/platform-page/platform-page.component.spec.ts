import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformPageComponent } from './platform-page.component';

describe('PlatformPageComponent', () => {
  let component: PlatformPageComponent;
  let fixture: ComponentFixture<PlatformPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
