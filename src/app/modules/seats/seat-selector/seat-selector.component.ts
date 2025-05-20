import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { EventService } from '@app/core/services/event.service'
import { SeatService } from '@app/core/services/seat.service'
import { SelectionService } from '@app/core/services/selection.service'
import { Event } from '@shared/interfaces/event.interface'
import { Seat } from '@shared/interfaces/seat.interface'

@Component({
  standalone: true,
  selector: 'rz-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrl: './seat-selector.component.scss',
  imports: [CommonModule]
})
export class SeatSelectorComponent implements OnInit {
  private _seatService = inject(SeatService)
  private _eventService = inject(EventService)
  private _route = inject(ActivatedRoute)
  selection = inject(SelectionService)
  event!: Event

  seats: Seat[] = []
  selectedIds: string[] = []
  selectionKeys = () => Object.keys(this.selection.selections).map(Number)

  ngOnInit() {
    const eventId = Number(this._route.snapshot.paramMap.get('eventId'))

    this._seatService.getSeatsByEvent(eventId).subscribe((res) => (this.seats = res))
    this._eventService.getEventById(eventId).subscribe((event) => {
      this.event = event
    })
  }

  toggle(seat: Seat) {
    this.selection.toggleSeat(this.event, seat)
  }

  confirm() {
    alert('Compra simulada con éxito ✅')
    this.selection.clearAll()
  }

  getSelectedSeatIds(eventId: number): string[] {
    return this.selection.selections[eventId]?.seats.map((s) => s.id) ?? []
  }
}
