import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConsultaSaldoService } from 'src/app/services/consulta-saldo/consulta-saldo.service';
import { DepositoSucursalService } from 'src/app/services/deposito-sucursal/deposito-sucursal.service';
import Swal from 'sweetalert2';

declare var bootstrap: any;

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  private urlConsultarSaldo = 'http://localhost:8080/cuenta/saldo/2';
  private urlConsultarTransacciones =
    'http://localhost:8080/cuenta/transacciones/2';
  private urlRetiroCajero = 'http://localhost:8080/cuenta/retiro/cajero/2';
  private urlCompraWeb = 'http://localhost:8080/cuenta/compra/web/2';
  private urlDepositoSucursal = "http://localhost:8080/cuenta/deposito/sucursal/2"
  private urlCompraFisica = 'http://localhost:8080/cuenta/compra/fisica/2';
  private urlDepositoOtraCuenta = 'http://localhost:8080/cuenta/deposito/otra';
  private urlDepositoCajero = 'http://localhost:8080/cuenta/deposito/cajero/2';

  cardsItems = [
    {
      title: 'Consultar saldo',
      description:
        'Consulta el saldo de tu cuenta de ahorros de una manera fácil y rápida.',
      image: '/assets/image3.jpg',
      buttonText: 'Consultar saldo',
      modalId: '1',
    },
    {
      title: 'Consultar transacciones',
      description:
        'Consulta el historial de transacciones de tu cuenta de ahorros.',
      image: '/assets/image7.jpg',
      buttonText: 'Consultar transacciones',
      modalId: '7',
    },
    {
      title: 'Retiro de Cajero',
      description:
        'Retira en cualquier cajero automático de la red de cajeros automáticos.',
      image: '/assets/image2.jpg',
      buttonText: 'Retiro de Cajero',
      modalId: '3',
    },
    {
      title: 'Compra fisica',
      description: 'Paga en cualquier comercio afiliado a la red de comercios.',
      image: '/assets/image6.jpg',
      buttonText: 'Compra fisica',
      modalId: '5',
    },
    {
      title: 'Deposito otra cuenta',
      description:
        'Desde nuestra app puedes realizar depósitos a otras cuentas de una manera fácil y rápida.',
      image: '/assets/image5.jpg',
      buttonText: 'Deposito otra cuenta',
      modalId: '6',
    },
    {
      title: 'Compra Web',
      description:
        'Realiza comprar de manera fácil y rápida desde la comodidad de tu hogar.',
      image: '/assets/image4.jpg',
      buttonText: 'Compra Web',
      modalId: '4',
    },
    {
      title: 'Deposito Cajero',
      description:
        'Ahora puedes realizar depósitos en cualquier cajero automático de la red de cajeros automáticos.',
      image: '/assets/image9.jpg',
      buttonText: 'Deposito Cajero',
      modalId: '8',
    },
    {
      title: 'Depósito sucursal',
      description:
        'Deposita en cualquiera de nuestras sucursales a nivel nacional fácil y sin filas.',
      image: '/assets/image1.jpg',
      buttonText: 'Depósito sucursal',
      modalId: '2',
    },
  ];

  saldoActual: number = 0;
  transacciones: any[] = [];
  montoRetiro: number = 0;
  modal!: any;
  formRetirarCajero: FormGroup = new FormGroup({});
  formDespositoSucursal: FormGroup = new FormGroup({});
  formCompraFisica: FormGroup = new FormGroup({});
  formDepositoOtraCuenta: FormGroup = new FormGroup({});
  formCompraWeb: FormGroup = new FormGroup({});
  formDespositoCajero: FormGroup = new FormGroup({});

  constructor(
    private consultaSaldoService: ConsultaSaldoService,
    private depositoSucursal: DepositoSucursalService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initformRetirarCajero();
    this.initformDespositoSucursal();
    this.initformCompraFisica();
    this.initformDepositoOtraCuenta();
    this.initformCompraWeb();
    this.initformDepositoCajero();
  }

  initformRetirarCajero(): void {
    this.formRetirarCajero = this.fb.group({
      montoRetiro: [''],
    });
  }

  initformDespositoSucursal(): void {
    this.formDespositoSucursal = this.fb.group({
      montoDeposito: [''],
    });
  }

  initformCompraFisica(): void {
    this.formCompraFisica = this.fb.group({
      montoCompra: [''],
    });
  }

  initformDepositoOtraCuenta(): void {
    this.formDepositoOtraCuenta = this.fb.group({
      montoTransferir: [''],
      nuneroCuenta: [''],
    });
  }

  initformCompraWeb(): void {
    this.formCompraWeb = this.fb.group({
      montoCompra: [''],
    });
  }

  initformDepositoCajero(): void {
    this.formDespositoCajero = this.fb.group({
      motoDeposito: [''],
    });
  }

  showMenuId(modalId: string): void {
    if (modalId === '1') {
      this.getConsultaSaldo(this.urlConsultarSaldo);
      this.openModalById(modalId);
    } else if (modalId === '2') {     
      this.openModalById(modalId);
    } else if (modalId === '3') {
      this.openModalById(modalId);
    } else if (modalId === '4') {
      this.openModalById(modalId);
    } else if (modalId === '5') {
      this.openModalById(modalId);
    } else if (modalId === '6') {
      this.openModalById(modalId);
    } else if (modalId === '7') {
      this.getConsultaTransacciones(this.urlConsultarTransacciones);
      this.openModalById(modalId);
    } else if (modalId === '8') {
      this.openModalById(modalId);
    }
  }

  openModalById(modalId: string): void {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
      this.modal.show();
    }
  }

  getConsultaSaldo(apiUrl: string): void {
    this.consultaSaldoService.getConsultarCuenta(apiUrl).subscribe({
      next: (data) => {
        console.log('Respuesta del servidor: actualizado', data);
        this.saldoActual = data;
      },
      error: (err) => {
        console.error('Error al consumir el servicio:', err);
      },
    });
  }

  postSucursalBancaria(url: string, monto: number): void {
    this.depositoSucursal.postSucursalBancaria(url, monto).subscribe({
      next: (response) => {
        this.saldoActual = response;
      },
      error: (err) => {
        this.closeModal();
        this.showSweetalert2();
      },
    });
  }

  getConsultaTransacciones(apiUrl: string): void {
    this.consultaSaldoService.getConsultarCuenta(apiUrl).subscribe({
      next: (data) => {
        this.transacciones = data;
      },
      error: (err) => {
        console.error('Error al consumir el servicio:', err);
      },
    });
  }

  postRetirarCajero(): void {
    this.postSucursalBancaria(
      this.urlRetiroCajero,
      this.formRetirarCajero.value.montoRetiro
    );
    this.formRetirarCajero.reset();
    this.closeModal();
    this.openModalById('1');
  }

  postCompraFisica(): void {    
    this.postSucursalBancaria(
      this.urlCompraFisica,
      this.formCompraFisica.value.montoCompra
    );
    this.formCompraFisica.reset();
    this.closeModal();
    this.openModalById('1');
  }

  postDepositoOtraCuenta(): void {
    console.log(this.formDepositoOtraCuenta.value.montoTransferir);
    console.log(this.formDepositoOtraCuenta.value.nuneroCuenta);    
    const url = `${this.urlDepositoOtraCuenta}/${this.formDepositoOtraCuenta.value.nuneroCuenta}`;
    this.postSucursalBancaria(
      url,
      this.formDepositoOtraCuenta.value.montoTransferir
    );
    this.formDepositoOtraCuenta.reset();
    this.closeModal();
    this.showSweetalert3();
  }

  postCompraWeb(): void {
    console.log(this.formCompraWeb.value.montoCompra);
    
    this.postSucursalBancaria(
      this.urlCompraWeb,
      this.formCompraWeb.value.montoCompra
    );
    this.formCompraWeb.reset();
    this.closeModal();
    this.openModalById('1');
  }

  postDepositoSucursal(): void {
    this.postSucursalBancaria(
      this.urlDepositoSucursal,
      this.formDespositoSucursal.value.montoDeposito
    );
    this.formDespositoSucursal.reset();
    this.closeModal();
    this.openModalById('1');
  }

  postDespositoCajero(): void {
    this.postSucursalBancaria(
      this.urlDepositoCajero,
      this.formDespositoCajero.value.motoDeposito
    );
    this.formDespositoCajero.reset();
    this.closeModal();
    this.openModalById('1');
  }

  closeModal(): void {
    if (this.modal) {
      this.modal.hide();
    }
  }

  showSweetalert2() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Saldo insuficiente para realizar la transacción',
      confirmButtonColor: 'blue',
    });
  }

  showSweetalert3() {
    Swal.fire({
      icon: 'success',
      title: 'Transacción exitosa',
      confirmButtonColor: 'green',
    });
  }
}
