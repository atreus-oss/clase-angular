import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './angular/pages/header/header.component';
import { FooterComponent } from './angular/pages/footer/footer.component';
import { InicioComponent } from './angular/pages/inicio/inicio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InicioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit() { //Proceso para "suscribirte" a los eventos de navegacion del router
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.route;
        while (route.firstChild) route = route.firstChild;
        return route.snapshot.data['title'];
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(title || 'Clase - Angular');
    });
  }
}
