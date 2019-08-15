import { Component, OnInit, Input, ElementRef, Renderer2, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { ResizerEventsService } from '../../tools/resizer-events.service';

@Component({
    selector: 'fnd-workspace-wrapper',
    template: '<ng-content></ng-content>',
    styleUrls: ['./workspace-wrapper.component.scss']
})
export class WorkspaceWrapperComponent implements OnInit, OnChanges {

    @Input() rows: Array<string> = [];
    @Input() columns: Array<string> = [];
    @Input() areas: Array<Array<string>> = [];
    @Input() padding: string = '';
    @Input() theme: string = 'light';
    @Input() restore_state: boolean = true;

    private _rows_initial: Array<string> = [];
    private _cols_initial: Array<string> = [];

    @HostBinding('class') host_theme_class = `workspace-theme-${this.theme}`;

    constructor(
        private _el: ElementRef,
        private _renderer: Renderer2,
        private _resizeService: ResizerEventsService,
    ) {
        this._resizeService.emitter.subscribe((e: {
            zone: string,
            resize: 'h' | 'v',
            handle: 'top' | 'right' | 'bottom' | 'left',
            handle_width: number,
            event: MouseEvent,
            element_position: DOMRect,
        }) => {
            if (e.resize === 'h') {
                let idx = -1;
                this.areas.forEach(area_row => {
                    if (idx === -1) {
                        idx = area_row.findIndex(area => area === e.zone);
                    }
                });
                if (e.handle === 'right') {
                    this.columns[idx] = `${e.event.pageX - e.element_position.left + e.handle_width}px`;
                } else if (e.handle === 'left') {
                    this.columns[idx] = `${window.outerWidth - e.event.pageX}px`;
                }
                this._setAreasStyle();
            } else if (e.resize === 'v') {
                let idx = -1;
                this.areas.forEach((area_row, i) => {
                    if (area_row.includes(e.zone)) {
                        idx = i;
                    }
                });

                if (e.handle === 'top') {
                    this.rows[idx] = `${e.element_position.bottom - e.event.pageY}px`;
                } else if (e.handle === 'bottom') {
                    this.rows[idx] = `${e.event.pageY + e.handle_width}px`;
                }
                this._setAreasStyle();
            }
        });
    }

    ngOnInit() {
        if (this.restore_state) {
            this._rows_initial = this.rows;
            this._cols_initial = this.columns;
            if (localStorage.getItem('wrapper:rows')) {
                this.rows = JSON.parse(localStorage.getItem('wrapper:rows'));
            }
            if (localStorage.getItem('wrapper:columns')) {
                this.columns = JSON.parse(localStorage.getItem('wrapper:columns'));
            }
        }
        this._setAreasStyle();
        this._renderer.addClass(document.querySelector('body'), `workspace-theme-${this.theme}`);
        this._renderer.setAttribute(document.querySelector('body'), 'colorTheme', this.theme);
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.host_theme_class = `workspace-theme-${this.theme}`;
        this._renderer.addClass(document.querySelector('body'), `workspace-theme-${this.theme}`);
        this._renderer.setAttribute(document.querySelector('body'), 'colorTheme', this.theme);
        if (this.restore_state) {
            this._rows_initial = this.rows;
            this._cols_initial = this.columns;
            if (localStorage.getItem('wrapper:rows')) {
                this.rows = JSON.parse(localStorage.getItem('wrapper:rows'));
            }
            if (localStorage.getItem('wrapper:columns')) {
                this.columns = JSON.parse(localStorage.getItem('wrapper:columns'));
            }
        }
        this._setAreasStyle();
    }

    private _setAreasStyle() {
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-rows', this.rows.join(' '));
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-columns', this.columns.join(' '));
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-areas', this.areas.map(x => `"${x.join(' ')}"`).join(' '));

        if (this.restore_state) {
            localStorage.setItem('wrapper:rows', JSON.stringify(this.rows));
            localStorage.setItem('wrapper:columns', JSON.stringify(this.columns));
        }
    }

}
