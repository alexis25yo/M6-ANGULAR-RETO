import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';




@NgModule({
  declarations: [
    HeaderComponent,
    AlertComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
