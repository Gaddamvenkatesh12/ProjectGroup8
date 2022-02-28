
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PoolService } from './pool.service';
import { authenticationStatus } from './authenticationStatus.model';
import { UserService } from './User.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authenticationStatus: authenticationStatus | undefined;
  adminAuthentication:authenticationStatus|undefined;
  isAdmin:boolean = false;
  isUser:boolean = false;
  submitted: boolean;
  constructor(
    private userservice: UserService,
    private poolService: PoolService,
    private router: Router,
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
  
    
   
    let userName = form.value.userName;
    let password = form.value.password;
    if(userName === "" ||password === "" )
    {
      alert("please login correctly")
    }
    else{
    
    
      localStorage.setItem("token", "yes")
        this.submitted=true;
    this.userservice.authenticate(userName, password).subscribe((res) => {
      this.authenticationStatus = res;
      this.isUser = res.authenticated
      if(this.isUser)
      {
      
        
        this.router.navigate(['/shop'], { relativeTo: this.route });

    this.submitted=true;
      } 
      else
      {
        
        this.submitted=true;
        this.userservice.authenticateAdmin(userName, password).subscribe((res) => {
        this.adminAuthentication = res;
        this.isAdmin = res.authenticated
        if(this.isAdmin){

         localStorage.setItem("admin", "yes")
          
          this.router.navigate(['/admin/medicines'], { relativeTo: this.route });
        }
        if(!this.isAdmin && !this.isUser){
       
          alert("username and password do not match or username doesnot exists please redirect to signup page and register")
          form.reset();   
          }else{
            localStorage.setItem("token", "yes")
        this.submitted=true;
          }

      
        });
        }
       }); 
      }
      
      
    }

  goToSignup(action: string) {
    this.router.navigate(['/signup'], { relativeTo: this.route });
  }
  
  
}
