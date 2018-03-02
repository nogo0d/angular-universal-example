import { Injectable } from '@angular/core';

@Injectable()
export class RequestService {
    private locale = 'pt-PT';

    setData(locale: string) {
        this.locale = locale;
    }

    getData() {
        return {
            locale: this.locale
        };
    }
}
