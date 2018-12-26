
import { Component } from '@angular/core';
import { DataService } from './../services/data.service';
import { Observable } from 'rxjs/Observable';
@Component({
    selector:'sandbox',
    templateUrl:'./sandbox.component.html',
    styleUrls:['./sandbox.component.css']    
})

export class SandboxComponent{
    users:any[];
    user = {
        name:'',
        email:'',
        phone:''
    }
    constructor(public dataService:DataService)
    {
        this.dataService.getUsers().subscribe(res=>{
            this.users = res;
        });
    }
    onSubmit(){
        this.dataService.addUser(this.user).subscribe(user=>{
            this.users.unshift(user);
        });
    }
}


