import { Component, OnInit, Input, HostBinding, OnChanges, Output, EventEmitter } from '@angular/core';
import { Tab } from '../../models/tab';

@Component({
    selector: 'fnd-tab-item',
    templateUrl: './tab-item.component.html',
    styleUrls: ['./tab-item.component.scss']
})
export class TabItemComponent implements OnInit, OnChanges {

    @Input() tab: Tab = new Tab();
    @Input() active: boolean = false;

    @Output() tabClicked: EventEmitter<any> = new EventEmitter();
    @Output() tabRemoved: EventEmitter<any> = new EventEmitter();

    @HostBinding('class.active') active_cls = this.active;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(): void {
        console.log('changed', this.tab);

        this.active_cls = this.tab.active;
    }

    tabClick() {
        this.tabClicked.emit();
    }

    tabRemove() {
        this.tabRemoved.emit();
    }

}
