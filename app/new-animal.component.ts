import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="addNewAnimal">
    <h4>New Animal</h4>
    <div>
      <label> Species: </label>
      <input #newSpecies>
    </div>
    <div>
      <label> Name: </label>
      <input #newName>
    </div>
    <div>
      <label> Age: </label>
      <input #newAge>
    </div>
    <div>
      <label> Diet: </label>
      <select #newDiet>
        <option [value]="herbivore">Herbivore</option>
        <option [value]="carnivore">Carnivore</option>
        <option [value]="omnivore">Omnivore</option>
      </select>
    </div>
    <div>
      <label> Location: </label>
      <input #newLocation>
    </div>
    <div>
      <label> Caretakers: </label>
      <input #newCaretakers>
    </div>
    <div>
      <label> Sex: </label>
      <select #newSex>
        <option [value]="female"> Female </option>
        <option [value]="male"> Male </option>
      </select>
    </div>
    <div>
      <label> Likes: </label>
      <input #newLikes>
    </div>
    <div>
      <label> Dislikes: </label>
      <input #newDislikes>
    </div>
    <button class="addAnimal" (click)="addAnimal(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);
    newSpecies.value=''; newName.value=''; newAge.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';">Add animal</button>
    </div>
  `
})


export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  addAnimal(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string){
    let newAnimal: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    console.log('sex is ' + sex + ', the diet is ' + diet);
    this.newAnimalSender.emit(newAnimal);
  }
}
