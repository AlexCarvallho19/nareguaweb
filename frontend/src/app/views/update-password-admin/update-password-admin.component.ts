import { Component, OnInit } from '@angular/core';
import { Admin } from  './../../account-admin/shared/admin.model';
import { AccountAdminService } from './../../account-admin/shared/account-admin.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update-password-admin',
  templateUrl: './update-password-admin.component.html',
  styleUrls: ['./update-password-admin.component.css']
})
export class UpdatePasswordAdminComponent implements OnInit {

  admin: Admin;

  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private accountAdminService: AccountAdminService) { }

  
  
  ngOnInit(): void {
    const id = 1
    this.accountAdminService.readByIdAdmin(id).subscribe((admin) => {
      this.admin = admin;
    })
  }
  
  updateAdmin(): void {
    this.accountAdminService.updateAdmin(this.admin).subscribe(() => {
      this.accountAdminService;
      this.router.navigate(["/baberMenu"]);
    });
  }

}
