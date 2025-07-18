import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ComponenteUnoService {

  private urlBase = 'http://localhost:8080/demo/';
  private urlguardar = 'guardar';
  private urlBorrar = 'borrarTodo';


  constructor(private http: HttpClient) { }

  public guardar(): Observable<String> {
    return this.http.get<String>(this.urlBase + this.urlguardar);
  }

  public borrar() {
    return this.http.get(this.urlBase + this.urlBorrar);
  }

}
