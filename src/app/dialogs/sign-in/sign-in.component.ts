import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


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

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

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
    setTimeout(() => {
      console.log('done');
      this.isLoading = false;
      this.dialogRef.close();
    }, 5000);
  }
}
