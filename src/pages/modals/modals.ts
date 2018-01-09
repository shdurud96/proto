import { Component } from '@angular/core';
import { ModalController, ViewController } from 'ionic-angular'
import { NavParams } from 'ionic-angular';


class Email{
  address: string;
  body: string;

  constructor(addr, body){
    this.address = addr;
    this.body = body;
  }
}


@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  emails: Array<Email>;

  constructor(public modalCtrl: ModalController) {
    this.emails=[
      { address: "john@gamil.com", body: "hello" },
      { address: "paul@gmail.com", body: "bye"},
      { address: "scott@gmail.com", body: "goodnight"}
    ]
  }

  openModalPage(email){
    let modal = this.modalCtrl.create(ModalDetailPage,{
       address : email.address,
       body : email.body
    });
    modal.present();
  }
}

@Component({
  templateUrl: 'modaldetail.html'
})
export class ModalDetailPage{
  address: string;
  body: string;

  constructor(public viewCtrl:ViewController, public navParams: NavParams){
    this.address = this.navParams.get("address");
    this.body = this.navParams.get("body");
  }

  dismiss(){   //자기 자신을 끄게 해야 한다. ViewController를 이용하여
    this.viewCtrl.dismiss();
  }
}
