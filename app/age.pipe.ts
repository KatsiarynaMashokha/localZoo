import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "ageFilter",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], maxAge: number) {
    let output: Animal[] = [];
    if(maxAge > 0) {
    input.forEach(item => {
      if (item.age <= maxAge) {
        output.push(item);
      }
    });
    return output;
  } else {
    return input;
  }
}
}
