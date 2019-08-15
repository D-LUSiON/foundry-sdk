import { NgModule } from '@angular/core';
import { WorkspaceZoneComponent } from './components/workspace-zone/workspace-zone.component';
import { WorkspaceWrapperComponent } from './components/workspace-wrapper/workspace-wrapper.component';


@NgModule({
    declarations: [
        WorkspaceZoneComponent,
        WorkspaceWrapperComponent,
    ],
    imports: [
    ],
    exports: [
        WorkspaceZoneComponent,
        WorkspaceWrapperComponent,
    ]
})
export class FoundrySdkModule { }
