import { Component } from '@angular/core';

@Component({
  selector: 'app-topic-banner',
  templateUrl: './topic-banner.component.html',
  styleUrl: './topic-banner.component.css'
})
export class TopicBannerComponent {


  public topics = ['FRUITS', 'DRINKS', 'PERSONAL_PRONOUNS', 'QUESTION_WORDS', 'WEATHER', 'FAMILY', 'NATURE'];

}
