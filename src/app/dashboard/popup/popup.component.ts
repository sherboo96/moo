import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IRequest } from '../../interfaces/irequest';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  popupContent = "هذا المحتوى في البوب ​​آب.";
  request: IRequest = {requestNumber: "أحمد سالم",
    Ttype: "ترخيص مزاولة",
    signal: "167882",
    bookNumber: "36232391",
    requesterName: "أحمد سالم",
    requesterCivilNo: "296029203631",
    companyName: "الشركة العالمية للخدمات البترولية",
    kuwaitIn: "18-06-2024",
    centeralNumber: "10133198434",
    orgCivilNo: "3566343",
    MtNo: "2014/2015",
    TNo: "5", 
    EN: "219930004",
    address: "العاصمة - القبلة - قطة ٠١٣ - شارع فهد السالم",
    createdOn: "06-06-2024"}

  @Input() showPopup: boolean = false;
  @Output() closePopup = new EventEmitter<boolean>();

  onClosePopup() {
    this.showPopup = false;
    this.closePopup.emit(false);
  }
}
