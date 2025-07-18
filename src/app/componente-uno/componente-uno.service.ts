import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ComponenteUnoService {

  private urlBase = 'http://localhost:8080/demo/';
  private urlguardar = 'guardar';
  private urlBorrar = 'borrarTodo';


  constructor(private http: HttpClient) { }

  public guardar() {
    this.http.get(this.urlBase + this.urlguardar);
  }

  public borrar() {
    this.http.get(this.urlBase + this.urlBorrar);
  }

}
