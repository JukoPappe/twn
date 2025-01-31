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
import { provideHttpClient } from "@angular/common/http";
import { TableRowComponent } from "./components/table/table-row/table-row.component";
import { PaginatePipe } from "./shared/pipes/paginate.pipe";
import { PaginatorComponent } from "./components/table/paginator/paginator.component";
import { PaginatorPagesPipe } from "./shared/pipes/paginator-pages.pipe";
import { TableHeaderComponent } from "./components/table/table-header/table-header.component";
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { GenderPipe } from "./shared/pipes/gender.pipe";
import { DatePipe } from "./shared/pipes/date.pipe";
import { TruncateTextPipe } from "./shared/pipes/truncate-text.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TableComponent,
    WelcomeComponent,
    SidebarComponent,
    HeaderComponent,
    BackgroundsComponent,
    TableRowComponent,
    TableHeaderComponent,
    PaginatorComponent,
    PaginatePipe,
    PaginatorPagesPipe,
    SpinnerComponent,
    GenderPipe,
    DatePipe,
    TruncateTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    RoutesModule,
    FlexLayoutModule,
    FontAwesomeModule,
    StoreModule.forRoot(reducer, {}),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forFeature(APP_FEATURE_KEY, reducer)
  ],
  providers: [provideHttpClient()],
  exports: [StoreModule, EffectsModule, PaginatePipe, PaginatorPagesPipe, GenderPipe, DatePipe, TruncateTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
