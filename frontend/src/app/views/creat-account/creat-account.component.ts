import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../account/shared/account.service';
import {User}from '../../account/shared/user.model';

@Component({
  selector: 'app-creat-account',
  templateUrl: './creat-account.component.html',
  styleUrls: ['./creat-account.component.css']
})
export class CreatAccountComponent implements OnInit {

  user: User = {
    name: "",
    email: "",
    senha: "",
  }

  constructor(private accountService: AccountService, private router: Router ) { }

  ngOnInit(): void {
  }

  createUser(): void {
    this.accountService.createAccount(this.user).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

}
