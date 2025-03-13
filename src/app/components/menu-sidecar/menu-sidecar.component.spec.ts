import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSidecarComponent } from './menu-sidecar.component';

describe('MenuSidecarComponent', () => {
  let component: MenuSidecarComponent;
  let fixture: ComponentFixture<MenuSidecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSidecarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSidecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
