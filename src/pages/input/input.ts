import { Component } from '@angular/core'

@Component({
    templateUrl:'input.html'
})

export class InputPage{
    username: string="";
    password: string="";

    constructor(){

    }

    signIn(){
        console.log(this.username);
        
    }
}