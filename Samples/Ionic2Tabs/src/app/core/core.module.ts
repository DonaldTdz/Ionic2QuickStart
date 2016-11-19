import { ModuleWithProviders, NgModule, Component,Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular';

/* core components */

/* core pages */
import { AboutPage } from '../../pages/about/about';
import { ContactPage } from '../../pages/contact/contact';
import { HomePage } from '../../pages/home/home';
import { TabsPage } from '../../pages/tabs/tabs';

/* core services */

@NgModule({
    imports: [CommonModule,IonicModule],
    declarations: [
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage],
    entryComponents: [
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage],
    exports: [],
    providers: []
})
export class CoreModule {
}
