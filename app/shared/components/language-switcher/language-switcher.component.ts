import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { LangService } from '@core/services/lang.service'
import { TranslateModule, TranslateService } from '@ngx-translate/core'

@Component({
  standalone: true,
  selector: 'rz-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  imports: [CommonModule, TranslateModule],
  providers: [TranslateService, LangService]
})
export class LanguageSwitcherComponent {
  // Dependency injection for services
  private readonly _langService = inject(LangService)

  constructor() {
    this._langService.initLang()
  }

  /**
   * Toggles the application's Lang between es and en.
   */
  toggleLang() {
    this._langService.toggleLang()
  }
}
