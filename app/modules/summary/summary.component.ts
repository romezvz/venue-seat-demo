import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { SelectionService } from '@app/core/services/selection.service'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './summary.component.html'
})
export class SummaryComponent {
  // Dependency injection for services
  selectionService = inject(SelectionService)

  /**
   * Returns the event IDs with selected seats
   */
  selectionKeys = () => Object.keys(this.selectionService.selections).map((k) => +k)

  /**
   * Returns selected seat IDs for a given event.
   */
  getSelectedSeatIds(eventId: number): string[] {
    return this.selectionService.selections[eventId]?.seats.map((s) => s.id) ?? []
  }

  /**
   * Simulate purchase and clear selection
   */
  confirmPurchase() {
    this.selectionService.clearAll()
    alert('Compra simulada con éxito ✅')
  }
}
