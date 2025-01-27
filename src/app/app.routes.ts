import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ArticleComponent } from "./components/article/article.component";
import { TableComponent } from "./components/table/table.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

export const appRoutes: Route[] = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "article",
    component: ArticleComponent
  },
  {
    path: "table",
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: "reload", scrollPositionRestoration: "enabled" })],
  exports: [RouterModule]
})
export class RoutesModule {}