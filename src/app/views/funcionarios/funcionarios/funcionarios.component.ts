import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from './../../../models/funcionario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  constructor(private funcionarioService:FuncionarioService) { }
  displayedColumns: string[] = ['id','foto', 'nome', 'cpf', 'email', 'cargo', 'editar', 'detalhes'];
  dataSource: Funcionario[] = [];

  ngOnInit(): void {
    this.InitializeTable()
  }
public InitializeTable(){
  this.funcionarioService.findAll().subscribe(
    resposta =>{
      this.dataSource = resposta
    }
  )
}
}
