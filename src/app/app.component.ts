import { Component } from '@angular/core';
import { New2Component } from './new2/new2.component';
import { Service1Service } from './service1.service';
import { Service2Service } from './service2.service';
import { enableProdMode } from '@angular/core';
import { LoginService } from './login.service';

enableProdMode();


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'train2';
  name = 'yaseen';
  user: string = "admin";
  pass: string = "admin";
  result:string;
    status:boolean ;
 


  constructor(private Service1: Service1Service, private  Service2: Service2Service, private login1: LoginService) {
    Service2.typeSomeThing(name);
    this.printOnConsole();
    login1.loginB(this.user, this.pass);
  }

  printOnConsole() {
    console.log('+++' + this.name);
  }

  show() {
    console.log(this.name);
  }

 
  validate() {
     
     this.result= this.login1.loginB(this.user, this.pass);

     if (this.result=="True"){
       this.status =true;
     }
     else
     {
       this.status=false;
     }
   return this.result;
    
  } 
}
