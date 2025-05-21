import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { NavbarComponent } from '@shared/components/navbar/navbar.component'

@Component({
  standalone: true,
  selector: 'rz-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, TranslateModule, NavbarComponent],
  providers: [TranslateService]
})
export class AppComponent {}
