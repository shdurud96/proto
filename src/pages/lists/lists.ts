import { Component } from '@angular/core'
import { Person } from '../../models/person'
import { NavController } from 'ionic-angular'
import { DetailPage } from './detail/detail';


@Component({
    templateUrl : 'lists.html'
})

export class ListPage{
    persons: Person[] = [];

    constructor(public navCtrl:NavController){
        this.persons.push(new Person("assets/imgs/Junyong.jpg","Junyong","잘생긴 준용"));
        this.persons.push(new Person("assets/imgs/Seoyoung.jpg","Seoyoung","서영인 바보"));
        this.persons.push(new Person("assets/imgs/Yeokyung.png","Yeokyung","귀여운 여경"));
    }

    openDetailPage(person){
        this.navCtrl.push(DetailPage,{
            profileImage: person.avatar,
            name: person.name,
            detail: person.detail
        });
    }
}