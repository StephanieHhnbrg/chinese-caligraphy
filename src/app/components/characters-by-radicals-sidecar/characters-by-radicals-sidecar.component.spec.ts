import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersByRadicalsSidecarComponent } from './characters-by-radicals-sidecar.component';

describe('CharactersByRadicalsSidecarComponent', () => {
  let component: CharactersByRadicalsSidecarComponent;
  let fixture: ComponentFixture<CharactersByRadicalsSidecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersByRadicalsSidecarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersByRadicalsSidecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
