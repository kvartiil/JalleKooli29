import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'alainfo4-component',
  templateUrl: './alainfo4.component.html',
  styleUrls: ['./alainfo4.component.scss']
})
export class Alainfo4Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Info 1',
      content:
        'Nuppudega toimetulemine on tähtis, nendega saab kasutajat suunata erinevatesse kohtadesse, neid saab kasutada protsesside käiviamiseks, nuppudega analoogne on menüüsüsteem, mis samuti on võrgulehel väga tähtis.',
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