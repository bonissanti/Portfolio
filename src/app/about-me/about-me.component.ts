import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/button/button.component";

@Component({
  standalone: true,
  selector: 'app-about-me',
  imports: [ButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
