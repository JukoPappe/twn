import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'twn-workspace';
  floatingSidebar = false;

  toggleSidebar = (showSidebar: boolean): void => {
    this.floatingSidebar = showSidebar;
  }
}
