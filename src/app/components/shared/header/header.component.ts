import {Component, OnInit} from '@angular/core';
import {faUser, faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import {ThemeService} from '../../../modules/services/theme.service';
import {SignInComponent} from '../../../dialogs/sign-in/sign-in.component';
import {SignUpComponent} from '../../../dialogs/sign-up/sign-up.component';
import {MatDialog} from '@angular/material/dialog';

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

  constructor(private themeService: ThemeService, private dialog: MatDialog) {
  }

  ngOnInit(): void {
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
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

  }

}
