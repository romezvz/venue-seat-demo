import { ComponentFixture, TestBed } from '@angular/core/testing'

import { provideRouter } from '@angular/router'
import { routes } from '@app/app.routes'
import { TranslateModule } from '@ngx-translate/core'
import { NavbarComponent } from './navbar.component'

describe('NavbarComponent', () => {
  let component: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, TranslateModule.forRoot()],
      providers: [provideRouter(routes)]
    }).compileComponents()

    fixture = TestBed.createComponent(NavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
