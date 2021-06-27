import { Component } from '@angular/core';

//Component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  name = 'Eyad';
}
