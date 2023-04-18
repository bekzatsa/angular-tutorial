import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(value: any[], term: string, key: string = 'title'): any[] {
    if (!term) return value;
    return value.filter((s: any) => s[key].toLowerCase().includes(term.toLowerCase()));
  }

}
