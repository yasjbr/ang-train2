import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginB(user: string, pass: string) {
    if (user == "admin" && pass == "admin") {
       console.log('True') ;
      return "true;"
    }

    else { 
    console.log('false') ;
   return "false";
  }
}
}
