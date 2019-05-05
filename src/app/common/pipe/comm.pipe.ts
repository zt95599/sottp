import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textChar' })

export class TextChar implements PipeTransform {
  transform(value): string {
    let text =value.length>25?value.substring(0,22)+'...':value;
    return text;
  }
}
