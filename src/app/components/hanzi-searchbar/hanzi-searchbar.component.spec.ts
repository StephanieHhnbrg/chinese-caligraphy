import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HanziSearchbarComponent } from './hanzi-searchbar.component';

describe('HanziSearchbarComponent', () => {
  let component: HanziSearchbarComponent;
  let fixture: ComponentFixture<HanziSearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HanziSearchbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HanziSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
