import { Component, OnInit, signal } from '@angular/core';
import { QuoteDto } from '../_dtos/quote-dto';
import { QuotesService } from '../_services/quotes.service';

@Component({
    selector: 'app-quotes',
    standalone: true,
    imports: [],
    templateUrl: './quotes.component.html',
    styleUrl: './quotes.component.css',
})
export class QuotesComponent implements OnInit {
    listOfQuotes = signal<QuoteDto[]>([]);
    quote: QuoteDto | null = null;
    colorList: string[] = [
        '#C74B16', // Dark Red-Orange (instead of #FF5733)
        '#1B5B32', // Dark Forest Green (instead of #33FF57)
        '#002A5B', // Dark Royal Blue (instead of #3357FF)
        '#9B1B59', // Dark Hot Pink (instead of #FF33A1)
        '#E65100', // Darker Orange (instead of #FF8C00)
        '#006400', // Dark Green (instead of #32CD32)
        '#B8860B', // Dark Gold (instead of #FFD700)
        '#B53A3A', // Dark Tomato Red (instead of #FF6347)
        '#6A1B9A', // Dark Blue Violet (instead of #8A2BE2)
        '#4E9F3D'  // Dark Chartreuse (instead of #7FFF00)
    ];
    currentColor: string = this._getRandomColor();

    constructor(private _quotesService: QuotesService) { };

    async ngOnInit() {
        try {
            await this._quotesService.loadQuotes();
            this.listOfQuotes.set(this._quotesService.listOfQuotes());
            this.quote = this._getQuote();
        } catch (error) {
            console.error('Error loading quotes:', error);
        }
    }

    getNewQuote() {
        this.quote = this._getQuote();
        this.currentColor = this._getRandomColor();
    }

    private _getQuote() {
        const quotes = this.listOfQuotes();
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    private _getRandomColor() {
        const randomIndex = Math.floor(Math.random() * this.colorList.length);
        return this.colorList[randomIndex];
    }
}
