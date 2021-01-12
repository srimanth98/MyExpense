import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  isLoggedIn: boolean;
  constructor(public fireAuth: AngularFireAuth) {
    this.isLoggedIn = false;
  }

  async signIn(email: string, password: string) {
    await this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(
      res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      }
    )
  }

  async signUp(email: string, password: string) {
    await this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then(
      res => {
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
      }
    )
  }

  logout() {
    this.fireAuth.signOut();
    localStorage.removeItem('user');
  }
}
