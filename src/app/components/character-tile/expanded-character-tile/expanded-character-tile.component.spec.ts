import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedCharacterTileComponent } from './expanded-character-tile.component';

describe('ExpandedCharacterTileComponent', () => {
  let component: ExpandedCharacterTileComponent;
  let fixture: ComponentFixture<ExpandedCharacterTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandedCharacterTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandedCharacterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
