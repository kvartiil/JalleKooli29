import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alasisend3',
  templateUrl: './alasisend3.component.html',
  styleUrls: ['./alasisend3.component.scss']
  
})
export class Alasisend3Component implements OnInit {

  options: any;

  value: number = 100;
  uusvaartus: number =100;
  uusvaartus2 = 33;
  sliderValue: 40;

  ngOnInit() { 
  //value: number = 100;
  this.options = {
    floor: 0,
    ceil: 200
  };

    
  }

  sliderEvent() {
    //alert(this.value);
    this.uusvaartus = this.value
  }

  updateSetting(event) {
    this.uusvaartus = event.value;
  }
  

}