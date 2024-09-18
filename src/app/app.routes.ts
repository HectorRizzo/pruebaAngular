import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },  // Cambia esto a tu componente principal
    {
      path: 'about',
      loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    { path: '**', redirectTo: '/home' }  // Ruta comodín para redirigir a la página principal
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
  })
  export class AppRoutingModule { }