import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { EventService } from '@app/core/services/event.service'
import { Event } from '@shared/interfaces/event.interface'

@Component({
  standalone: true,
  selector: 'rz-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss',
  imports: [CommonModule, RouterModule]
})
export class EventListComponent implements OnInit {
  private readonly _eventService = inject(EventService)
  private readonly _router = inject(Router)
  events: Event[] = []

  ngOnInit() {
    this._eventService.getEvents().subscribe((res) => (this.events = res))
  }

  goToSeats(eventId: number) {
    this._router.navigate(['/seats', eventId])
  }
}
