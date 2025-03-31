import { Component } from '@angular/core';
import {CharacterService} from "../services/character.service";

@Component({
  selector: 'app-image-generation',
  templateUrl: './image-generation.component.html'
})
export class ImageGenerationComponent {

  data: { hanzi: string, composition: string[] }[] = [];
  currentIndex = -1;

  constructor(private characterService: CharacterService) {
    this.populateData();
  }

  public displayNextImage() {
    if (this.currentIndex < this.data.length-1) {
      this.currentIndex++;
      let current = this.data[this.currentIndex];
      this.textToImage(current.hanzi, current.composition.toString().replaceAll(',',''));
    }
  }

  private populateData() {
    this.characterService.getCharactersAreLoadedObservable().subscribe(() => {
      this.data = this.characterService.getWordsWithComposition(2).map(w => { return {hanzi: w.hanzi, composition: w.composition}});
      this.displayNextImage();
    });
  }

  private textToImage(character: string, label: string) {
    this.reset();
    let canvas = document.createElement('canvas');
    canvas.width = 40;
    canvas.height = 40;
    let context = canvas.getContext('2d')!;
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, 40, 40);
    context.fillStyle = '#000000';
    context.textAlign = "center";
    context.font = `30px Verdana`;
    context.fillText(character, 20, 30, 30);

    let imageData = canvas.toDataURL('image/png');
    console.log(imageData);
    let text = `${label}-${character}`;
    const img = new Image();
    img.src = imageData;
    img.height = 40;
    img.width = 40;
    img.title = text;
    img.id="training-data-img";

    let par = document.createElement("p");
    let textEl = document.createTextNode(text);
    par.appendChild(textEl);
    par.textContent = text;
    par.id = "path-desc";

    document.body.appendChild(img);
    document.body.appendChild(par);
  }

  private reset() {
    let img = document.getElementById("training-data-img");
    if (img) {
      document.body.removeChild(img);
    }

    let par = document.getElementById("path-desc")
    if (par) {
      document.body.removeChild(par);
    }
  }


}
