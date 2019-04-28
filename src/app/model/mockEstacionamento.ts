import { Estacionamento } from './estacionamento';

export let ESTACIONAMENTO: Estacionamento[] = [
    {
        id: 1,
        ticket: '1',
        placa: 'WDE1211',
        entrada: '10:00',
        saida: '11:00',
        data: '12/02/2019',
        valor: 'R$10.00',
        status: 'Pago'
    },
    {
        id: 2,
        ticket: '2',
        placa: 'WDE1212',
        entrada: '10:00',
        saida: '11:00',
        data: '12/02/2019',
        valor: 'R$10.00',
        status: 'Pago'
    },
    {
        id: 3,
        ticket: '3',
        placa: 'WDE123',
        entrada: '10:00',
        saida: '12:00',
        data: '12/02/2019',
        valor: 'R$20.00',
        status: 'A pagar'
    },
];
