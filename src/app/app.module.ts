import { BrowserModule, makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateBrowserLoader } from '../services/translate-browser-loader.service';
import { RequestService } from '../services/request.service';


export function exportTranslateStaticLoader(http: HttpClient, transferState: TransferState) {
    return new TranslateBrowserLoader('/assets/locales/', '.json', transferState, http);
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'was-vanilla' }),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: exportTranslateStaticLoader,
                deps: [HttpClient, TransferState]
            }
        }
        ),
        RouterModule.forRoot([
            { path: 'thank-you', loadChildren: './pages/thank-you/thank-you.module#ThankYouModule' },
        ], { initialNavigation: 'enabled' }),
        TransferHttpCacheModule,
    ],
    providers: [
        RequestService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
