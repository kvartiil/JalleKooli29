import { Component, VERSION, OnInit } from '@angular/core';
import {myFunction} from './custom.js';

@Component({
  selector: 'alagraafik1',
  templateUrl: './alagraafik1.component.html',
  styleUrls: [ './alagraafik1.component.scss' ]
})
export class Alagraafik1Component implements OnInit  {
  type:any;
  options: any;
  
  ngOnInit(): void {

    


    };


    test() {
      myFunction();
    }


  }




