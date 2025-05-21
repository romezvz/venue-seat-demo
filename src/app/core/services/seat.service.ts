import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '@env/environment'
import { Seat } from '@shared/interfaces/seat.interface'
import { Observable } from 'rxjs'

/**
 * Service for retrieving seat data from the API.
 */
@Injectable({ providedIn: 'root' })
export class SeatService {
  // Dependency injection
  private readonly _httpClient = inject(HttpClient)

  // API base URL for seat endpoints
  private readonly _apiUrl = `${environment.apiUrl}/seats`

  /**
   * Retrieves all seats for a given event.
   * @param eventId - The ID of the event.
   * @returns Observable of seat array.
   */
  getSeatsByEvent(eventId: number): Observable<Seat[]> {
    return this._httpClient.get<Seat[]>(`${this._apiUrl}?eventId=${eventId}`)
  }
}
