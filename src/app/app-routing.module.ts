import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CatalogoServiciosComponent } from './catalogo-servicios/catalogo-servicios.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

const routes: Routes = [
  {
    component : InicioComponent,
    path :""
  },
  {
    component : CatalogoServiciosComponent,
      path: "catalogo/:categoria",
  },
  {
    component : DescripcionComponent,
    path :"descripcion"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
