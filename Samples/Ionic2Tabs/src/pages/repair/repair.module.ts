import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { IonicModule } from 'ionic-angular';

import { RepairPage } from './repair';
import { RepairDetailPage } from './repair-detail';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [],
    declarations: [RepairPage, RepairDetailPage],
    entryComponents: [RepairPage, RepairDetailPage],
    providers: [],
})
export class RepairModule { }

export { RepairPage } from './repair';
export { RepairDetailPage } from './repair-detail';