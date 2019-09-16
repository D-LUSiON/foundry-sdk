import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from '../../models/tab';

@Component({
    selector: 'fnd-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

    @Input() tabs: Tab[] = [];
    @Output() tabsChange: EventEmitter<Tab[]> = new EventEmitter();

    activeTab: Tab;
    active_tab_idx: number;

    constructor() { }

    ngOnInit() {
        if (!this.activeTab) {
            this.activateTab(0);
        }
    }

    activateTab(idx: number) {
        console.log('activateTab', idx);
        if (this.tabs[idx]) {
            this.active_tab_idx = idx;
            this.tabs = this.tabs.map((tab, i) => { tab.active = i === idx; return tab; });
            this.activeTab = this.tabs[idx];
            this.tabs = [...this.tabs];
            this.tabsChange.emit(this.tabs);
        }
    }

    removeTab(idx: number) {
        console.log('removeTab', idx);
        if (this.tabs[idx]) {
            this.tabs = this.tabs.filter((tab, index) => index !== idx);
            if (idx > 0) {
                this.activateTab(idx - 1);
                this.active_tab_idx = idx - 1;
            } else if (this.tabs.length > 0) {
                this.activateTab(0);
                this.active_tab_idx = 0;
            } else {
                this.activeTab = null;
                this.tabsChange.emit(this.tabs);
            }
        }
    }

}
