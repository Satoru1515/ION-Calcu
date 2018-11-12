import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero1 = "";
  numero2 = "";
  result = 0;
  constructor(public navCtrl: NavController) {

  }

  sumar() {
    this.result = (+this.numero1) + (+this.numero2);
    console.log(this.result);
  }
  restar() {
    this.result = (+this.numero1) - (+this.numero2);
    console.log(this.result);
  }

  multiplicar() {
    this.result = (+this.numero1) * (+this.numero2);
    console.log(this.result);
  }

  dividir() {
    this.result = (+this.numero1) / (+this.numero2);
    console.log(this.result);
  }

}
