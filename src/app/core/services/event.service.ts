import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { environment } from '@env/environment'
import { Event } from '@shared/interfaces/event.interface'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class EventService {
  private readonly _httpClient = inject(HttpClient)
  private readonly _apiUrl = `${environment.apiUrl}/events`

  getEvents(): Observable<Event[]> {
    return this._httpClient.get<Event[]>(this._apiUrl)
  }

  getEventById(id: number): Observable<Event> {
    return this._httpClient.get<Event>(`${this._apiUrl}/${id}`)
  }
}
