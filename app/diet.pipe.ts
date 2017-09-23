import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "dietFilter",
    pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Animal[], dietType: string) {
    var output: Animal[] = [];
    if (dietType === "all") {
      return input;
    }
     input.forEach(item =>{
      if (item.diet === dietType) {
        output.push(item);
      }
      });
      return output;
    }
}
