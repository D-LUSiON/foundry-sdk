/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { ResizerEventsService } from '../../tools/resizer-events.service';
var WorkspaceWrapperComponent = /** @class */ (function () {
    function WorkspaceWrapperComponent(_el, _renderer, _resizeService) {
        var _this = this;
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
        this.host_theme_class = "workspace-theme-" + this.theme;
        this._resizeService.emitter.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.resize === 'h') {
                /** @type {?} */
                var idx_1 = -1;
                _this.areas.forEach((/**
                 * @param {?} area_row
                 * @return {?}
                 */
                function (area_row) {
                    if (idx_1 === -1) {
                        idx_1 = area_row.findIndex((/**
                         * @param {?} area
                         * @return {?}
                         */
                        function (area) { return area === e.zone; }));
                    }
                }));
                if (e.handle === 'right') {
                    _this.columns[idx_1] = e.event.pageX - e.element_position.left + e.handle_width + "px";
                }
                else if (e.handle === 'left') {
                    _this.columns[idx_1] = window.outerWidth - e.event.pageX + "px";
                }
                _this._setAreasStyle();
            }
            else if (e.resize === 'v') {
                /** @type {?} */
                var idx_2 = -1;
                _this.areas.forEach((/**
                 * @param {?} area_row
                 * @param {?} i
                 * @return {?}
                 */
                function (area_row, i) {
                    if (area_row.includes(e.zone)) {
                        idx_2 = i;
                    }
                }));
                if (e.handle === 'top') {
                    _this.rows[idx_2] = e.element_position.bottom - e.event.pageY + "px";
                }
                else if (e.handle === 'bottom') {
                    _this.rows[idx_2] = e.event.pageY + e.handle_width + "px";
                }
                _this._setAreasStyle();
            }
        }));
    }
    /**
     * @return {?}
     */
    WorkspaceWrapperComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
        this._renderer.addClass(document.querySelector('body'), "workspace-theme-" + this.theme);
        this._renderer.setAttribute(document.querySelector('body'), 'colorTheme', this.theme);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    WorkspaceWrapperComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.host_theme_class = "workspace-theme-" + this.theme;
        this._renderer.addClass(document.querySelector('body'), "workspace-theme-" + this.theme);
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
    };
    /**
     * @private
     * @return {?}
     */
    WorkspaceWrapperComponent.prototype._setAreasStyle = /**
     * @private
     * @return {?}
     */
    function () {
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-rows', this.rows.join(' '));
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-columns', this.columns.join(' '));
        this._renderer.setStyle(this._el.nativeElement, 'grid-template-areas', this.areas.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return "\"" + x.join(' ') + "\""; })).join(' '));
        if (this.restore_state) {
            localStorage.setItem('wrapper:rows', JSON.stringify(this.rows));
            localStorage.setItem('wrapper:columns', JSON.stringify(this.columns));
        }
    };
    WorkspaceWrapperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fnd-workspace-wrapper',
                    template: '<ng-content></ng-content>',
                    styles: ["::ng-deep body{margin:0;padding:0;box-sizing:border-box}:host-context(fnd-workspace-wrapper){position:fixed;display:-ms-grid;display:grid;width:100%;height:100%;background-color:var(--wrapper-bg-color);color:var(--wrapper-text-color)}"]
                }] }
    ];
    /** @nocollapse */
    WorkspaceWrapperComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ResizerEventsService }
    ]; };
    WorkspaceWrapperComponent.propDecorators = {
        rows: [{ type: Input }],
        columns: [{ type: Input }],
        areas: [{ type: Input }],
        padding: [{ type: Input }],
        theme: [{ type: Input }],
        restore_state: [{ type: Input }],
        host_theme_class: [{ type: HostBinding, args: ['class',] }]
    };
    return WorkspaceWrapperComponent;
}());
export { WorkspaceWrapperComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRyeS1zZGsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93b3Jrc3BhY2Utd3JhcHBlci93b3Jrc3BhY2Utd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN2SCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUxRTtJQW1CSSxtQ0FDWSxHQUFlLEVBQ2YsU0FBb0IsRUFDcEIsY0FBb0M7UUFIaEQsaUJBMENDO1FBekNXLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQWZ2QyxTQUFJLEdBQWtCLEVBQUUsQ0FBQztRQUN6QixZQUFPLEdBQWtCLEVBQUUsQ0FBQztRQUM1QixVQUFLLEdBQXlCLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFVBQUssR0FBVyxPQUFPLENBQUM7UUFDeEIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFFL0Isa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBQ2xDLGtCQUFhLEdBQWtCLEVBQUUsQ0FBQztRQUVwQixxQkFBZ0IsR0FBRyxxQkFBbUIsSUFBSSxDQUFDLEtBQU8sQ0FBQztRQU9yRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxDQU90QztZQUNHLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7O29CQUNkLEtBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ1osS0FBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsUUFBUTtvQkFDdkIs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O0lBQ2pDLGtEQUF1Qzs7Ozs7SUFFdkMsa0RBQTBDOzs7OztJQUMxQyxrREFBMEM7O0lBRTFDLHFEQUF5RTs7Ozs7SUFHckUsd0NBQXVCOzs7OztJQUN2Qiw4Q0FBNEI7Ozs7O0lBQzVCLG1EQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNpemVyRXZlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3Rvb2xzL3Jlc2l6ZXItZXZlbnRzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2ZuZC13b3Jrc3BhY2Utd3JhcHBlcicsXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+JyxcbiAgICBzdHlsZVVybHM6IFsnLi93b3Jrc3BhY2Utd3JhcHBlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVdyYXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSByb3dzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgQElucHV0KCkgY29sdW1uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIEBJbnB1dCgpIGFyZWFzOiBBcnJheTxBcnJheTxzdHJpbmc+PiA9IFtdO1xuICAgIEBJbnB1dCgpIHBhZGRpbmc6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIHRoZW1lOiBzdHJpbmcgPSAnbGlnaHQnO1xuICAgIEBJbnB1dCgpIHJlc3RvcmVfc3RhdGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBfcm93c19pbml0aWFsOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSBfY29sc19pbml0aWFsOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgaG9zdF90aGVtZV9jbGFzcyA9IGB3b3Jrc3BhY2UtdGhlbWUtJHt0aGlzLnRoZW1lfWA7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgX3Jlc2l6ZVNlcnZpY2U6IFJlc2l6ZXJFdmVudHNTZXJ2aWNlLFxuICAgICkge1xuICAgICAgICB0aGlzLl9yZXNpemVTZXJ2aWNlLmVtaXR0ZXIuc3Vic2NyaWJlKChlOiB7XG4gICAgICAgICAgICB6b25lOiBzdHJpbmcsXG4gICAgICAgICAgICByZXNpemU6ICdoJyB8ICd2JyxcbiAgICAgICAgICAgIGhhbmRsZTogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcsXG4gICAgICAgICAgICBoYW5kbGVfd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgIGV2ZW50OiBNb3VzZUV2ZW50LFxuICAgICAgICAgICAgZWxlbWVudF9wb3NpdGlvbjogRE9NUmVjdCxcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUucmVzaXplID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhcy5mb3JFYWNoKGFyZWFfcm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9IGFyZWFfcm93LmZpbmRJbmRleChhcmVhID0+IGFyZWEgPT09IGUuem9uZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZS5oYW5kbGUgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zW2lkeF0gPSBgJHtlLmV2ZW50LnBhZ2VYIC0gZS5lbGVtZW50X3Bvc2l0aW9uLmxlZnQgKyBlLmhhbmRsZV93aWR0aH1weGA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmhhbmRsZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1tpZHhdID0gYCR7d2luZG93Lm91dGVyV2lkdGggLSBlLmV2ZW50LnBhZ2VYfXB4YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0QXJlYXNTdHlsZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnJlc2l6ZSA9PT0gJ3YnKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJlYXMuZm9yRWFjaCgoYXJlYV9yb3csIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZWFfcm93LmluY2x1ZGVzKGUuem9uZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChlLmhhbmRsZSA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzW2lkeF0gPSBgJHtlLmVsZW1lbnRfcG9zaXRpb24uYm90dG9tIC0gZS5ldmVudC5wYWdlWX1weGA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmhhbmRsZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3dzW2lkeF0gPSBgJHtlLmV2ZW50LnBhZ2VZICsgZS5oYW5kbGVfd2lkdGh9cHhgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRBcmVhc1N0eWxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5yZXN0b3JlX3N0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzX2luaXRpYWwgPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB0aGlzLl9jb2xzX2luaXRpYWwgPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6cm93cycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpyb3dzJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOmNvbHVtbnMnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6Y29sdW1ucycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXRBcmVhc1N0eWxlKCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgYHdvcmtzcGFjZS10aGVtZS0ke3RoaXMudGhlbWV9YCk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICdjb2xvclRoZW1lJywgdGhpcy50aGVtZSk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICB0aGlzLmhvc3RfdGhlbWVfY2xhc3MgPSBgd29ya3NwYWNlLXRoZW1lLSR7dGhpcy50aGVtZX1gO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksIGB3b3Jrc3BhY2UtdGhlbWUtJHt0aGlzLnRoZW1lfWApO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnY29sb3JUaGVtZScsIHRoaXMudGhlbWUpO1xuICAgICAgICBpZiAodGhpcy5yZXN0b3JlX3N0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3dzX2luaXRpYWwgPSB0aGlzLnJvd3M7XG4gICAgICAgICAgICB0aGlzLl9jb2xzX2luaXRpYWwgPSB0aGlzLmNvbHVtbnM7XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6cm93cycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpyb3dzJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOmNvbHVtbnMnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6Y29sdW1ucycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zZXRBcmVhc1N0eWxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0QXJlYXNTdHlsZSgpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2dyaWQtdGVtcGxhdGUtcm93cycsIHRoaXMucm93cy5qb2luKCcgJykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJywgdGhpcy5jb2x1bW5zLmpvaW4oJyAnKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdncmlkLXRlbXBsYXRlLWFyZWFzJywgdGhpcy5hcmVhcy5tYXAoeCA9PiBgXCIke3guam9pbignICcpfVwiYCkuam9pbignICcpKTtcblxuICAgICAgICBpZiAodGhpcy5yZXN0b3JlX3N0YXRlKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd3JhcHBlcjpyb3dzJywgSlNPTi5zdHJpbmdpZnkodGhpcy5yb3dzKSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd3JhcHBlcjpjb2x1bW5zJywgSlNPTi5zdHJpbmdpZnkodGhpcy5jb2x1bW5zKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==