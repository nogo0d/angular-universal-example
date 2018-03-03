import { Component, Inject, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';

import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    styles: []
})
export class AppComponent {
    private locale = 'en-US';
    translateService: TranslateService;

    constructor(translate: TranslateService,
        private injector: Injector, @Inject(PLATFORM_ID) private platformId: Object) {

        if (isPlatformServer(this.platformId) && this.injector.get('locale') && this.locale !== this.injector.get('locale')) {
            this.locale = this.injector.get('locale');
        }

        this.translateService = translate;

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translateService.setDefaultLang('en-US');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translateService.use(this.locale);
    }

    getLocale(): string {
        return this.translateService.currentLang;
    }
}
