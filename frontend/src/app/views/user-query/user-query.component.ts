import { Component, OnInit } from '@angular/core';
import { User } from  './../../account/shared/user.model';
import { AccountService } from  './../../account/shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent implements OnInit {

  
  users : User[]
  displayedColumns = ['id', 'name', 'email', 'action']

  constructor(private accountService: AccountService) { 
  
  }

  ngOnInit(): void {
    this.accountService.read().subscribe(users => {
      this.users = users
    })
  }


}
