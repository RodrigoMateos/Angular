import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Curso } from '../models/Curso';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public nombreURL:String;
  public cursos: Curso[];
  public correcto: Curso;
  public contTotal:number = 0;
  public detalle:boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.cursos=[
      new Curso("Master en JS y Angular", ["JS", "Angular", "NodeJS", "MongoDB"], 10, "Victor Robles", 156320),
      new Curso("Java de principiante a Experto", ["JAVA", "Spring", "JSP"], 0, "Pildoras Informaticas", 1000000),
      new Curso("Curso BBDD", ["MySQL", "MongoDB", "SQL Server"], 10.99, "Ataulfo Fernandez", 14000)
    ];
  }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      this.nombreURL=params.nombre;
      console.log(this.nombreURL);
    });
  }

  contieneCurso(curso: String): any{
    let respuesta:boolean=false;
    this.cursos.forEach(element => {
      if(element.nombre===curso){
        this.correcto=element;
        respuesta = true;
      }
    });
    console.log(respuesta);
    return respuesta;
  }

  detalleCurso(curso: String){
    if(this.contieneCurso(curso)){
      console.log(this.correcto);
      return this.correcto;
    }
  }

  verDetalle(){
    if(this.detalle)
      this.detalle=false;
    else
      this.detalle=true;
  }

  redirigir(){
    this._router.navigate(['/home']);
  }

}
