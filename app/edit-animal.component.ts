import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
    <label>Enter name:</label>
    <input [(ngModel)]="childSelectedAnimal.name" placeholder={{childSelectedAnimal.name}}><br>
    <label>Edit age:</label>
    <input [(ngModel)]="childSelectedAnimal.age" placeholder={{childSelectedAnimal.age}}><br>
    <label>Edit number of caretakers:</label>
    <input [(ngModel)]="childSelectedAnimal.caretakers" placeholder={{childSelectedAnimal.caretakers}}><br>
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
