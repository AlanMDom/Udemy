import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
})
export class CursoComponent  implements OnInit {
  @Input() imagen: string | undefined;
  @Input() curso: string | undefined;
  @Input() subtitulo: string | undefined;
  @Input() descripcion: string | undefined;

  /*@Input() cursos = [{
    imagen: "",
    titulo: "",
    subtitulo: "",
    descripcion: ""
  }];*/

  cursos = [
    { componente:'curso-a', titulo: 'Curso Python1', imagen: 'assets/python.jpg', subtitulo: 'Tarjeta 1', descripcion: ''},
    { componente:'curso-b' , titulo: 'Curso Python2', imagen: 'assets/python1.jpg', subtitulo: 'Tarjeta 2', descripcion: ''}
  ];

  constructor() {}

  ngOnInit() {}
}
