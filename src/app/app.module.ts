import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../approuting/app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MatToolbarModule} from '@angular/material/toolbar';
import{MatListModule} from '@angular/material/list';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import{FlexLayoutModule} from '@angular/flex-Layout';
import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishDetailsComponent } from './dish-details/dish-details.component';
import{ DishService} from './service/dish.service';
import{PromotionService} from './service/promotion.service';
import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [DishService,PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
