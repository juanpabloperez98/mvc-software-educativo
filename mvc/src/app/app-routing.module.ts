import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'introduccionMVC',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/introduction-mvc/introduction-mvc.module').then(
            (m) => m.IntroductionMVCModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
]
