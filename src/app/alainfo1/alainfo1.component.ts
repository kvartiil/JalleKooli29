import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'alainfo1-component',
  templateUrl: './alainfo1.component.html',
  styleUrls: ['./alainfo1.component.scss']
})
export class Alainfo1Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Info 1',
      content:
        'Töö tekstiga võib tunduda lihtsakoeline ja tüütu, kuid tegelikult on seal palju nüansse, et tekst paikneks õigesti, õiges suuruses ja rõhuasetustega, paikneks vajadusel leheküljel ringi (lehe laiuse või seadme muutusel näiteks) ja suudaks õigel viisil (vajalikud vahed, soovi korral kattumised jms.) haakuda teiste lehel kujutatavate komponentidega.',
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