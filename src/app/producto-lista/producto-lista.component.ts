import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './producto-lista.component.html',

})
export class ProductoListaComponent {
    productos: Producto[];
NgFor: any;
  
    constructor(private productServicio: ProductoService, 
      private enrutador: Router){}

    ngOnInit(){
      //cargamos los productos
      this.obtenerProductos();
    }

    private obtenerProductos(){
      // Consumir los datos del observable (suscribirnos)
      this.productServicio.obtenerProductosLista().subscribe(
        (datos => {
          this.productos = datos; 
        })
      )
    }

    editarProducto(id: number){
      this.enrutador.navigate(['editar-producto',id]); 
    }

    eliminarProducto(id: number){
      this.productServicio.eliminarProducto(id).subscribe(
        {
          next: (datos) => this.obtenerProductos(),
          error: (errores) => console.log(errores)
        }
      );
    }
  }
