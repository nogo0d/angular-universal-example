import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThankYouComponent } from './thank-you.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/locales/', '.json');
}

@NgModule({
    declarations: [ThankYouComponent],
    imports: [
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        RouterModule.forChild([
            { path: '', component: ThankYouComponent, pathMatch: 'full' }
        ])
    ]
})
export class ThankYouModule { }
