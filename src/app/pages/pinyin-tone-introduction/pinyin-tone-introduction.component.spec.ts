import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinyinToneIntroductionComponent } from './pinyin-tone-introduction.component';

describe('PinyinToneIntroductionComponent', () => {
  let component: PinyinToneIntroductionComponent;
  let fixture: ComponentFixture<PinyinToneIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinyinToneIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinyinToneIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
