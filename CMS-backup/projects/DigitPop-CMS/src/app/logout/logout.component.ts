import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService } from '../shared/services/auth-service.service';
import { BillsbyService } from '../shared/services/billsby.service';

@Component({
  selector: 'DigitPop-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  log:any;
  error = '';

  constructor(
    public dialogRef: MatDialogRef<LogoutComponent>,
    public router:Router
  ) {
  }
  ngOnInit(){

  }
  clicktrial(){
    let element: HTMLElement = document.getElementById("close") as HTMLElement;
    element.click();
    console.log("Trial clicked");
  }
  logout(){
    this.log=1;
    localStorage.removeItem("currentuser");
    localStorage.removeItem("currentrole");
    localStorage.setItem("logout", this.log);
    this.router.navigate(['/']);
    console.log(this.log);
    this.dialogRef.close();
  }
  close(){
    this.dialogRef.close();
  }
  // convenience getter for easy access to form fields
}
