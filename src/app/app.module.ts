import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'was-vanilla' }),
        RouterModule.forRoot([
            { path: 'thank-you', loadChildren: './pages/thank-you/thank-you.module#ThankYouModule' },
        ]),
        TransferHttpCacheModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
