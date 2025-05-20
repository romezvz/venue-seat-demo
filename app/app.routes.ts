import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadComponent: () =>
      import('@modules/events/event-list/event-list.component').then((m) => m.EventListComponent)
  },
  {
    path: 'seats/:eventId',
    loadComponent: () =>
      import('@modules/seats/seat-selector/seat-selector.component').then(
        (m) => m.SeatSelectorComponent
      )
  },
  {
    path: '**',
    redirectTo: 'events'
  }
]
