import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  showPopup: boolean = false

  onClickOpen(request: any) {
    this.showPopup = true;
  }

  onClickClose(request: any) {
    this.showPopup = false;
  }
}
