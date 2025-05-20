import { Injectable, signal } from '@angular/core'
import { Seat } from '@app/shared/interfaces/seat.interface'
import { Event } from '@shared/interfaces/event.interface'

@Injectable({ providedIn: 'root' })
export class SelectionService {
  // clave: eventId, valor: { event: Event, seats: Seat[] }
  private _selections = signal<Record<number, { event: Event; seats: Seat[] }>>({})

  get selections() {
    return this._selections()
  }

  toggleSeat(event: Event, seat: Seat) {
    const current = structuredClone(this._selections())
    const existing = current[event.id]?.seats ?? []

    const exists = existing.find((s) => s.id === seat.id)

    if (exists) {
      // deseleccionar
      current[event.id].seats = existing.filter((s) => s.id !== seat.id)
      if (current[event.id].seats.length === 0) {
        delete current[event.id]
      }
    } else {
      // seleccionar
      if (!current[event.id]) {
        current[event.id] = { event, seats: [seat] }
      } else {
        current[event.id].seats.push(seat)
      }
    }

    this._selections.set(current)
  }

  getTotal(eventId: number): number {
    return this._selections()[eventId]?.seats.reduce((acc, s) => acc + s.price, 0) ?? 0
  }

  clearAll() {
    this._selections.set({})
  }
}
