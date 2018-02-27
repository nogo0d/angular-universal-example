import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThankYouComponent } from './thank-you.component';


@NgModule({
    declarations: [ThankYouComponent],
    imports: [
        RouterModule.forChild([
            { path: '', component: ThankYouComponent, pathMatch: 'full' }
        ])
    ]
})
export class ThankYouModule { }
