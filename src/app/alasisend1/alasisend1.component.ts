import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs'

@Component({
  selector: 'alasisend1',
  templateUrl: './alasisend1.component.html',
  styleUrls: ['./alasisend1.component.scss']
  
})
export class Alasisend1Component implements OnInit {

  numberValue = 8;
  numberValue2: number;

  korrutameLabi() {
    this.numberValue2 = this.numberValue*2;
  }

  ngOnInit() {
  }

  

}