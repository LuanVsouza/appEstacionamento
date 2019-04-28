import { Estacionamento } from './../../model/estacionamento';
import { Routes, Router } from '@angular/router';
import { EstacionamentoService } from './../../services/estacionamento.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  public searchTerm: string = '';

  itens: Array<any>;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(public EstacionamentoService: EstacionamentoService, private router: Router) { }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this.itens = this.EstacionamentoService.getItens();
  }

  setFilteredItems() {
    this.itens = this.EstacionamentoService.filterItems(this.searchTerm);
  }

}
