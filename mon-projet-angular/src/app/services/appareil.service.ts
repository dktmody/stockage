import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppareilService{

    appareilSubject = new Subject<any[]>();

    private appareils = [];
    constructor(private httpClient: HttpClient){}

    emitAppareilSubject(){
        this.appareilSubject.next(this.appareils.slice());
    }
    getAppareilById(id: number){
        const appareil = this.appareils.find(
            (appareilObject)=>{
                return appareilObject.id === id;
            }
        );
        return appareil;

    }
    switchOnALl(){
        for(let appareil of this.appareils){
            appareil.status = 'allumé';
        }
        this.emitAppareilSubject();
    }
    switchOffALl(){
        for(let appareil of this.appareils){
            appareil.status = 'éteint';
        }
        this.emitAppareilSubject();
    }

    switchOnOne(index: number){
        this.appareils[index].status = 'allumé';
        this.emitAppareilSubject();
    }
    switchOffOne(index: number){
        this.appareils[index].status = 'éteint';
        this.emitAppareilSubject();
    }
    addAppareil(name: string, status: string){
        const appareilObject = {
            id: 0,
            name: '',
            status: ''
        };
        appareilObject.name = name;
        appareilObject.status = status;
        appareilObject.id = this.appareils[(this.appareils.length - 1)].id + 1;

        this.appareils.push(appareilObject);
        this.emitAppareilSubject();
    }
    saveAppareilsToServer(){
        this.httpClient.put('https://http-client-demo-d89de.firebaseio.com/appareils.json', this.appareils)
            .subscribe(
                ()=>{
                 console.log('Enregistrement terminé !');
                },
                (error)=>{
                    console.log('Erreur de sauvagerde !'+ error);
                }
        )

    }
    getAppareilsFormServer(){
        this.httpClient
            .get<any[]>('https://http-client-demo-d89de.firebaseio.com/appareils.json')
            .subscribe(
                (response)=>{
                    this.appareils = response;
                    this.emitAppareilSubject();
                },
                (error)=>{
                    console.log('Erreur de chargement ! '+ error);
                }
            );
    }
}