import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AccountService } from './../../account/shared/account.service';
import { User } from './../../account/shared/user.model';



@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user: User;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private accountService: AccountService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.accountService.readById(id).subscribe((user) => {
      this.user = user;
    });
  }

  deleteUser(): void {
    this.accountService.delete(this.user.id).subscribe(() => {
      this.router.navigate(["/userQuery"]);
    });
  }


}
