import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from './../../../services/cliente.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: Cliente[] = [];

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nome',
    'cpf',
    'email',
    'telefone',
    'editar',
    'excluir',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(
    private clienteService: ClienteService,
    private notifyService: NotificationService
  ) {}

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.clienteService.findAll().subscribe((clientes) => {
      this.dataSource = new MatTableDataSource(clientes);
    });
  }

  public delete(id: number): void {
    let ok = confirm('Tem certeza que deseja excluir?');
    if (ok) {
      this.clienteService.delete(id).subscribe(() => {
        this.notifyService.showSuccess('Cliente excluido.', 'Sucesso :)');
        this.initializeTable();
      });
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
