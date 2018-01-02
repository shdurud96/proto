import { Component } from '@angular/core'
import { AlertController } from 'ionic-angular'
@Component({
    templateUrl: 'alert.html'
})
export class AlertPage{
   constructor(public alertCtrl: AlertController){

    }
    showBasicAlert(){
        let alert = this.alertCtrl.create({
            title: 'Basic Alert!',
            subTitle: 'This is an ui component called a basic alert',
            buttons: ['OK'],
        });
        alert.present();
    }
    showPromptAlert(){
        let prompt = this.alertCtrl.create({
            title: 'Login',
            message: 'Enter your password',
           /* inputs: [
                {
                    name:'title',
                    placeholder: 'Title'
                },
            ],*/
            buttons:[
                {
                    text:'cancel',
                    handler: data => {

                    }
                },
                {
                    text:'Next',
                    handler: data => {
                        console.log(data['password']); //console에 입력받은 password를 띄워줌.
                    }
                }
            ]
        });
        prompt.present();
    }
    showConfirmationAlert(){

    }
    showRadioAlert(){
        let alert = this.alertCtrl.create();
        alert.setTitle('Choose your location');
        alert.addInput({
            type: 'radio',
            label: 'Seoul',
            value: 'seoul',   //value로는 숫자도 전달 할 수 있다. 내가 원하는 data를 전달하게 하면 됨.
            checked: true,
        });
        alert.addInput({
            type: 'radio',
            label: 'Daejeon',
            value: 'daejeon',
        });
        alert.addInput({
            type: 'radio',
            label: 'Busan',
            value: 'busan'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text:'OK',
            handler: data => {
                console.log(data);  //여기서 응용하여 if(data == 'seoul') .... else if(data == 'busan')... 이런식으로 다음 동작을 설정할 수 있다.
            }
        });
        alert.present();
    }
    showCheckboxAlert(){

    }

}