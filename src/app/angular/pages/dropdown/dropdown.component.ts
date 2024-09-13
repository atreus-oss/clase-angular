import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dropdown.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DropdownComponent {

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.applyStoredTheme();
  }

  changeTheme(theme: string) {
    this.renderer.setAttribute(document.body, 'data-bs-theme', theme);

    // Guarda el tema seleccionado en localStorage
    localStorage.setItem('selectedTheme', theme);
  }

  applyStoredTheme() {
    // Revisa si hay un tema almacenado en localStorage
    const storedTheme = localStorage.getItem('selectedTheme');
    
    // Si hay un tema almacenado, aplícalo
    if (storedTheme) {
      this.renderer.setAttribute(document.body, 'data-bs-theme', storedTheme);
    }
  }
}