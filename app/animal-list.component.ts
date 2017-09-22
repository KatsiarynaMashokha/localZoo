import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="container" *ngFor="let animal of childAnimalList">
    <ul>
      <li>Species: {{animal.species}}</li>
      <li>Name: {{animal.name}}</li>
      <li>Age: {{animal.age}}</li>
      <li>Diet: {{animal.diet}} </li>
      <li>Location: {{animal.location}}</li>
      <li>Caretakers: {{animal.caretakers}}</li>
      <li>Sex: {{animal.sex}}</li>
      <li>Likes: {{animal.likes}} </li>
      <li>Dislikes: {{animal.dislikes}}</li>
      <button (click)='editButtonClicked(animal)' type='btn'>Edit</button>
      <br>
    </ul>
  </div>
  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }
}
