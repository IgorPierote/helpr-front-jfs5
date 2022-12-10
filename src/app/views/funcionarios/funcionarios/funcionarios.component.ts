import { MatTableDataSource } from '@angular/material/table';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { Funcionario } from './../../../models/funcionario';
import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: Funcionario[] = [];

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent implements OnInit {
  displayedColumns: string[] = [
    'foto',
    'id',
    'nome',
    'cpf',
    'email',
    'cargo',
    'editar',
    'detalhes',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit(): void {
    this.InitializeTable();
  }

  public InitializeTable() {
    this.funcionarioService.findAll().subscribe((funcionario) => {
      this.dataSource = new MatTableDataSource(funcionario);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
