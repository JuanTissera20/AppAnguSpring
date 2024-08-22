import { Component } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-producto-lista',
  standalone: true,
  imports: [NgFor],
  templateUrl: './producto-lista.component.html',

})
export class ProductoListaComponent {
    productos: Producto[];
NgFor: any;
  
    constructor(private productServicio: ProductoService){}

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
  }
