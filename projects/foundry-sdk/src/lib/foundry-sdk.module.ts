import { NgModule } from '@angular/core';
import { WorkspaceZoneComponent } from './components/workspace-zone/workspace-zone.component';
import { WorkspaceWrapperComponent } from './components/workspace-wrapper/workspace-wrapper.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TreeComponent } from './components/tree/tree.component';
import { ItemContentComponent } from './components/item-content/item-content.component';
import { IconComponent } from './components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { TabItemComponent } from './components/tab-item/tab-item.component';


@NgModule({
    declarations: [
        ItemContentComponent,
        IconComponent,
        ListItemComponent,
        ListComponent,
        WorkspaceZoneComponent,
        WorkspaceWrapperComponent,
        AccordionComponent,
        AccordionItemComponent,
        NavigationComponent,
        TabsComponent,
        TreeComponent,
        TabItemComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ItemContentComponent,
        IconComponent,
        ListItemComponent,
        ListComponent,
        WorkspaceZoneComponent,
        WorkspaceWrapperComponent,
        AccordionComponent,
        AccordionItemComponent,
        NavigationComponent,
        TabsComponent,
        TreeComponent,
    ]
})
export class FoundrySdkModule { }
