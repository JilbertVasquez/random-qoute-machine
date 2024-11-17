import { Component } from '@angular/core';
import { QuotesComponent } from './quotes/quotes.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [QuotesComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'random-qoute-machine';
}
