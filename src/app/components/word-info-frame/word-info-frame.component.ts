import {Component, Input} from '@angular/core';
import {Word} from "../../interfaces/word.data";

@Component({
  selector: 'app-word-info-frame',
  templateUrl: './word-info-frame.component.html',
  styleUrl: './word-info-frame.component.css'
})
export class WordInfoFrameComponent {

  @Input({ required: true }) public word!: Word;
  @Input({ required: false }) public expanded = true;

  constructor() {
  }

}
