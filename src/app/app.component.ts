import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GuitarModule } from "./app.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GuitarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loja-guitarras';
}
