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

@NgModule({
  declarations: [AppComponent, ArticleComponent, TableComponent, WelcomeComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    RoutesModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
