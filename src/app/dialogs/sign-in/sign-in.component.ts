import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';
import {NotifierService} from 'angular-notifier';
import Swal from 'sweetalert2';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  isLoading = false;
  private notifier: NotifierService;

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private authService: AuthService,
    notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  @HostListener('window:keyup.esc') onKeyUp(): void {
    this.dialogRef.close();
  }


  // tslint:disable-next-line:typedef
  log(password: any) {
    console.log(password);
  }

  // tslint:disable-next-line:typedef
  submitFormLogin(form: any) {
    console.log(form.value);
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password)
      .then((auth) => {
        if (auth) {
          console.log(auth);
          this.isLoading = false;
          this.dialogRef.close();
          this.notifier.notify('success', 'successfully logged!');
        }
      })
      .catch((err) => {
        this.isLoading = false;
        this.dialogRef.close();
        this.notifier.notify('error', err.message);
        this.isLoading = false;
      });
  }

  loginWithGoogleAccount(): void {
    this.authService.loginWithGoogle()
      .then(auth => {
        if (auth) {
          console.log(auth);
          this.isLoading = false;
          this.dialogRef.close();
          Swal.fire({
            position: 'bottom-left',
            icon: 'success',
            title: 'successfully registered, welcome  👌👌',
            showConfirmButton: false,
            timer: 2500
          });
        }
      }).catch(err => {
      Swal.fire({
        position: 'bottom-left',
        icon: 'error',
        title: err.message + '😑😑',
        showConfirmButton: false,
        timer: 2500
      });
    });
  }

  loginWithFacebook(): void {
    this.authService.loginWithFacebook()
      .then(auth => {
        if (auth) {
          console.log(auth);
          this.isLoading = false;
          this.dialogRef.close();
          Swal.fire({
            position: 'bottom-left',
            icon: 'success',
            title: 'successfully registered, welcome  👌👌',
            showConfirmButton: false,
            timer: 2500
          });
        }
      }).catch(err => {
      Swal.fire({
        position: 'bottom-left',
        icon: 'error',
        title: err.message + '😑😑',
        showConfirmButton: false,
        timer: 2500
      });
    });

  }
}
