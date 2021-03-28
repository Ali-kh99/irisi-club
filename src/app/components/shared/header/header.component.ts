import { Component, OnInit } from '@angular/core';
import { faUser, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../../modules/services/theme.service';
import { SignInComponent } from '../../../dialogs/sign-in/sign-in.component';
import { SignUpComponent } from '../../../dialogs/sign-up/sign-up.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faTimes = faTimes;
  faBars = faBars;

  activeMobileNavbar = false;
  activeMobileNavbarDropdown = false;
  isLightTheme = false;
  isLogged = false;
  login = '';

  constructor(private themeService: ThemeService, private dialog: MatDialog, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLogged = true;
        console.log(auth);
        this.login = auth.displayName;
      }
    });
  }

  public toggleMobileNavbar(): void {
    this.activeMobileNavbar = !this.activeMobileNavbar;
  }

  public toggleMobileNavbarDropdown(): void {
    if (this.activeMobileNavbar === true) {
      this.activeMobileNavbarDropdown = !this.activeMobileNavbarDropdown;
    }
  }

  toggleTheme(): void {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
    this.isLightTheme = !this.isLightTheme;
    // this.setLightbulb();
  }

  openDialogLogin(): void {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '500px',
      height: 'auto',
      panelClass: 'myapp-login-dialog',
      disableClose: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

  }

  openDialogRegister(): void {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px',
      height: 'auto',
      panelClass: 'myapp-login-dialog',
      disableClose: false,
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

  }

  // tslint:disable-next-line:typedef
  onLogOut() {
    this.authService.logout();
    Swal.fire({
      position: 'bottom-left',
      icon: 'info',
      title: 'successfully logout',
      showConfirmButton: false,
      timer: 2000
    });
    this.isLogged = false;
  }
}
