import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'alainfo3-component',
  templateUrl: './alainfo3.component.html',
  styleUrls: ['./alainfo3.component.scss']
})
export class Alainfo3Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Info 1',
      content:
        'Akordion on väga populaarne lahendus, suhteliselt moodne, tänapäevasel mugavuse mobiiliäppide ajastul. Klikkad sobivale alajaotusele ja saadki omale vajaliku sisendi, ei kuluta liigselt ekraaniruumi kogu info kuvamiseks.',
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