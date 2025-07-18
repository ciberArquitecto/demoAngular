import { Component, OnInit } from '@angular/core';
import { ComponenteUnoService } from './componente-uno.service';

@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.css']
})
export class ComponenteUnoComponent implements OnInit {

  constructor(private servicio: ComponenteUnoService) {

  }

  ngOnInit(): void {
  }

  public guardar() {
    this.servicio.guardar();
  }

}
