import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';
import Swal from 'sweetalert2';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  isLoading = false;
  private notifier: NotifierService;

  constructor(private dialogRef: MatDialogRef<SignUpComponent>, private  authService: AuthService, notifier: NotifierService) {
    this.notifier = notifier;
  }

  ngOnInit(): void {
  }

  submitFormLogin(form: any): void {
    console.log(form.value);
    this.isLoading = true;
    this.authService.register(form.value.email, form.value.password)
      .then((auth) => {
        if (auth) {
          Swal.fire({
            position: 'bottom-left',
            icon: 'success',
            title: 'successfully registered, welcome  👌👌',
            showConfirmButton: false,
            timer: 2500
          });
        }
        this.isLoading = false;
        this.dialogRef.close();
      }).catch((err) => {
      console.log(err);
      this.isLoading = false;
      this.dialogRef.close();
    });
  }
}
