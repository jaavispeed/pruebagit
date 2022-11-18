import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  qrCodeString='Bienvenidoadasdasd'
  constructor() { }
  usuario={
    nom:'',
  }
  scannedResult: any;
  ngOnInit() {
  }
  GenerarQr(){
    this.qrCodeString=this.usuario.nom;
  }

  VerQr(){
    this.scannedResult = this.qrCodeString;
  }

}
