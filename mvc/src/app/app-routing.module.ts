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
    path: 'configuracionIDE',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/config-ide/config-ide.module').then(
            (m) => m.ConfigIdeModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
]
