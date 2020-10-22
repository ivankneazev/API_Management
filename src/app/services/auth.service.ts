import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {SerAuthResp,User} from '../interfaces/Interfaces'
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router ) { }

get token():string{
  const expDate = new Date(localStorage.getItem('exp-session-token'));
  console.log(expDate< new Date())
  if(expDate< new Date()){
    this.logout();
    return null
  }
  else{
   return localStorage.getItem('exp-session-token')
  }

}


private setToken(response:SerAuthResp | null){
  console.log(response)
  if(response){
    const expDate = new Date(new Date().getTime() + +response.expiresIn*100);
    localStorage.setItem('session-token', response.idToken);
    localStorage.setItem('exp-session-token',expDate.toString())
  }
  else{
    localStorage.clear()
  }


}

login(user):Observable<any>{
return this.http.post('http://localhost:3000/logingbl',user)
.pipe(tap(this.setToken))
}


logout(){
  
  this.router.navigate(['login'])
  this.setToken(null);
}






















 /*  private setToken(responce:SerAuthResp | null){
    if(responce){
      const expDate = new Date(new Date().getTime() + +responce.expiresIn *1000);
      localStorage.setItem('session-token', responce.idToken);
      localStorage.setItem('session-token-exp', expDate.toString())
    }else{
      localStorage.clear();
    }
  }
  
  get token():string{
    const expDate = new Date(localStorage.getItem('session-token-exp'));
    if(new Date() >expDate){
      this.logout();
      return null
    }

      return localStorage.getItem('session-token')
  }

  login(user:User):Observable<any>{
    console.log(user)
    return this.http.post('http://localhost:3000/logingbl', user)
    .pipe(tap(this.setToken))
    
  }

  logout(){
    this.setToken(null)
  }

  isAuthenticated():boolean{
    return !!this.token;
  }
 */
}
