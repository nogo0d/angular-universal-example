import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `<div>{{ 'HELLO' | translate:param }}</div><router-outlet></router-outlet>`,
    styles: []
})
export class AppComponent {
    param = { value: 'world' };

    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en-US');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('pt-PT');

        translate.get('HELLO', {value: 'world'}).subscribe((res: string) => {
            console.log(res);
        });
    }
}
