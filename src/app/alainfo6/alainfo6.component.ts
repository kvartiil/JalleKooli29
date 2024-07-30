import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'alainfo6-component',
  templateUrl: './alainfo6.component.html',
  styleUrls: ['./alainfo6.component.scss']
})
export class Alainfo6Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Info 1',
      content:
        'Siia tuleb lisada omapoolne individuaalne sisu.',
      html: true,
      css: true,
      js: true
    }
  ];

  PopUp(event: Event, element: HTMLDivElement) {
    // element.classList.remove('popup');
    // element.classList.add('test');
    // console.log(element.classList);
    element.classList.toggle('is-visible');
  }
  
}