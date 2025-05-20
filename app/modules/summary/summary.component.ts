import { CommonModule } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'
import { SelectionService } from '@app/core/services/selection.service'

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {
  selection = inject(SelectionService)

  selectionKeys = () => Object.keys(this.selection.selections).map((k) => +k)

  getSelectedSeatIds(eventId: number): string[] {
    return this.selection.selections[eventId]?.seats.map((s) => s.id) ?? []
  }

  ngOnInit(): void {
    console.log(this.selection)
    console.log(this.selectionKeys())
  }
}
