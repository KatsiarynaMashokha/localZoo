import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

      <label>Enter a max age: </label>
      <input #maxAge>
      <button (click)="sortAnimals(maxAge.value)">Sort</button>
      <div class="row">

          <div class="col-md-3 box" *ngFor="let animal of childAnimalList|ageFilter:filterAgeSender">
            <li><span class="title">Species: </span>{{animal.species}}</li>
            <li><span class="title">Name: </span>{{animal.name}}</li>
            <li><span class="title">Age: </span>{{animal.age}}</li>
            <li><span class="title">Diet: </span>{{animal.diet}}</li>
            <li><span class="title">Location: </span>{{animal.location}}</li>
            <li><span class="title">Caretakers: </span>{{animal.caretakers}}</li>
            <li><span class="title">Sex: </span>{{animal.sex}}</li>
            <li><span class="title">Likes: </span>{{animal.likes}}</li>
            <li><span class="title">Dislikes: </span>{{animal.dislikes}}</li>
            <button class="btn btn-default btn-sm edit" (click)='editButtonClicked(animal)'>
            <span class="glyphicon glyphicon-pencil"></span>Edit</button>

        </div>
       </div>
  `
})

export class AnimalListComponent {
  filterAgeSender: number = -1;
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  sortAnimals(maxAge: number) {
    this.filterAgeSender = maxAge;
  }
}
