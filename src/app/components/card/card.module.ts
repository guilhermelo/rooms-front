import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CardComponent, CardListComponent],
    exports: [CardComponent, CardListComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CardModule {

}
