import { Component, OnInit } from '@angular/core';
import { ComponenteUnoService } from './componente-uno.service';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  public id: String = '';

  constructor(private servicio: ComponenteUnoService) {

  }

  ngOnInit(): void {

  }

  public guardar() {
    this.servicio.guardar().subscribe((res) => {
        this.id = res.toString();
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }


  public guardarV2() {
    this.servicio.guardar().subscribe({
    next: (response) => {
      this.id = response;
    },
    error: (error) => {
      console.error('Error al obtener datos', error);
    },
    complete: () => {
      console.log('Petición completada');
    }
    });
  }

}
