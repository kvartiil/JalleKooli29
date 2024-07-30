import { Component } from '@angular/core';

@Component({
  selector: 'akordion',
  templateUrl: './akordion.component.html',
  styleUrls: ['./akordion.component.scss']
})
export class AkordionComponent {
  currentIndex;

  sections = [
    {
      name: 'Kust ma leian informaatika?',
      content:
        'Selleks tuleb kursusel osaleda, tänapäeval on see eriti mugav, saab arvuti kaudu koduaiast või tagatoast.',
      }, 
    {
      name: 'Miks informaatika hea on?',
      content:
        'Õpid arvutist aru saama. Arvuti ei pea enam mõistatama, mida sa küll teha tahtsid ja saab sinust esimese korraga aru.',
    },
    {
      name: 'Miks programmeerimine hea on?',
      content:
        'Selle abil on võimalik arvutile natuke rohkem hinge minna ja paluda tal teha midagi, mida tavaliselt ei õnnestu arvutil teha lasta.'         
    },
    {
      name: 'Mida hiljem selle Angulari tarkusega peale hakata?',
      content:
        'Avalikus sekoris oodatakse täna avasüli inimesi, kes suudaksid programmeerida front-endi Angulari kasutades.'
    }
    
  ];

  
  expand(index) {
    if(this.currentIndex === index) {
     this.currentIndex = null;
      return;
    }
    this.currentIndex = index;
    
  }

}