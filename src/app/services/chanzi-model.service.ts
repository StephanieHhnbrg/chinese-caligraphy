import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChanziModelService {

  private modelIsLoaded$ = new Subject<boolean>;
  private model: tf.LayersModel | undefined;

  constructor() {
    this.loadModel();
  }

  private async loadModel() {
    try {
      this.model = await tf.loadLayersModel('assets/model/model.json', {strict: false});
      this.modelIsLoaded$.next(true);
    } catch (error) {
      this.modelIsLoaded$.next(false);
      console.error('Error loading the model:', error);
    }
  }

  public getModelIsLoadedObservable(): Observable<boolean> {
    return this.modelIsLoaded$.asObservable();
  }

  public checkIfModelIsLoaded() {
    if (this.model) {
      this.modelIsLoaded$.next(true);
    }
  }

  public async predictRootRadicals(character: string): Promise<Float32Array> {
    if (!this.model) {
      console.error('Model is not loaded yet');
      return Float32Array.from([]);
    }

    let img = this.textToImage(character);
    let inputTensor = tf.browser.fromPixels(img).resizeNearestNeighbor([100, 100]).toFloat().mean(2).expandDims(-1).expandDims(0);
    let prediction = await this.model.predict(inputTensor) as tf.Tensor;
    let data: Float32Array = (<Float32Array>prediction.dataSync());
    return data;
  }

  private textToImage(text: string): HTMLImageElement {
    let canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    let context = canvas.getContext('2d')!;
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, 100, 100);
    context.fillStyle = '#000000';
    context.textAlign = "center";
    context.font = `30px Verdana`;
    context.fillText(text, 50, 50, 80);

    let imageData = canvas.toDataURL('image/png');
    let img = new Image();
    img.width = 100;
    img.height = 100;
    img.src = imageData;

    return img;
  }
}
