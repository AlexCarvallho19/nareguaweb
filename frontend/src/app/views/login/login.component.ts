import { AccountService } from '../../account/shared/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
  login = {
    usuario: '',
    password: ''
  };

  

  constructor(private router:Router, private accountService: AccountService) { };
  
  

  ngOnInit(): void {}

  
  async onSubmit(){
    try{
      const result = await this.accountService.login(this.login);
      console.log(`Login efetuado: ${result}`);
      
      this.router.navigate(['home']);
    } catch (error){
      console.error(error);
    }
    
  }
  
  
}
