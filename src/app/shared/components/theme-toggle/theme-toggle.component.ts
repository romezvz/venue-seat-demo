import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { ThemeService } from '@core/services/theme.service'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  standalone: true,
  selector: 'rz-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  imports: [CommonModule, TranslateModule],
  providers: [TranslateService, ThemeService]
})
export class ThemeToggleComponent {
  // Dependency injection for services
  private readonly _themeService = inject(ThemeService)

  constructor() {
    this._themeService.initTheme()
  }

  /**
   * Toggles the application's theme between dark and light mode.
   */
  toggleTheme() {
    this._themeService.toggleTheme()
  }
}
