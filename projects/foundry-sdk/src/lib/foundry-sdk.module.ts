import { NgModule } from '@angular/core';
import { WorkspaceZoneComponent } from './components/workspace-zone/workspace-zone.component';
import { WorkspaceWrapperComponent } from './components/workspace-wrapper/workspace-wrapper.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ListComponent } from './components/list/list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TreeComponent } from './components/tree/tree.component';


@NgModule({
    declarations: [
        WorkspaceZoneComponent,
        WorkspaceWrapperComponent,
        AccordionComponent,
        ListComponent,
        NavigationComponent,
        TabsComponent,
        TreeComponent,
    ],
    imports: [
    ],
    exports: [
        WorkspaceZoneComponent,
        WorkspaceWrapperComponent,
        AccordionComponent,
        ListComponent,
        NavigationComponent,
        TabsComponent,
        TreeComponent,
    ]
})
export class FoundrySdkModule { }
