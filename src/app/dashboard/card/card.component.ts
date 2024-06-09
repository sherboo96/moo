import { Component, EventEmitter, Output } from '@angular/core';
import { IRequest } from '../../interfaces/irequest'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Output() openPopup = new EventEmitter<boolean>;
 

  showPopup() {

  }

  showRequest(index: number) {
    this.openPopup.emit(true);
  }
}
