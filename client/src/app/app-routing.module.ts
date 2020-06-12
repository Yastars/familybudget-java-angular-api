import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./pages/about/about.component";
import { ListBudgetsComponent } from "./pages/list-budgets/list-budgets.component";
import { Error404Component } from "./pages/error404/error404.component";
import { AppComponent } from './app.component';
import { CreateUpdateBudgetComponent } from './pages/create-update-budget/create-update-budget.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "budgets",
    component: ListBudgetsComponent,
  },
  {
    path: "budgets/new",
    component: CreateUpdateBudgetComponent,
  },
  {
    path: "budgets/:id/update",
    component: CreateUpdateBudgetComponent,
  },
  {
    path: "404",
    component: Error404Component,
    data: {
      title: "A keresett oldal nem található",
    },
  },
  {
    path: "**",
    redirectTo: "404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
