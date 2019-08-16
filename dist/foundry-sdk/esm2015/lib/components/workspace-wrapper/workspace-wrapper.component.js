/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
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
                    this.columns[idx] = `${window.innerWidth - e.event.pageX + (e.handle_width / 2)}px`;
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
                    console.log(`e.resizer_position.top: ${e.resizer_position.top}: e.element_position.bottom: ${e.element_position.bottom}`);
                    this.rows[idx] = `${(e.resizer_position.top - e.element_position.top) + (e.handle_width / 2)}px`;
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
        this._renderer.setAttribute(document.querySelector('body'), 'colorTheme', this.theme);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    restore_state: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRyeS1zZGsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93b3Jrc3BhY2Utd3JhcHBlci93b3Jrc3BhY2Utd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxvQkFBb0IsRUFBZSxNQUFNLG9DQUFvQyxDQUFDO0FBT3ZGLE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQWFsQyxZQUNZLEdBQWUsRUFDZixTQUFvQixFQUNwQixjQUFvQztRQUZwQyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFkdkMsU0FBSSxHQUFrQixFQUFFLENBQUM7UUFDekIsWUFBTyxHQUFrQixFQUFFLENBQUM7UUFDNUIsVUFBSyxHQUF5QixFQUFFLENBQUM7UUFDakMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixVQUFLLEdBQVcsT0FBTyxDQUFDO1FBQ3hCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRS9CLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUNsQyxrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFRdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBYyxFQUFFLEVBQUU7WUFDckQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTs7b0JBQ2QsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7Z0JBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzFCLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFFO3dC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QUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFMUgsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0wsQ0FBQzs7O1lBaEdKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxRQUFRLEVBQUUsMkJBQTJCOzthQUV4Qzs7OztZQVBrQyxVQUFVO1lBQUUsU0FBUztZQUMvQyxvQkFBb0I7OzttQkFTeEIsS0FBSztzQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLOzRCQUNMLEtBQUs7Ozs7SUFMTix5Q0FBa0M7O0lBQ2xDLDRDQUFxQzs7SUFDckMsMENBQTBDOztJQUMxQyw0Q0FBOEI7O0lBQzlCLDBDQUFpQzs7SUFDakMsa0RBQXVDOzs7OztJQUV2QyxrREFBMEM7Ozs7O0lBQzFDLGtEQUEwQzs7Ozs7SUFJdEMsd0NBQXVCOzs7OztJQUN2Qiw4Q0FBNEI7Ozs7O0lBQzVCLG1EQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlc2l6ZXJFdmVudHNTZXJ2aWNlLCBSZXNpemVFdmVudCB9IGZyb20gJy4uLy4uL3Rvb2xzL3Jlc2l6ZXItZXZlbnRzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZuZC13b3Jrc3BhY2Utd3JhcHBlcicsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICBzdHlsZVVybHM6IFsnLi93b3Jrc3BhY2Utd3JhcHBlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVdyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSByb3dzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgQElucHV0KCkgY29sdW1uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIEBJbnB1dCgpIGFyZWFzOiBBcnJheTxBcnJheTxzdHJpbmc+PiA9IFtdO1xuICAgIEBJbnB1dCgpIHBhZGRpbmc6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgPSAnbGlnaHQnO1xuICAgIEBJbnB1dCgpIHJlc3RvcmVfc3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBfcm93c19pbml0aWFsOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSBfY29sc19pbml0aWFsOiBBcnJheTxzdHJpbmc+ID0gW107XG5cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogUmVzaXplckV2ZW50c1NlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVNlcnZpY2UuZW1pdHRlci5zdWJzY3JpYmUoKGU6IFJlc2l6ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5yZXNpemUgPT09ICdoJykge1xuICAgICAgICAgICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFzLmZvckVhY2goYXJlYV9yb3cgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gYXJlYV9yb3cuZmluZEluZGV4KGFyZWEgPT4gYXJlYSA9PT0gZS56b25lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChlLmhhbmRsZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnNbaWR4XSA9IGAke2UuZXZlbnQucGFnZVggLSBlLmVsZW1lbnRfcG9zaXRpb24ubGVmdCArIGUuaGFuZGxlX3dpZHRofXB4YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuaGFuZGxlID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zW2lkeF0gPSBgJHt3aW5kb3cuaW5uZXJXaWR0aCAtIGUuZXZlbnQucGFnZVggKyAoZS5oYW5kbGVfd2lkdGggLyAyKX1weGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEFyZWFzU3R5bGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5yZXNpemUgPT09ICd2Jykge1xuICAgICAgICAgICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgICAgICAgICB0aGlzLmFyZWFzLmZvckVhY2goKGFyZWFfcm93LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcmVhX3Jvdy5pbmNsdWRlcyhlLnpvbmUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHggPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZS5oYW5kbGUgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93c1tpZHhdID0gYCR7ZS5lbGVtZW50X3Bvc2l0aW9uLmJvdHRvbSAtIGUuZXZlbnQucGFnZVl9cHhgO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5oYW5kbGUgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBlLnJlc2l6ZXJfcG9zaXRpb24udG9wOiAke2UucmVzaXplcl9wb3NpdGlvbi50b3B9OiBlLmVsZW1lbnRfcG9zaXRpb24uYm90dG9tOiAke2UuZWxlbWVudF9wb3NpdGlvbi5ib3R0b219YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzW2lkeF0gPSBgJHsoZS5yZXNpemVyX3Bvc2l0aW9uLnRvcCAtIGUuZWxlbWVudF9wb3NpdGlvbi50b3ApICsgKGUuaGFuZGxlX3dpZHRoIC8gMil9cHhgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRBcmVhc1N0eWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXN0b3JlX3N0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzX2luaXRpYWwgPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB0aGlzLl9jb2xzX2luaXRpYWwgPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6cm93cycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpyb3dzJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOmNvbHVtbnMnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6Y29sdW1ucycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXRBcmVhc1N0eWxlKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdjb2xvclRoZW1lJywgdGhpcy50aGVtZSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnY29sb3JUaGVtZScsIHRoaXMudGhlbWUpO1xuICAgICAgICBpZiAodGhpcy5yZXN0b3JlX3N0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzX2luaXRpYWwgPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB0aGlzLl9jb2xzX2luaXRpYWwgPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6cm93cycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpyb3dzJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOmNvbHVtbnMnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6Y29sdW1ucycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXRBcmVhc1N0eWxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0QXJlYXNTdHlsZSgpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2dyaWQtdGVtcGxhdGUtcm93cycsIHRoaXMucm93cy5qb2luKCcgJykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJywgdGhpcy5jb2x1bW5zLmpvaW4oJyAnKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdncmlkLXRlbXBsYXRlLWFyZWFzJywgdGhpcy5hcmVhcy5tYXAoeCA9PiBgXCIke3guam9pbignICcpfVwiYCkuam9pbignICcpKTtcblxuICAgICAgICBpZiAodGhpcy5yZXN0b3JlX3N0YXRlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd3JhcHBlcjpyb3dzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5yb3dzKSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd3JhcHBlcjpjb2x1bW5zJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2x1bW5zKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==