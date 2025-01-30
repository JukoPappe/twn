import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "./store/reducers/app.reducer";
import { getIsLoading } from "./store/selectors/app.selectors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {
  title = 'twn-workspace';
  floatingSidebar = false;
  isLoading: Observable<boolean>;
  constructor(private readonly store: Store<AppState>) {
    this.isLoading = this.store.select(getIsLoading);
  }

  toggleSidebar = (showSidebar: boolean): void => {
    this.floatingSidebar = showSidebar;
  }
}
