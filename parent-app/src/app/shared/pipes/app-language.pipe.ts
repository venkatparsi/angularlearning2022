import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appLanguage'
})
export class AppLanguagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var label;
    
    value.forEach((currentLabel: any) => {
      if (currentLabel['language'].code == args) {
        label = currentLabel['text'];
      }
    });
    return label;
  }

}
