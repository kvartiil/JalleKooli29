import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'alainfo-component',
  templateUrl: './alainfo.component.html',
  styleUrls: ['./alainfo.component.scss']
})
export class AlainfoComponent {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Info 1',
      content:
        'Angular on üha populaarsemaks muutuv raamistik front-end (kliendipoolse, kasutajaliidese) lahenduse programmeerimiseks, üha rohkem kasutatakse. Seega selle õppimine on igati mõistlik investeering, nagu ka informaatika sissejuhatuse kursus üldiselt.',
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