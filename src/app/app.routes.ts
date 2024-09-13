import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio',
        loadComponent: () => import('./angular/pages/inicio/inicio.component').then(m => m.InicioComponent),
        data: { title: 'Gallery - Inicio' },
        /*children:[
            {
                path:'',
                loadComponent: () => import('').then(m => m.GalleryComponent),
                data: {title: 'Titulo 2'}
            }
        ]*/
    },
    {
        path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    }
];