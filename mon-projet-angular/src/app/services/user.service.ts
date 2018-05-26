import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService{
    private users: User[] = [
        {
            firtName: 'James',
            lastName: 'Smith',
            email: 'james@smith.com',
            drinkPreference: 'Coca',
            hobbies: [
                'coder',
                'la dégustation de café'
            ]
        }
    ];
    userSebject = new Subject<User[]>();

    emitUsers(){
        this.userSebject.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers();
    }
}