/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { ResizerEventsService } from '../../tools/resizer-events.service';
export class WorkspaceWrapperComponent {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _resizeService
     */
    constructor(_el, _renderer, _resizeService) {
        this._el = _el;
        this._renderer = _renderer;
        this._resizeService = _resizeService;
        this.rows = [];
        this.columns = [];
        this.areas = [];
        this.padding = '';
        this.theme = 'light';
        this.restore_state = true;
        this._rows_initial = [];
        this._cols_initial = [];
        this.host_theme_class = `workspace-theme-${this.theme}`;
        this._resizeService.emitter.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            if (e.resize === 'h') {
                /** @type {?} */
                let idx = -1;
                this.areas.forEach((/**
                 * @param {?} area_row
                 * @return {?}
                 */
                area_row => {
                    if (idx === -1) {
                        idx = area_row.findIndex((/**
                         * @param {?} area
                         * @return {?}
                         */
                        area => area === e.zone));
                    }
                }));
                if (e.handle === 'right') {
                    this.columns[idx] = `${e.event.pageX - e.element_position.left + e.handle_width}px`;
                }
                else if (e.handle === 'left') {
                    this.columns[idx] = `${window.outerWidth - e.event.pageX}px`;
                }
                this._setAreasStyle();
            }
            else if (e.resize === 'v') {
                /** @type {?} */
                let idx = -1;
                this.areas.forEach((/**
                 * @param {?} area_row
                 * @param {?} i
                 * @return {?}
                 */
                (area_row, i) => {
                    if (area_row.includes(e.zone)) {
                        idx = i;
                    }
                }));
                if (e.handle === 'top') {
                    this.rows[idx] = `${e.element_position.bottom - e.event.pageY}px`;
                }
                else if (e.handle === 'bottom') {
                    this.rows[idx] = `${e.event.pageY + e.handle_width}px`;
                }
                this._setAreasStyle();
            }
        }));
    }
    /**
     * @return {?}
     */
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
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    /**
     * @private
     * @return {?}
     */
    _setAreasStyle() {
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-rows', this.rows.join(' '));
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-columns', this.columns.join(' '));
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-areas', this.areas.map((/**
         * @param {?} x
         * @return {?}
         */
        x => `"${x.join(' ')}"`)).join(' '));
        if (this.restore_state) {
            localStorage.setItem('wrapper:rows', JSON.stringify(this.rows));
            localStorage.setItem('wrapper:columns', JSON.stringify(this.columns));
        }
    }
}
WorkspaceWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'fnd-workspace-wrapper',
                template: '<ng-content></ng-content>',
                styles: ["::ng-deep body{margin:0;padding:0;box-sizing:border-box}:host-context(fnd-workspace-wrapper){position:fixed;display:-ms-grid;display:grid;width:100%;height:100%;background-color:var(--wrapper-bg-color);color:var(--wrapper-text-color)}"]
            }] }
];
/** @nocollapse */
WorkspaceWrapperComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ResizerEventsService }
];
WorkspaceWrapperComponent.propDecorators = {
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    areas: [{ type: Input }],
    padding: [{ type: Input }],
    theme: [{ type: Input }],
    restore_state: [{ type: Input }],
    host_theme_class: [{ type: HostBinding, args: ['class',] }]
};
if (false) {
    /** @type {?} */
    WorkspaceWrapperComponent.prototype.rows;
    /** @type {?} */
    WorkspaceWrapperComponent.prototype.columns;
    /** @type {?} */
    WorkspaceWrapperComponent.prototype.areas;
    /** @type {?} */
    WorkspaceWrapperComponent.prototype.padding;
    /** @type {?} */
    WorkspaceWrapperComponent.prototype.theme;
    /** @type {?} */
    WorkspaceWrapperComponent.prototype.restore_state;
    /**
     * @type {?}
     * @private
     */
    WorkspaceWrapperComponent.prototype._rows_initial;
    /**
     * @type {?}
     * @private
     */
    WorkspaceWrapperComponent.prototype._cols_initial;
    /** @type {?} */
    WorkspaceWrapperComponent.prototype.host_theme_class;
    /**
     * @type {?}
     * @private
     */
    WorkspaceWrapperComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    WorkspaceWrapperComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    WorkspaceWrapperComponent.prototype._resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRyeS1zZGsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93b3Jrc3BhY2Utd3JhcHBlci93b3Jrc3BhY2Utd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU8xRSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7SUFjbEMsWUFDWSxHQUFlLEVBQ2YsU0FBb0IsRUFDcEIsY0FBb0M7UUFGcEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBZnZDLFNBQUksR0FBa0IsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLFVBQUssR0FBeUIsRUFBRSxDQUFDO1FBQ2pDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUUvQixrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBRXBCLHFCQUFnQixHQUFHLG1CQUFtQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFPckUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FPdEMsRUFBRSxFQUFFO1lBQ0QsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTs7b0JBQ2QsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7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QyxrREFBMEM7Ozs7O0lBQzFDLGtEQUEwQzs7SUFFMUMscURBQXlFOzs7OztJQUdyRSx3Q0FBdUI7Ozs7O0lBQ3ZCLDhDQUE0Qjs7Ozs7SUFDNUIsbURBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIEhvc3RCaW5kaW5nLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc2l6ZXJFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdG9vbHMvcmVzaXplci1ldmVudHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZm5kLXdvcmtzcGFjZS13cmFwcGVyJyxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICAgIHN0eWxlVXJsczogWycuL3dvcmtzcGFjZS13cmFwcGVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlV3JhcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIHJvd3M6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBASW5wdXQoKSBjb2x1bW5zOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgQElucHV0KCkgYXJlYXM6IEFycmF5PEFycmF5PHN0cmluZz4+ID0gW107XG4gICAgQElucHV0KCkgcGFkZGluZzogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgdGhlbWU6IHN0cmluZyA9ICdsaWdodCc7XG4gICAgQElucHV0KCkgcmVzdG9yZV9zdGF0ZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwcml2YXRlIF9yb3dzX2luaXRpYWw6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIF9jb2xzX2luaXRpYWw6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MnKSBob3N0X3RoZW1lX2NsYXNzID0gYHdvcmtzcGFjZS10aGVtZS0ke3RoaXMudGhlbWV9YDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogUmVzaXplckV2ZW50c1NlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVNlcnZpY2UuZW1pdHRlci5zdWJzY3JpYmUoKGU6IHtcbiAgICAgICAgICAgIHpvbmU6IHN0cmluZyxcbiAgICAgICAgICAgIHJlc2l6ZTogJ2gnIHwgJ3YnLFxuICAgICAgICAgICAgaGFuZGxlOiAndG9wJyB8ICdyaWdodCcgfCAnYm90dG9tJyB8ICdsZWZ0JyxcbiAgICAgICAgICAgIGhhbmRsZV93aWR0aDogbnVtYmVyLFxuICAgICAgICAgICAgZXZlbnQ6IE1vdXNlRXZlbnQsXG4gICAgICAgICAgICBlbGVtZW50X3Bvc2l0aW9uOiBET01SZWN0LFxuICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5yZXNpemUgPT09ICdoJykge1xuICAgICAgICAgICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFzLmZvckVhY2goYXJlYV9yb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gYXJlYV9yb3cuZmluZEluZGV4KGFyZWEgPT4gYXJlYSA9PT0gZS56b25lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChlLmhhbmRsZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnNbaWR4XSA9IGAke2UuZXZlbnQucGFnZVggLSBlLmVsZW1lbnRfcG9zaXRpb24ubGVmdCArIGUuaGFuZGxlX3dpZHRofXB4YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuaGFuZGxlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zW2lkeF0gPSBgJHt3aW5kb3cub3V0ZXJXaWR0aCAtIGUuZXZlbnQucGFnZVh9cHhgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRBcmVhc1N0eWxlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUucmVzaXplID09PSAndicpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhcy5mb3JFYWNoKChhcmVhX3JvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJlYV9yb3cuaW5jbHVkZXMoZS56b25lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGUuaGFuZGxlID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3NbaWR4XSA9IGAke2UuZWxlbWVudF9wb3NpdGlvbi5ib3R0b20gLSBlLmV2ZW50LnBhZ2VZfXB4YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuaGFuZGxlID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3NbaWR4XSA9IGAke2UuZXZlbnQucGFnZVkgKyBlLmhhbmRsZV93aWR0aH1weGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEFyZWFzU3R5bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlc3RvcmVfc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3NfaW5pdGlhbCA9IHRoaXMucm93cztcbiAgICAgICAgICAgIHRoaXMuX2NvbHNfaW5pdGlhbCA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpyb3dzJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOnJvd3MnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6Y29sdW1ucycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpjb2x1bW5zJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldEFyZWFzU3R5bGUoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCBgd29ya3NwYWNlLXRoZW1lLSR7dGhpcy50aGVtZX1gKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ2NvbG9yVGhlbWUnLCB0aGlzLnRoZW1lKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG9zdF90aGVtZV9jbGFzcyA9IGB3b3Jrc3BhY2UtdGhlbWUtJHt0aGlzLnRoZW1lfWA7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgYHdvcmtzcGFjZS10aGVtZS0ke3RoaXMudGhlbWV9YCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdjb2xvclRoZW1lJywgdGhpcy50aGVtZSk7XG4gICAgICAgIGlmICh0aGlzLnJlc3RvcmVfc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3Jvd3NfaW5pdGlhbCA9IHRoaXMucm93cztcbiAgICAgICAgICAgIHRoaXMuX2NvbHNfaW5pdGlhbCA9IHRoaXMuY29sdW1ucztcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpyb3dzJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOnJvd3MnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6Y29sdW1ucycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpjb2x1bW5zJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldEFyZWFzU3R5bGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9zZXRBcmVhc1N0eWxlKCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC10ZW1wbGF0ZS1yb3dzJywgdGhpcy5yb3dzLmpvaW4oJyAnKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdncmlkLXRlbXBsYXRlLWNvbHVtbnMnLCB0aGlzLmNvbHVtbnMuam9pbignICcpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2dyaWQtdGVtcGxhdGUtYXJlYXMnLCB0aGlzLmFyZWFzLm1hcCh4ID0+IGBcIiR7eC5qb2luKCcgJyl9XCJgKS5qb2luKCcgJykpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlc3RvcmVfc3RhdGUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3cmFwcGVyOnJvd3MnLCBKU09OLnN0cmluZ2lmeSh0aGlzLnJvd3MpKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3cmFwcGVyOmNvbHVtbnMnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNvbHVtbnMpKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19