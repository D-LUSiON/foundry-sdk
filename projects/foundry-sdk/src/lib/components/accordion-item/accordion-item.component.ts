import { Component, OnInit, Input, SimpleChanges, OnChanges, ContentChild, TemplateRef, HostBinding } from '@angular/core';

@Component({
    selector: 'fnd-accordion-item',
    templateUrl: './accordion-item.component.html',
    styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent implements OnInit, OnChanges {

    @ContentChild('icon_opened', { static: false }) icon_opened_tpl: TemplateRef<any>;
    @ContentChild('icon_closed', { static: false }) icon_closed_tpl: TemplateRef<any>;

    @Input() heading: string = '';
    @Input() opened: boolean = false;
    @Input() icon_opened: string = '';
    @Input() icon_closed: string = '';
    @Input() icon_position: 'front' | 'back' = 'front';

    heading_class: string = this.icon_closed;

    @HostBinding('class') host_opened = this.opened ? 'fnd-opened' : '';

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.host_opened = this.opened ? 'fnd-opened' : '';
    }

    toggleOpened() {
        this.opened = !this.opened;
        this.host_opened = this.opened ? 'fnd-opened' : '';
    }

}
