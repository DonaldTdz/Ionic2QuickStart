import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

/* App Root */
import { MyApp }   from './app.component';

/* Feature Modules */
import { CoreModule }       from './core/core.module';

/* Business Moduels */
import {RepairModule} from '../pages/repair/repair.module';


@NgModule({
  declarations: [MyApp],
  imports: [
    IonicModule.forRoot(MyApp),
    CoreModule,
    RepairModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [ MyApp  ],
  providers: []
})
export class AppModule { }
