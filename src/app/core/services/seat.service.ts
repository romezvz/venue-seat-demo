import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { environment } from '@env/environment'
import { Seat } from '@shared/interfaces/seat.interface'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class SeatService {
  private readonly _httpClient = inject(HttpClient)
  private readonly _apiUrl = `${environment.apiUrl}/seats`

  getSeatsByEvent(eventId: number): Observable<Seat[]> {
    return this._httpClient.get<Seat[]>(`${this._apiUrl}?eventId=${eventId}`)
  }
}
