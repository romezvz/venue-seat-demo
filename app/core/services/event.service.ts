import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { environment } from '@env/environment'
import { Event } from '@shared/interfaces/event.interface'
import { Observable } from 'rxjs'

/**
 * Service for retrieving event data from the API.
 */
@Injectable({ providedIn: 'root' })
export class EventService {
  // Dependency injection
  private readonly _httpClient = inject(HttpClient)

  // API base URL for event endpoints
  private readonly _apiUrl = `${environment.apiUrl}/events`

  /**
   * Retrieves all available events.
   * @returns Observable of event array.
   */
  getEvents(): Observable<Event[]> {
    return this._httpClient.get<Event[]>(this._apiUrl)
  }

  /**
   * Retrieves a single event by its ID.
   * @param id - Event ID
   * @returns Observable of event data.
   */
  getEventById(id: number): Observable<Event> {
    return this._httpClient.get<Event>(`${this._apiUrl}/${id}`)
  }
}
