import { ComponentFixture, TestBed } from '@angular/core/testing'

import { provideHttpClient } from '@angular/common/http'
import { provideRouter } from '@angular/router'
import { routes } from '@app/app.routes'
import { EventService } from '@app/core/services/event.service'
import { SeatService } from '@app/core/services/seat.service'
import { SelectionService } from '@app/core/services/selection.service'
import { TranslateModule } from '@ngx-translate/core'
import { SeatSelectorComponent } from './seat-selector.component'

describe('SeatSelectorComponent', () => {
  let component: SeatSelectorComponent
  let fixture: ComponentFixture<SeatSelectorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatSelectorComponent, TranslateModule.forRoot()],
      providers: [
        SeatService,
        EventService,
        SelectionService,
        provideHttpClient(),
        provideRouter(routes)
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(SeatSelectorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
