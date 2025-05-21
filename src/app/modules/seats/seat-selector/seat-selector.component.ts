import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventService } from '@app/core/services/event.service'
import { SeatService } from '@app/core/services/seat.service'
import { SelectionService } from '@app/core/services/selection.service'
import { TranslateModule } from '@ngx-translate/core'
import { Event } from '@shared/interfaces/event.interface'
import { Seat } from '@shared/interfaces/seat.interface'

@Component({
  standalone: true,
  selector: 'rz-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrl: './seat-selector.component.scss',
  imports: [CommonModule, TranslateModule]
})
export class SeatSelectorComponent implements OnInit {
  // Dependency injection for services
  private readonly _seatService = inject(SeatService)
  private readonly _eventService = inject(EventService)
  private readonly _route = inject(ActivatedRoute)
  selectionService = inject(SelectionService)

  // Current event
  event!: Event

  // Seats for the current event
  seats: Seat[] = []

  // Selected seat IDs for current event
  selectedIds: string[] = []

  // Event IDs with selected seats
  selectionKeys = () => Object.keys(this.selectionService.selections).map(Number)

  /**
   * Load seats and event data on init
   */
  ngOnInit() {
    const eventId = Number(this._route.snapshot.paramMap.get('eventId'))

    this._seatService.getSeatsByEvent(eventId).subscribe((res) => (this.seats = res))
    this._eventService.getEventById(eventId).subscribe((event) => {
      this.event = event
    })
  }

  /**
   * Toggle seat selection
   */
  toggleSeat(seat: Seat) {
    this.selectionService.toggleSeat(this.event, seat)
  }

  /**
   * Simulate purchase and clear selection
   */
  confirmPurchase() {
    this.selectionService.clearAll()
    alert('Compra simulada con éxito ✅')
  }

  /**
   * Return selected seat IDs for a given event
   */
  getSelectedSeatIds(eventId: number): string[] {
    return this.selectionService.selections[eventId]?.seats.map((s) => s.id) ?? []
  }
}
