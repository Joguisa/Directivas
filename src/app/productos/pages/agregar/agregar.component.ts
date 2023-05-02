import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  texto1: string = 'Jonatán Guillén';
  color: string = 'blue';

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }

  cambiarColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }

  ngOnInit(): void {}
}
