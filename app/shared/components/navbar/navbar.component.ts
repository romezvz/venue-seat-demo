import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component'
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component'

@Component({
  standalone: true,
  selector: 'rz-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [TranslateModule, ThemeToggleComponent, LanguageSwitcherComponent, RouterLink]
})
export class NavbarComponent {}
