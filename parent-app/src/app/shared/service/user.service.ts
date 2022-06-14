import { Injectable } from '@angular/core';
import {User} from "../model/User";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    currentUser: User = new User()
    getCurrentUser(){
        return this.currentUser;
    }
    setCurrentUser(currentUser: any){
        this.currentUser = currentUser;
    }
}