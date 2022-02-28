import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AthGuard implements CanActivate {
  constructor(private route:Router){}
  canActivate():boolean{
    if(localStorage.getItem("admin")){
      //this.route.navigate(['profile'])
      return true;
      
    }
    else{
      this.route.navigate(['/shop']);
      alert("Please Login")
      return false;

    }
  }
  
}
