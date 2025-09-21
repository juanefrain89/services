import { Component, Input, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-catalogo-servicios',
  standalone: false,
  templateUrl: './catalogo-servicios.component.html',
  styleUrl: './catalogo-servicios.component.css'
})
export class CatalogoServiciosComponent  implements OnInit {
constructor(private ser : ComunicacionService,   private route: ActivatedRoute, private router: Router){}
mensaje =""
faBars = faBars
filtrocategoria = 4
filtros = false
paginacionopciones : any[]=[]



filtrar(){
  console.log("entro", this.filtrocategoria);
  
  if (this.filtrocategoria == 4) {
    this.paginacionopciones = this.opciones
    
  }else if (this.filtrocategoria == 3){
    this.paginacionopciones = this.opciones.filter(e => e.categoria == "c")
  }
  else if (this.filtrocategoria == 2){
    this.paginacionopciones = this.opciones.filter(e => e.categoria == "b")
  }
   else if (this.filtrocategoria == 1){
    this.paginacionopciones = this.opciones.filter(e => e.categoria == "a")
  }
}



cambiarruta(){
     this.router.navigate(["descripcion"]);  
}
handlefiltros(){
  this.filtros = !this.filtros
}
productos: any[] = [
  {
    imagen: "logistica2.webp",  
    precio: "$15,299.00",
    precioAnterior: "$29,998.00",
    ahorro: "$14,699.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "a",
    descripcion: "Gestión integral de almacenes y control de inventarios.",
    tipo: "logistica"
  },
  {
    imagen: "Larmex1.webp",
    precio: "$8,499.00",
    precioAnterior: "$15,000.00",
    ahorro: "$6,501.00",
    meses: "Hasta 6 meses sin intereses",
    categoria: "b",
    descripcion: "Transporte de carga ligera",
    tipo: "transportacion"
  },
  {
    imagen: "man1.webp",
    precio: "$4,200.00",
    precioAnterior: "$7,500.00",
    ahorro: "$3,300.00",
    meses: "Hasta 3 meses sin intereses",
    categoria: "c",
    descripcion: "Pintura de interiores y exteriores para casas y oficinas.",
    tipo: "mantenimiento"
  },
  {
    imagen: "reparacion1.webp",
    precio: "$2,750.00",
    precioAnterior: "$5,000.00",
    ahorro: "$2,250.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "a",
    descripcion: "Reparación rápida de teléfonos móviles",
    tipo: "reparacion de telefonos"
  },
  {
    imagen: "logistica7.webp",
    precio: "$18,000.00",
    precioAnterior: "$25,000.00",
    ahorro: "$7,000.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "b",
    descripcion: "Logística especializada para e-commerce y envíos a clientes",
    tipo: "logistica"
  },
  {
    imagen: "mundanzas.webp",
    precio: "$12,500.00",
    precioAnterior: "$20,000.00",
    ahorro: "$7,500.00",
    meses: "Hasta 6 meses sin intereses",
    categoria: "c",
    descripcion: "Transporte de mudanzas locales",
    tipo: "transportacion"
  },
  {
    imagen: "man3.webp",
    precio: "$5,800.00",
    precioAnterior: "$10,000.00",
    ahorro: "$4,200.00",
    meses: "Hasta 3 meses sin intereses",
    categoria: "a",
    descripcion: "Reparación y ajuste de instalaciones eléctricas residenciales.",
    tipo: "mantenimiento"
  },
  {
    imagen: "pantalla.webp",
    precio: "$3,300.00",
    precioAnterior: "$6,500.00",
    ahorro: "$3,200.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "b",
    descripcion: "Cambio de pantalla y carcasas para teléfonos",
    tipo: "reparacion de telefonos"
  },
  {
    imagen: "logistica4.webp",
    precio: "$14,000.00",
    precioAnterior: "$28,000.00",
    ahorro: "$14,000.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "c",
    descripcion: "Distribución nacional e internacional de mercancías",
    tipo: "logistica"
  },
  {
    imagen: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
    precio: "$9,900.00",
    precioAnterior: "$18,000.00",
    ahorro: "$8,100.00",
    meses: "Hasta 6 meses sin intereses",
    categoria: "a",
    descripcion: "Transporte express urbano",
    tipo: "transportacion"
  },
  {
    imagen: "mantenimiento-jardin.webp",
    precio: "$2,500.00",
    precioAnterior: "$4,500.00",
    ahorro: "$2,000.00",
    meses: "Hasta 3 meses sin intereses",
    categoria: "b",
    descripcion: "Mantenimiento de jardines pequeños",
    tipo: "mantenimiento"
  },
  {
    imagen: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    precio: "$3,700.00",
    precioAnterior: "$7,200.00",
    ahorro: "$3,500.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "c",
    descripcion: "Reparación de cargador y conectores de teléfonos",
    tipo: "reparacion de telefonos"
  },
  {
    imagen: "logistica5.webp",
    precio: "$17,000.00",
    precioAnterior: "$30,000.00",
    ahorro: "$13,000.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "a",
    descripcion: "Planeación y optimización de la cadena de suministro.",
    tipo: "logistica"
  },
  {
    imagen: "camioneta.webp",
    precio: "$11,200.00",
    precioAnterior: "$20,000.00",
    ahorro: "$8,800.00",
    meses: "Hasta 6 meses sin intereses",
    categoria: "b",
    descripcion: "Camioneta de carga pesada disponible",
    tipo: "transportacion"
  },
  {
    imagen: "man4.webp",
    precio: "$4,950.00",
    precioAnterior: "$9,500.00",
    ahorro: "$4,550.00",
    meses: "Hasta 3 meses sin intereses",
    categoria: "c",
    descripcion: "Limpieza profunda y desinfección de espacios.",
    tipo: "mantenimiento"
  },
  {
    imagen: "https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg",
    precio: "$6,250.00",
    precioAnterior: "$12,000.00",
    ahorro: "$5,750.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "a",
    descripcion: "Reparación de hardware de teléfonos",
    tipo: "reparacion de telefonos"
  },
  {
    imagen: "logistica6.webp",
    precio: "$13,400.00",
    precioAnterior: "$25,800.00",
    ahorro: "$12,400.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "b",
    descripcion: "Logística personalizada para pequeñas y medianas empresas",
    tipo: "logistica"
  },
 
  {
    imagen: "man5.webp",
    precio: "$3,900.00",
    precioAnterior: "$7,500.00",
    ahorro: "$3,600.00",
    meses: "Hasta 3 meses sin intereses",
    categoria: "a",
    descripcion: "Mantenimiento a maquinas",
    tipo: "mantenimiento"
  },
  {
    imagen: "rep.webp",
    precio: "$4,800.00",
    precioAnterior: "$9,200.00",
    ahorro: "$4,400.00",
    meses: "Hasta 12 meses sin intereses",
    categoria: "b",
    descripcion: "Reparación de software y datos móviles",
    tipo: "reparacion de telefonos"
  },
  {
  imagen: "https://images.pexels.com/photos/4427611/pexels-photo-4427611.jpeg",
  precio: "$9,500.00",
  precioAnterior: "$15,000.00",
  ahorro: "$5,500.00",
  meses: "Hasta 6 meses sin intereses",
  categoria: "a",
  descripcion: "Asesoría legal en contratos civiles",
  tipo: "servicios-legales"
},
{
  imagen: "https://images.pexels.com/photos/4427554/pexels-photo-4427554.jpeg",
  precio: "$18,200.00",
  precioAnterior: "$30,000.00",
  ahorro: "$11,800.00",
  meses: "Hasta 12 meses sin intereses",
  categoria: "b",
  descripcion: "Defensa en juicios laborales",
  tipo: "servicios-legales"
},
{
  imagen: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
  precio: "$7,800.00",
  precioAnterior: "$14,000.00",
  ahorro: "$6,200.00",
  meses: "Hasta 3 meses sin intereses",
  categoria: "c",
  descripcion: "Consultoría en derecho familiar",
  tipo: "servicios-legales"
},
{
  imagen: "https://images.pexels.com/photos/4427615/pexels-photo-4427615.jpeg",
  precio: "$22,500.00",
  precioAnterior: "$40,000.00",
  ahorro: "$17,500.00",
  meses: "Hasta 12 meses sin intereses",
  categoria: "b",
  descripcion: "Representación legal en derecho mercantil",
  tipo: "servicios-legales"
},
{
  imagen: "https://images.pexels.com/photos/5668477/pexels-photo-5668477.jpeg",
  precio: "$12,000.00",
  precioAnterior: "$20,500.00",
  ahorro: "$8,500.00",
  meses: "Hasta 9 meses sin intereses",
  categoria: "a",
  descripcion: "Tramitación de amparos y recursos legales",
  tipo: "servicios-legales"
}

];
opciones : any[]=[]
  ngOnInit(): void {
      this.ser.datoActual.subscribe(dato =>{
 if (!dato || dato.trim() === "") {
        const idUrl = this.route.snapshot.paramMap.get('categoria');
        this.mensaje = idUrl ? idUrl : "";
      } else {
        this.mensaje = dato;
      }
console.log(this.mensaje);

if (this.mensaje == "jardineria") {
  this.opciones = this.productos.filter(e => e.tipo == "jardineria" || e.tipo == "mantenimiento")
  
}else if ( this.mensaje == "plomeria"){
  this.opciones =this.productos.filter(e => e.tipo == "plomeria" || e.tipo == "logistica" )
}else if (this.mensaje == "transportacion"){
    this.opciones =this.productos.filter(e => e.tipo == "transportacion" )
}
else if (this.mensaje == "servicios-legales") {
    this.opciones =this.productos.filter(e => e.tipo == "servicios-legales" )
}
this.paginacionopciones = this.opciones
      })
  }

@Input() dato! : string

}
