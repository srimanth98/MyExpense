import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isLoggedIn : boolean;
  isDarkTheme: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isLoggedIn = false;
    this.isDarkTheme = false;
  }

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeUserThemeChoice(){
    localStorage.setItem('theme', this.isDarkTheme?"Dark":"Light");
  }

}
