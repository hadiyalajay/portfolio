import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../ui-components/header/header.component';
import { FooterComponent } from '../ui-components/footer/footer.component';
import { IonCardContent, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: true,
  imports: [IonContent, IonCardContent, HeaderComponent, FooterComponent],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
