
import {Injectable} from '@angular/core'
import {HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService{
    
    constructor(public http:HttpClient){

    }
    getUsers(){
        return this.http.get<any[]>('http://jsonplaceholder.typicode.com/users');
    }
    addUser(user){
        return this.http.post('http://jsonplaceholder.typicode.com/users',user);
    }
}

