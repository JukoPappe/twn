import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: false
})
export class SidebarComponent {
  @Input() floatingSidebar = false;
  routerLinkConfig: { exact: boolean } = { exact: true };
}
