import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SelectionService } from '@app/core/services/selection.service'
import { TranslateModule } from '@ngx-translate/core'
import { SummaryComponent } from './summary.component'

describe('SummaryComponent', () => {
  let component: SummaryComponent
  let fixture: ComponentFixture<SummaryComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryComponent, TranslateModule.forRoot()],
      providers: [SelectionService]
    }).compileComponents()

    fixture = TestBed.createComponent(SummaryComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
