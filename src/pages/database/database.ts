import { Component } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { ToastController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { AngularFireDatabase } from 'angularfire2/database'


@Component({
    templateUrl: 'database.html'
})

export class DatabasePage{

    myInput: string
    arrData = []

    constructor(private afAuth: AngularFireAuth, private toast : ToastController,
                public navCtrl: NavController, public navParams : NavParams,
                private fdb: AngularFireDatabase
    ){
        this.fdb.list("myItems").valueChanges().subscribe(    //   "/myItems/"로 하는 것과의 차이점이 뭘까.
            data => { this.arrData = data; 
                      console.log(this.arrData);
            }
        )
    }

    btnAddClicked(){
        this.fdb.list("myItems").push(this.myInput);
    }
    
    ionViewWillLoad(){
        this.afAuth.authState.subscribe(data=>{
            if(data && data.email && data.uid){
                this.toast.create({
                    message: 'Welcome to NFC team App\n'+ data.email,
                    duration: 2000
                }).present();
            }
            else{
                this.toast.create({
                    message: 'Could not find Authentication',
                    duration: 2000
                }).present();
            }
        })
    }
}