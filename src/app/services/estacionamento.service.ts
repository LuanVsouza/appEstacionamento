import { Estacionamento } from './../model/estacionamento';
import { Injectable } from '@angular/core';
import { ESTACIONAMENTO } from '../model/mockEstacionamento';
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EstacionamentoService {

  Estacionamento = ESTACIONAMENTO;
  item: Estacionamento;

  constructor() { }

  getItens(): Estacionamento[] {
    return this.Estacionamento;
  }

  updateItem(dados: Estacionamento) {
    dados.id = this.Estacionamento.length + 1;
    this.Estacionamento.push(dados);
  }

  buscaItem(searchTerm) {
    return this.Estacionamento.filter(item => {
      return item.id.toExponential().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  filterItems(searchTerm) {
    return this.Estacionamento.filter(item => {
      return item.ticket.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  AtualizaLista() {

    const indice = this.Estacionamento.indexOf(this.item);
    this.Estacionamento.splice( indice , 1 );

  }

}
