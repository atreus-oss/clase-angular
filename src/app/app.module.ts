import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './angular/pages/footer/footer.component';
import { HeaderComponent } from './angular/pages/header/header.component';
import { DropdownComponent } from './angular/pages/dropdown/dropdown.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    DropdownComponent,
    HttpClientModule
  ],
})
export class AppModule { }
