import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// import {resolve} from 'dns';
import {AppareilService} from './services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    secondes: number;
    counterSubscription: Subscription;
    constructor(){}

    ngOnInit(){
        const counter = Observable.interval(1000);
this.counterSubscription = counter.subscribe(
    (value: number)=>{
        this.secondes = value;
        }
);
    }
    ngOnDestroy(){
        this.counterSubscription.unsubscribe();
    }
}
