import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {Slider} from './slider';
import {CdkDrag} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop position locking
 */
@Component({
  selector: 'alasisend2',
  templateUrl: 'alasisend2.component.html',
  styleUrls: ['alasisend2.component.scss'],
  //imports: [CdkDrag]
})
export class Alasisend2Component implements AfterViewInit {
  position: number = 0;
  value = 0;

  slider: Slider;
  @ViewChild('cursor', {static: false}) cursor;

  ngAfterViewInit() {
    this.slider = new Slider(this.cursor.nativeElement, 0, 10000);
  }

  clickInBoundry(e) {
    if(!this.slider) {
      this.ngAfterViewInit();
    }
    
    // Need to change the cursor its location
  }

  dragEnd(e) {
    if(!this.slider) {
      this.ngAfterViewInit();
    }

    this.value = this.slider.onMouseDrag(e);
    // let el = e.source._viewContainerRef.element.nativeElement;

    // this.position = (this.getTransform(el).x / (el.parentElement.offsetWidth - el.offsetWidth)) * 100 ;

    // console.log(`Position ${this.position}%`); 
  }

  getTransform(el) {
    let results = this.regexAll(/translate3d\((-?[0-9]+)[a-z]+,\s*(-?[0-9]+)[a-z]+,\s*(-?[0-9]+)[a-z]+\)/g, el.style.transform);

    if(!results || !results.length) {
      return {x: 0, y: 0, z: 0};
    }

    results = results[0];
    return {
      x: parseInt(results[1]),
      y: parseInt(results[2]),
      z: parseInt(results[3]),
    };

}
regexAll(regex, str) {
    let m;
    var results = [];

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        results.push(m);
    }
    
    return results;
}

uusvaartus: any = 20;
sliderEvent() {
  //alert(this.value);
  this.uusvaartus = this.slider
}

}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */