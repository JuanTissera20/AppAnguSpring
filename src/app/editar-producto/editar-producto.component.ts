import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './editar-producto.component.html',
})
export class EditarProductoComponent implements OnInit {
  producto: Producto = new Producto();
  id: number;
  data: FormGroup;

  constructor(
    private productoServicio: ProductoService,
    private ruta: ActivatedRoute,
    private enrutador: Router, 
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.id = this.ruta.snapshot.params['id'];
    this.productoServicio.obtenerProductoPorId(this.id).subscribe(producto => {
      this.producto = producto;
      console.log(this.producto);
    });
  }


async  onSubmit() {
    if (this.data.valid) {
      console.log('Producto actualizado:', this.data.value);
      // Aquí puedes agregar la lógica para actualizar el producto
    }
  }
}