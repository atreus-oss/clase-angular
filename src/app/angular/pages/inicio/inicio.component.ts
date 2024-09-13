import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ImageService } from '../../../services/image.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    DropdownComponent,
    HttpClientModule
  ],
  templateUrl: './inicio.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {
  images: any[] = [];
  constructor(private imageService: ImageService) {}

  ngOnInit(): void{
    this.imageService.getImages().subscribe(
      (data) => {
        this.images = data;
      },
      (error) => {
        console.error('Error fetching images: ', error);
      });
  }
} 