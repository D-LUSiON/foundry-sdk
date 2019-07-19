import { NgModule } from '@angular/core';
import { LayoutZoneComponent } from './components/layout-zone/layout-zone.component';
import { LayoutWrapperComponent } from './components/layout-wrapper/layout-wrapper.component';


@NgModule({
    declarations: [
        LayoutZoneComponent,
        LayoutWrapperComponent,
    ],
    imports: [
    ],
    exports: [
        LayoutZoneComponent,
        LayoutWrapperComponent,
    ]
})
export class FoundrySdkModule { }
