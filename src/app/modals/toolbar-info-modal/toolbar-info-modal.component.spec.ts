import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarInfoModalComponent } from './toolbar-info-modal.component';

describe('ToolbarInfoModalComponent', () => {
  let component: ToolbarInfoModalComponent;
  let fixture: ComponentFixture<ToolbarInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarInfoModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
