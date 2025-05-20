import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SeatService } from '@app/core/services/seat.service'
import { Seat } from '@shared/interfaces/seat.interface'

@Component({
  standalone: true,
  selector: 'rz-seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrl: './seat-selector.component.scss',
  imports: [CommonModule]
})
export class SeatSelectorComponent implements OnInit {
  private readonly _seatService = inject(SeatService)
  private readonly _route = inject(ActivatedRoute)
  seats: Seat[] = []

  ngOnInit() {
    const eventId = Number(this._route.snapshot.paramMap.get('eventId'))
    this._seatService.getSeatsByEvent(eventId).subscribe((res) => (this.seats = res))
  }

  selectSeat(seat: Seat) {
    console.log('Seleccionado:', seat)
  }
}
