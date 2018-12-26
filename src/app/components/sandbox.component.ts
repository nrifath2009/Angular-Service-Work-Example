
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
        id:'',
        name:'',
        email:'',
        phone:''
    }
    isEdit:boolean = false;

    constructor(public dataService:DataService)
    {
        this.dataService.getUsers().subscribe(res=>{
            this.users = res;
        });
    }
    onSubmit(isEdit){
        if(isEdit){
            this.dataService.updateUser(this.user).subscribe(user=>{
                for (let index = 0; index < this.users.length; index++) {
                    if(this.users[index].id==this.user.id){
                        this.users.splice(index,1);
                        break;
                    }
                    
                }
                this.users.unshift(this.user);
            });
        }
        else{
            this.dataService.addUser(this.user).subscribe(user=>{
                this.users.unshift(user);
            });
        }
        
    }
    onDeleteClicked(id){
        this.dataService.deleteUser(id).subscribe(res=>{
            for (let index = 0; index < this.users.length; index++) {
                if(this.users[index].id==id){
                    this.users.splice(index,1);
                    break;
                }
                
            }
        });
    }
    onEditClicked(user){
        this.isEdit = true;
        this.user = user;        
    }
}


