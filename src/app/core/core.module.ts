import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './header/app-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from './user/user.service';

@NgModule({
    declarations: [AppHeaderComponent],
    exports: [AppHeaderComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [UserService]
})
export class CoreModule {

}
