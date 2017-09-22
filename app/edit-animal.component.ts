import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <label>Edit species:</label>
    <input [(ngModel)]="childSelectedAnimal.species"><br>
    <label>Enter name:</label>
    <input [(ngModel)]="childSelectedAnimal.name"><br>
    <label>Edit age:</label>
    <input [(ngModel)]="childSelectedAnimal.age"><br>
    <label>Edit diet:</label>
    <input [(ngModel)]="childSelectedAnimal.diet"><br>
    <label>Edit location:</label>
    <input [(ngModel)]="childSelectedAnimal.location"><br>
    <label>Edit number of caretakers:</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
    <label>Edit sex:</label>
    <input [(ngModel)]="childSelectedAnimal.sex"><br>
    <label>Edit likes:</label>
    <input [(ngModel)]="childSelectedAnimal.likes"><br>
    <label>Edit dislikes:</label>
    <input [(ngModel)]="childSelectedAnimal.dislikes">
    <button (click)="doneButtonClicked()">Done</button>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickSender.emit();
  }
}
