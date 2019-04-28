import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { EstacionamentoService } from './../../services/estacionamento.service';
import { Component, OnInit } from '@angular/core';
import { Estacionamento } from 'src/app/model/estacionamento';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.page.html',
  styleUrls: ['./pagamentos.page.scss'],
})
export class PagamentosPage implements OnInit {

  id: string;

  itens: Array<Estacionamento>;
  currencyPipe: any;

  message: string;

  status: string;


  // tslint:disable-next-line:max-line-length
  constructor(public Serv: EstacionamentoService, private route: ActivatedRoute, private router: Router, public alert: AlertController ) { }

  async presentAlert() {

    const alert = await this.alert.create({
      header: 'Atenção!',
      message: this.message,
      buttons: ['OK']
    });

    await alert.present();

  }


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  ngOnInit() {
    this. buscaItem();
  }

  buscaItem() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.itens = this.Serv.buscaItem(this.id);
  }

  calculaValor(entrada, saida) {

    const d1 = entrada.split(':');
    const d2 = saida.split(':');
    let hora1 = d1[0];
    const minuto1 = d1[1];
    let hora2 = d2[0];
    const minuto2 = d2[1];

    let resultado = 0;

    // tslint:disable-next-line:radix
    hora1 = (hora1 * 60) + parseInt( minuto1 ); /*630*/
    // tslint:disable-next-line:radix
    hora2 = (hora2 * 60) + parseInt( minuto2 ); /*680*/

    if (hora2 > hora1) {

      let final = hora2 - hora1;

      final = final / 60;
      if ( Number.isInteger(final) ) {

        resultado = final * 10.00;

      } else {

        const aux = Math.round(final);

        if ( aux < final ) {

          resultado =  (final = aux + 1) * 10.00;

        } else {

          resultado =  final = Math.round(final * 10.00);

        }

      }
    }

    return 'R$' + resultado.toFixed(2);

  }

  clickPagar() {

    this.message = 'Pagamento realizado com sucesso!';

    this.presentAlert();

    this.status = 'Pago';

    this.router.navigate(['./lista']);

  }




}
