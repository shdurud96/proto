import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'
import { SuccessPage } from './success/success';

@Component({
    templateUrl:'input.html'
})

export class InputPage{
    username: string="";
    password: string="";

    constructor(public navCtrl: NavController){

    }

    signIn(){
        this.navCtrl.push(SuccessPage, {
            username: this.username, //parameter를 successPage로 넘김.
            password: this.password
        });
    }
}