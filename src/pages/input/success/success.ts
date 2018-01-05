import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'

@Component({
    templateUrl : 'success.html'

})

export class SuccessPage{

    username: string ="";
    password: string ="";

    constructor(public navParams: NavParams){
        this.username = this.navParams.get("username");
        this.password = this.navParams.get("password")

        console.log(this.username);
        console.log(this.password);
    }
}