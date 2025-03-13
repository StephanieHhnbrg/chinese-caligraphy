import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Radical} from "../../interfaces/radical.data";

@Component({
  selector: 'app-radical-info-modal',
  templateUrl: './radical-info-modal.component.html',
  styleUrl: './radical-info-modal.component.css'
})
export class RadicalInfoModalComponent implements OnInit {

  public radical: Radical | undefined;
  constructor(public dialogRef: MatDialogRef<RadicalInfoModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { radical: Radical}) {
  }

  ngOnInit() {
    this.radical = this.data.radical;
  }

}
