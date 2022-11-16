import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  constructor(private menuController: MenuController, private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }


  scaner(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}

