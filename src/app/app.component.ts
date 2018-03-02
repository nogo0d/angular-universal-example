import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RequestService } from '../services/request.service';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    styles: []
})
export class AppComponent {
    param = { value: 'world' };
    translateService: TranslateService;

    constructor(translate: TranslateService, request: RequestService) {
        this.translateService = translate;

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang('en-US');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translateService.use('en-US');

        console.log('AppComponent constructor');
        console.log(this.translateService.currentLang);

        this.translateService.get('HELLO', { value: 'world' }).subscribe((res: string) => {
            console.log(res);
        });
    }

    getLocale(): string {
        return this.translateService.currentLang;
    }
}
