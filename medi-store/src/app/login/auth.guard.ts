import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean{
    if(localStorage.getItem('token')){
      //this.route.navigate(['profile'])
      return true;
      
    }
    else{
      this.route.navigate(['/login']);
      alert("Please Login")
      return false;

    }
  }
  
}
