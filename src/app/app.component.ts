import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { LangService } from '@core/services/lang.service'
import { ThemeService } from '@core/services/theme.service'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  standalone: true,
  selector: 'rz-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, TranslateModule],
  providers: [TranslateService, ThemeService, LangService]
})
export class AppComponent {
  // Dependency injection for services
  private readonly _themeService = inject(ThemeService)
  private readonly _langService = inject(LangService)

  constructor() {
    this._themeService.initTheme()
    this._langService.initLang()
  }

  /**
   * Toggles the application's theme between dark and light mode.
   */
  toggleTheme() {
    this._themeService.toggleTheme()
  }

  /**
   * Toggles the application's Lang between es and en.
   */
  toggleLang() {
    this._langService.toggleLang()
  }
}
