import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightText'
})
export class HighlightTextPipe implements PipeTransform {

  transform(text: string, highlightText: string): any {
    if (!text || !highlightText) {
      return text;
    }

    return text.replace(new RegExp(highlightText, 'gi'), (value) => {
      return `<span class="highlight">${value}</span>`;
    });
  }
}
