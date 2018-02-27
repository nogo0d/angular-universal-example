import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-thank-you',
    templateUrl: './thank-you.component.html',
    styles: []
})
export class ThankYouComponent implements OnInit {

    constructor(private meta: Meta, private titleService: Title) {

        this.meta.addTags([
            { name: 'description', content: 'Thank you page description.' },
            { name: 'keywords', content: 'Thank you page keywords.' }
        ]);
        this.titleService.setTitle('Thank you page title.');
    }

    ngOnInit() {
        console.log('sad');
    }
}
