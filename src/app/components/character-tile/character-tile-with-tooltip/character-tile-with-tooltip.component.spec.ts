import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTileWithTooltipComponent } from './character-tile-with-tooltip.component';

describe('CharacterTileComponent', () => {
  let component: CharacterTileWithTooltipComponent;
  let fixture: ComponentFixture<CharacterTileWithTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterTileWithTooltipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterTileWithTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
