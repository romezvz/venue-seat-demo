import { ComponentFixture, TestBed } from '@angular/core/testing'

import { provideHttpClient } from '@angular/common/http'
import { EventService } from '@app/core/services/event.service'
import { TranslateModule } from '@ngx-translate/core'
import { EventListComponent } from './event-list.component'

describe('EventListComponent', () => {
  let component: EventListComponent
  let fixture: ComponentFixture<EventListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventListComponent, TranslateModule.forRoot()],
      providers: [EventService, provideHttpClient()]
    }).compileComponents()

    fixture = TestBed.createComponent(EventListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
