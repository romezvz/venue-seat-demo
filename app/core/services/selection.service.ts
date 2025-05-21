import { Injectable, signal } from '@angular/core'
import { Seat } from '@app/shared/interfaces/seat.interface'
import { Event } from '@shared/interfaces/event.interface'

/**
 * Service responsible for managing seat selections grouped by event.
 * Stores selection state using Angular signals.
 */
@Injectable({ providedIn: 'root' })
export class SelectionService {
  // Reactive selection state: key = eventId, value = { event info + selected seats }
  private readonly _selections = signal<Record<number, { event: Event; seats: Seat[] }>>({})

  /**
   * Returns the current selection state.
   */
  get selections() {
    return this._selections()
  }

  /**
   * Toggles a seat selection for a given event.
   * Adds or removes the seat from the selection list.
   * @param event - The event to which the seat belongs.
   * @param seat - The seat to toggle.
   */
  toggleSeat(event: Event, seat: Seat): void {
    const current = structuredClone(this._selections())
    const existing = current[event.id]?.seats ?? []

    const exists = existing.find((s) => s.id === seat.id)

    if (exists) {
      current[event.id].seats = existing.filter((s) => s.id !== seat.id)
      if (current[event.id].seats.length === 0) {
        delete current[event.id]
      }
    } else if (!current[event.id]) {
      current[event.id] = { event, seats: [seat] }
    } else {
      current[event.id].seats.push(seat)
    }

    this._selections.set(current)
  }

  /**
   * Calculates the total price of selected seats for a specific event.
   * @param eventId - The ID of the event.
   * @returns Total price as a number.
   */
  getTotal(eventId: number): number {
    return this._selections()[eventId]?.seats.reduce((acc, s) => acc + s.price, 0) ?? 0
  }

  /**
   * Clears all seat selections.
   */
  clearAll(): void {
    this._selections.set({})
  }
}
