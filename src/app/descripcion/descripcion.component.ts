import { Component } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  standalone: false,
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})



export class DescripcionComponent {
tabactivo : any = 1
handle(n : any){
  this.tabactivo = n
  console.log(this.tabactivo);
  
}

}
