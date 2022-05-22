import { Component } from '@angular/core';
import { lista } from './arquivo';

//Cria interface da lista de alunos tipando cada atributo
export interface IAluno {
  nome: string;
  ru: string;
  nomeDoCurso: string;
  dataNascimento: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'projeto_uninter';
  //Cria a lista para ser usada no ngfor
  alunos: IAluno[] = lista;
}
