import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { ROUTES } from '@app/core/routes/routes'
import { EventService } from '@app/core/services/event.service'
import { TranslateModule } from '@ngx-translate/core'
import { Event } from '@shared/interfaces/event.interface'

@Component({
  standalone: true,
  selector: 'rz-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class EventListComponent implements OnInit {
  // Dependency injection for services
  private readonly _eventService = inject(EventService)
  private readonly _router = inject(Router)

  // List of available events
  events: Event[] = []

  /**
   * Load events on init
   */
  ngOnInit() {
    this._eventService.getEvents().subscribe((res) => (this.events = res))
  }

  /**
   * Navigate to seat selector for the given event
   */
  goToSeats(eventId: number) {
    this._router.navigate([`/${ROUTES.SEATS}`, eventId])
  }
}
