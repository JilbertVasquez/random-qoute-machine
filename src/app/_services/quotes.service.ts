import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { QuoteDto } from "../_dtos/quote-dto";

@Injectable({
    providedIn: "root"
})
export class QuotesService {
    private _url = "https://gist.githubusercontent.com/shreyasminocha/7d5dedafc1fe158f82563c1223855177/raw/325d51aca7165b2498971afcff9bed286a52dc0e/quotes.json";
    listOfQuotes = signal<QuoteDto[]>([]);

    constructor(private _http: HttpClient) { }

    async getQuotes() {
        return await lastValueFrom(this._http.get<QuoteDto[]>(this._url));
    }

    async loadQuotes() {
        const listOfQuotes = await this.getQuotes();
        this.listOfQuotes.set(listOfQuotes);
    }
}
