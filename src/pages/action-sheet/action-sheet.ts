import { Component } from '@angular/core'
import { ActionSheetController } from 'ionic-angular'

@Component({
    templateUrl: 'action-sheet.html'   //"action-sheet page가 이 html파일을 쓰겠다"
})
export class ActionSheetPage{
    constructor(public actionSheetCtrl: ActionSheetController){
    
    }
    presentActionSheet(){    
        let actionSheet = this.actionSheetCtrl.create({
            title: 'My first ActionSheet',
            buttons:[
            {
                text: 'delete',
                role: 'destructive',
                handler:() => {
                    console.log('Delete clicked!');
                },
            },
            {
                text: 'button',
                handler:() =>{
                    console.log('button clicked!');
                }
            },
            {
                text: 'cancel',
                role: 'cancel',
                handler:() => {
                    console.log('Cancel clicked!');
                }

            }
            ]
        });
        actionSheet.present();  //presentActionSheet함수가 실행될 때마다 ActionSheet이 등장하게 됨.
    }
}    