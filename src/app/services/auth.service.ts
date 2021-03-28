import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import firebase from 'firebase';
import auth = firebase.auth;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) {
  }

  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fireAuth.signInWithEmailAndPassword(email, password)
        .then((userData) => {
          resolve(userData);
        }).catch((err) => {
        reject(err);
      });
    });
  }

  register(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fireAuth.createUserWithEmailAndPassword(email, password)
        .then((userData) => {
          resolve(userData);
        }).catch((err) => {
        reject(err);
      });
    });
  }

  getAuth(): Observable<any> {
    return this.fireAuth.authState;
  }

  loginWithGoogle(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fireAuth.signInWithPopup(new auth.GoogleAuthProvider())
        .then((userData) => {
          resolve(userData);
        }).catch((err) => {
        reject(err);
      });
    });
  }

  loginWithFacebook(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.fireAuth.signInWithPopup(new auth.FacebookAuthProvider())
        .then((userData) => {
          resolve(userData);
        }).catch((err) => {
        reject(err);
      });
    });
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.fireAuth.signOut();
  }

}
