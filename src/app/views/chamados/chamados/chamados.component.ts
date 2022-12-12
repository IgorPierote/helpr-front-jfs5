import { ChamadoService } from './../../../services/chamado.service';
import { Chamado } from './../../../models/chamado';
import { Component, HostBinding, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from 'src/app/services/notification.service';
import { AppComponent } from 'src/app/app.component';

const ELEMENT_DATA: Chamado[] = [];

@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.css'],
})
export class ChamadosComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'titulo',
    'cliente',
    'funcionario',
    'dataAbertura',
    'status',
    'editar',
    'detalhes',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private chamadoService: ChamadoService) {}

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.chamadoService.findAll().subscribe((chamados) => {
      this.dataSource = new MatTableDataSource(chamados);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @HostBinding('class')
  get themeMode() {
    return AppComponent.isDark? 'theme-dark' : 'theme-light'
  }

  switchMode(isDarkMode: boolean) {
    AppComponent.isDark = isDarkMode;
  }
}
