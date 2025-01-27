import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { ArticleComponent } from "./components/article/article.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { RoutesModule } from "./app.routes";
import { TableComponent } from "./components/table/table.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";
import { BackgroundsComponent } from "./components/background/backgrounds.component";
import { StoreModule } from "@ngrx/store";
import { APP_FEATURE_KEY, reducer } from "./store/reducers/app.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./store/effetcs/app.effects";

@NgModule({
  declarations: [AppComponent, ArticleComponent, TableComponent, WelcomeComponent, SidebarComponent, HeaderComponent, BackgroundsComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    RoutesModule,
    FlexLayoutModule,
    FontAwesomeModule,
    StoreModule.forRoot(reducer, {}),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature(APP_FEATURE_KEY, reducer),
  ],
  exports: [StoreModule, EffectsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
