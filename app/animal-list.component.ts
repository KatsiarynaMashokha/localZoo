import { Component, Input, Output } from '@angular/core';
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
      <br>
    </ul>
  </div>






  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
