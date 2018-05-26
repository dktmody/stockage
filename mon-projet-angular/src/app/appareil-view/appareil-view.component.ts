import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
    isAuth = false;
    lastUpdate = new Promise((resolve, reject) => {
        const date = new Date();
        setTimeout(
            () => {
                resolve(date);
            }, 2000
        );
    });


    appareils:any[];
    appareilSubscription: Subscription;
    constructor(private AppareilService: AppareilService){
        setTimeout(
            ()=> {
                this.isAuth = true;
            }, 4000
        );
    }
    ngOnInit(){
        this.appareilSubscription = this.AppareilService.appareilSubject.subscribe(
            (appareils: any[])=>{
                this.appareils = appareils;
            }
        );
       this.AppareilService.emitAppareilSubject();
    }

    onAllumer(){
        this.AppareilService.switchOnALl();
    }
    onEteindre(){
        this.AppareilService.switchOffALl();
    }
    onSave(){
        this.AppareilService.saveAppareilsToServer();
    }
    onFetch(){
        this.AppareilService.getAppareilsFormServer();
    }
}
