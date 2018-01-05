import { Component } from '@angular/core'
import { LoadingController } from 'ionic-angular'

@Component({
    templateUrl : 'loading.html'
})

export class LoadingPage{
    constructor(public loadingCtrl: LoadingController){

    }

    getPromise(){    //promise 객체를 넘겨주는 함수.
        return new Promise(function(resolve,reject){
            setTimeout( () => {             //setTimeout은 빌트인 callback함수.
                resolve("Success!");
            }, 1000);
        });
    }

    presentLoadingCircles(){
        let loader = this.loadingCtrl.create({
            spinner: 'circles',
            content: 'Please wait....',
            duration: 3000
        });
        loader.present();
        /*loader.onDidDismiss(()=>{

        });      로딩이 끝났을 때 수행할 동작을 여기에 넣자.*/    

        this.getPromise().then(
            (data) => {
                console.log(data);   //getPromise가 성공했을 때 어떤 data가 넘어오는 지를 확인(여기서는 "Succes"가 넘어옴)
                loader.dismiss();  //getPromise가 성공했을 때 loader가 끝남.
            },     //첫 함수는 getPromise가 정상적으로 작동했을 때 수행되는 함수
            (error) => {

            }      //두번 째 함수는  getPromise가 정상적으로 동작하지 않을 때 수행되는 함수.
        );
    }

    presentLoadingBubbles(){
        let loader = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: 'Please wait....',
            duration: 3000
        });
        loader.present();
       /*loader.onDidDismiss(()=>{

        });*/
    }

    presentLoadingCrescent(){
        let loader = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Please wait....',
            duration: 3000
        });
        loader.present();
        /*loader.onDidDismiss(()=>{

        });*/
    }
}