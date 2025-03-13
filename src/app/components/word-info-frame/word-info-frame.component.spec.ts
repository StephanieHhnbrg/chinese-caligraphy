import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInfoFrameComponent } from './word-info-frame.component';

describe('WordInfoFrameComponent', () => {
  let component: WordInfoFrameComponent;
  let fixture: ComponentFixture<WordInfoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordInfoFrameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordInfoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
