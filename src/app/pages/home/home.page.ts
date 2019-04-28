import { Estacionamento } from './../../model/estacionamento';
import { Component, OnInit } from '@angular/core';
import { EstacionamentoService } from 'src/app/services/estacionamento.service';
import { AlertController } from '@ionic/angular';
import { stringify } from 'querystring';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  dados: Estacionamento;

  ticket: number;
  placa: string;

  message: string;

  entrada: string;
  saida: string;

  hora: string;
  minuto: string;

  valor: string;

  constructor(public Serv: EstacionamentoService, public alertController: AlertController, private router: Router) { }

  async presentAlert() {

    const alert = await this.alertController.create({
      header: 'Antenção!',
      message: this.message,
      buttons: ['OK']
    });

    await alert.present();

  }

  ngOnInit() {

    this.placa = '';
    this.random();
  }

  public random() {

    this.ticket = Math.floor(Math.random() * 2000 );

  }

  aumentarHora(v: number) {

    this.hora = new Date().toLocaleTimeString([], {hour: '2-digit'});
    this.minuto = new Date().toLocaleTimeString([], {minute: '2-digit'});

    if ((parseFloat(this.hora) + v) < 10) {

      this.valor = parseFloat(this.hora) + '' + v + ':' + this.minuto;

    } else {

      this.valor = parseFloat(this.hora) + v + ':' + this.minuto;
    }

    return this.valor;

  }

  updatecod() {

    if (this.placa === '' ) {

      this.message = 'Favor informe a placa.';

      this.presentAlert();

    } else {

      this.dados = new Estacionamento;
      this.dados.ticket = this.ticket.toString();
      this.dados.placa = this.placa;
      this.dados.entrada = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
      this.dados.saida = this.aumentarHora(1).toString();
      this.dados.data = new Date().toLocaleDateString();
      this.dados.valor = 'R$10,00';
      this.dados.status = 'A pagar';
      this.Serv.updateItem(this.dados);
      this.message = 'Ticket ' + this.ticket.toString() + ' gerado com sucesso!';

      this.presentAlert();

      this.router.navigate(['/lista']);
    }

  }

}
