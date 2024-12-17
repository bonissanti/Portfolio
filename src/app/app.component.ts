import { Component } from '@angular/core';
import { ButtonComponent } from "./shared/button/button.component";
import { CardsComponent } from "./shared/cards/cards.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, HeaderComponent, CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
