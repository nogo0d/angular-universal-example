import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-thank-you',
    templateUrl: './thank-you.component.html',
    styles: []
})
export class ThankYouComponent implements OnInit {
    translationService: TranslateService;

    constructor(private meta: Meta, private titleService: Title, translate: TranslateService) {
        this.translationService = translate;

        console.log('LANGUAGE ON THANK-YOU');
        console.log(this.translationService.currentLang);


        this.meta.addTags([
            { name: 'description', content: 'Thank you page description.' },
            { name: 'keywords', content: 'Thank you page keywords.' }
        ]);
        this.titleService.setTitle('Thank you page title.');
        /*
        this.translationService.get('thank-you-message').subscribe((res: string) => {
            this.titleService.setTitle('Thank you page title.' + res);
        });
        */
    }

    ngOnInit() {

        // console.log(this.translationService);

        this.translationService.get('thank-you-message').subscribe((res: string) => {
            console.log(res);
        });
    }
}
