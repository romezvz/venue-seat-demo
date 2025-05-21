import { Routes } from '@angular/router'
import { ROUTES } from '@core/routes/routes'

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.EVENTS,
    pathMatch: 'full'
  },
  {
    path: ROUTES.EVENTS,
    loadComponent: () =>
      import('@modules/events/event-list/event-list.component').then((m) => m.EventListComponent)
  },
  {
    path: `${ROUTES.SEATS}/:eventId`,
    loadComponent: () =>
      import('@modules/seats/seat-selector/seat-selector.component').then(
        (m) => m.SeatSelectorComponent
      )
  },
  {
    path: ROUTES.RESUMEN,
    loadComponent: () =>
      import('./modules/summary/summary.component').then((m) => m.SummaryComponent)
  },
  {
    path: '**',
    redirectTo: ROUTES.EVENTS
  }
]
