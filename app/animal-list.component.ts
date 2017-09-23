import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

  <div class="intro">Our Zoo was founded in 2012 by locals. Our volunteers do their best to take care of the animals. Currently we have <strong>{{childAnimalList.length}}</strong> animals and they are: <div class="an" *ngFor="let animalOne of childAnimalList">
  <ul>
    <li>{{animalOne.species}} {{animalOne.name}}</li>
  </ul>
  </div>
  </div>

<div class="row">
  <div class="col-md-2">
    <label>Filter by a max age: </label>
    <input placeholder="Maximum Age" #maxAge>
    <button (click)="sortAnimals(maxAge.value)">Filter</button>
  </div>
  <div class="col-md-1"></div>
  <div class="col-md-2">
    <label> Filter by a diet: </label>
    <select (change)="onChange($event.target.value)">
      <option value="all">All Diets</option>
      <option value="Carnivore">Carnivore</option>
      <option value="Herbivore">Herbivore</option>
      <option value="Omnivore">Omnivore</option>
    </select>
  </div>
</div>
<div class="row">
  <div class="col-md-3 box" *ngFor="let animal of childAnimalList|ageFilter:filterAgeSender |dietFilter:filterByDiet">
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
  filterByDiet: string = "all";
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  sortAnimals(maxAge: number) {
    this.filterAgeSender = maxAge;
  }

  onChange(optionFromMenu) {
    console.log('chosen diet type is' + optionFromMenu);
    this.filterByDiet = optionFromMenu;
  }
}
