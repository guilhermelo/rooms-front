import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './header/app-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserService } from './user/user.service';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
    declarations: [
        AppHeaderComponent,
        NotificationComponent
    ],
    exports: [
        AppHeaderComponent,
        NotificationComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [UserService]
})
export class CoreModule {

}
