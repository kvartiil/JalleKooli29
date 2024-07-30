import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'alainfo5-component',
  templateUrl: './alainfo5.component.html',
  styleUrls: ['./alainfo5.component.scss']
})
export class Alainfo5Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Info 1',
      content:
        'Graafikud aitavad kasutajale edastada informatsiooni, seda visualiseerida, tõlgendada - selleks on need olulised. Graafikud võivad olla dünaamilised ja muutuvad tulenevalt kasutaja andmesisendist või staatilised. Nii või teisiti on need oluline komponent, et kommunikeerida kasutajale infot.',
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