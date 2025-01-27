import { Component, EventEmitter, HostListener, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false
})
export class HeaderComponent {
  @Output()
  sidebarToggled = new EventEmitter<boolean>();
  BURGER_ICON = "fa fa-bars fa-lg";
  X_ICON = "fa-solid fa-xmark icon-size";

  btnIcon = this.BURGER_ICON;

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 960) {
      this.btnIcon = this.BURGER_ICON;
      this.sidebarToggled.emit(false);
    }
  }

  openSidebar = (): void => {
    if (this.btnIcon === this.BURGER_ICON) {
      this.btnIcon = this.X_ICON;
      this.sidebarToggled.emit(true);
    } else {
      this.btnIcon = this.BURGER_ICON;
      this.sidebarToggled.emit(false);
    }
  }
}
