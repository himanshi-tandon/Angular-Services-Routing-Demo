import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{CommonModule} from '@angular/common';
import{routes} from './routing';



@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
