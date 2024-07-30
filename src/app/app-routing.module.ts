import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Alaleht1Component}  from './alaleht1/alaleht1.component';
import { Alaleht2Component} from './alaleht2/alaleht2.component';
import { Alaleht3Component } from './alaleht3/alaleht3.component';
import { Alaleht4Component } from './alaleht4/alaleht4.component';
import { Alaleht5Component } from './alaleht5/alaleht5.component';
import { Alaleht6Component } from './alaleht6/alaleht6.component';
import { Alaleht7Component } from './alaleht7/alaleht7.component';
import { Alaleht8Component } from './alaleht8/alaleht8.component';


const routes: Routes = [ 
   
    { path: 'alaleht1', component: Alaleht1Component },
    { path: 'alaleht2', component: Alaleht2Component },
    { path: 'alaleht3', component: Alaleht3Component },
    { path: 'alaleht4', component: Alaleht4Component },
    { path: 'alaleht5', component: Alaleht5Component },
    { path: 'alaleht6', component: Alaleht6Component },
    { path: 'alaleht7', component: Alaleht7Component },
    { path: 'alaleht8', component: Alaleht8Component }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }