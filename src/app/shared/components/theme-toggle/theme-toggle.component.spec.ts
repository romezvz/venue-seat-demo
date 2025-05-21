import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TranslateModule } from '@ngx-translate/core'
import { ThemeToggleComponent } from './theme-toggle.component'

describe('ThemeToggleComponent', () => {
  let component: ThemeToggleComponent
  let fixture: ComponentFixture<ThemeToggleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeToggleComponent, TranslateModule.forRoot()]
    }).compileComponents()

    fixture = TestBed.createComponent(ThemeToggleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
