import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="addNewAnimal">
    <div>
      <label> Species: </label>
      <input #newSpecies placeholder="Enter Species">
    </div>
    <div>
      <label> Name: </label>
      <input #newName placeholder="Enter name">
    </div>
    <div>
      <label> Age: </label>
      <input type="number" #newAge placeholder="Enter age">
    </div>
    <div>
      <label> Diet: </label>
      <select #newDiet>
        <option value="Carnivore">Carnivore</option>
        <option value="Herbivore">Herbivore</option>
        <option value="Omnivore">Omnivore</option>
      </select>
    </div>
    <div>
      <label> Location: </label>
      <input #newLocation placeholder="Enter location">
    </div>
    <div>
      <label> Caretakers: </label>
      <input type="number" #newCaretakers placeholder="Enter number of caretakers">
    </div>
    <div>
      <label> Sex: </label>
      <select #newSex>
        <option value="female">Female</option>
        <option value="male">Male</option>
      </select>
    </div>
    <div>
      <label> Likes: </label>
      <input #newLikes placeholder="Enter what animal likes">
    </div>
    <div>
      <label> Dislikes: </label>
      <input #newDislikes placeholder="Enter what animal dislikes">
    </div>
    <button class="addAnimal" (click)="addAnimal(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value);
    newSpecies.value=''; newName.value=''; newAge.value=''; newLocation.value=''; newCaretakers.value=''; newLikes.value=''; newDislikes.value='';">
    <span class="glyphicon glyphicon-plus"></span> Animal</button>
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
