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

  sideBarOpen = false;
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > 990) {
      this.btnIcon = this.BURGER_ICON;
      this.sidebarToggled.emit(false);
    } else {
      this.btnIcon = this.sideBarOpen ? this.X_ICON : this.BURGER_ICON;
      this.sidebarToggled.emit(this.sideBarOpen);
    }
  }

  openSidebar = (): void => {
    if (!this.sideBarOpen) {
      this.btnIcon = this.X_ICON;
      this.sideBarOpen = true;
      this.sidebarToggled.emit(this.sideBarOpen);
    } else {
      this.btnIcon = this.BURGER_ICON;
      this.sideBarOpen = false;
      this.sidebarToggled.emit(this.sideBarOpen);
    }
  }
}
