import { Component, EventEmitter, Output } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  @Output() datoEnviado = new EventEmitter<string>();
recibir =""
faBars = faBars
filtros = false
handlefiltros(){
  this.filtros = !this.filtros
}
constructor(private servicio : ComunicacionService,   private router: Router){}
  enviar(n : any) {
     this.router.navigate(["catalogo", n]);  
    this.datoEnviado.emit("Hola desde el hijo");
    this.servicio.enviarDato(n)
  }


}
