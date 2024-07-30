import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'alainfo7-component',
  templateUrl: './alainfo7.component.html',
  styleUrls: ['./alainfo7.component.scss']
})
export class Alainfo7Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Info 1',
      content:
        'On oluline, et süsteem võtaks infosisendit, kui süsteem on mõeldud kasutajaga suhtlemiseks. Infosisend võib tulla mitmel erineval viisil. Mida kasutada, see sõltub info olemusest, aga ka sellest, kui mugavad on kasutajad ja kas tänapäeva mugavuse ajastul kasutaja on üldse valmis ennast piisavalt liigutama, et infot anda.',
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