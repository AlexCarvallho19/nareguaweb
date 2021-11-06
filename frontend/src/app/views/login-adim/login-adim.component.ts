import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountAdminService } from '../../account-admin/shared/account-admin.service';

@Component({
  selector: 'app-login-adim',
  templateUrl: './login-adim.component.html',
  styleUrls: ['./login-adim.component.css']
})
export class LoginAdimComponent implements OnInit {

  loginAdmin = {
    senha: ''
  }

  constructor(private router:Router, private accountAdminService: AccountAdminService) { }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const result = await this.accountAdminService.loginAdmin(this.loginAdmin);
      console.log(`Login efetuado: ${result}`);

      this.router.navigate(['baberMenu']);
    }catch (error){
      console.error(error);
    }  
  }

}
