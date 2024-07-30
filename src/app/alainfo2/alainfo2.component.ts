import { Component } from '@angular/core';

//import { products } from '../products';

@Component({
  selector: 'alainfo2-component',
  templateUrl: './alainfo2.component.html',
  styleUrls: ['./alainfo2.component.scss']
})
export class Alainfo2Component {

//  name = 'Angular ' + VERSION.major;

  articles = [
    {
      title: 'Info 1',
      content:
        'Tabeliga saab teha väga palju, antud juhul on näiteks natuke järgitud responsive printsiipi, ehk siis kui muuta browseri laiust, siis tabeli lahtrid natuke muudavad oma pikkust, vajadusel pannakse tekst mitmekordselt lahtrisse (see on parem, kui fikseeritud lahtritega tabel). Parema loetavuse huvides on tehtud ka nii, et kursoriga üle ridade liikudes ridade värvid muutuvad.',
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