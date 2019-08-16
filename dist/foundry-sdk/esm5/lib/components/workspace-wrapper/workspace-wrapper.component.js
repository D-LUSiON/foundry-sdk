/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
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
                    _this.columns[idx_1] = window.innerWidth - e.event.pageX + (e.handle_width / 2) + "px";
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
                    console.log("e.resizer_position.top: " + e.resizer_position.top + ": e.element_position.bottom: " + e.element_position.bottom);
                    _this.rows[idx_2] = (e.resizer_position.top - e.element_position.top) + (e.handle_width / 2) + "px";
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
        restore_state: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRyeS1zZGsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93b3Jrc3BhY2Utd3JhcHBlci93b3Jrc3BhY2Utd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxvQkFBb0IsRUFBZSxNQUFNLG9DQUFvQyxDQUFDO0FBRXZGO0lBa0JJLG1DQUNZLEdBQWUsRUFDZixTQUFvQixFQUNwQixjQUFvQztRQUhoRCxpQkFxQ0M7UUFwQ1csUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBZHZDLFNBQUksR0FBa0IsRUFBRSxDQUFDO1FBQ3pCLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLFVBQUssR0FBeUIsRUFBRSxDQUFDO1FBQ2pDLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFDckIsVUFBSyxHQUFXLE9BQU8sQ0FBQztRQUN4QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUUvQixrQkFBYSxHQUFrQixFQUFFLENBQUM7UUFDbEMsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBUXRDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLENBQWM7WUFDakQsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTs7b0JBQ2QsS0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDWixLQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxRQUFRO29CQUN2QixJQUFJLEtBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDWixLQUFHLEdBQUcsUUFBUSxDQUFD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b21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNpemVyRXZlbnRzU2VydmljZSwgUmVzaXplRXZlbnQgfSBmcm9tICcuLi8uLi90b29scy9yZXNpemVyLWV2ZW50cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmbmQtd29ya3NwYWNlLXdyYXBwZXInLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgc3R5bGVVcmxzOiBbJy4vd29ya3NwYWNlLXdyYXBwZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2VXcmFwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAgQElucHV0KCkgcm93czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIEBJbnB1dCgpIGNvbHVtbnM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBASW5wdXQoKSBhcmVhczogQXJyYXk8QXJyYXk8c3RyaW5nPj4gPSBbXTtcbiAgICBASW5wdXQoKSBwYWRkaW5nOiBzdHJpbmcgPSAnJztcbiAgICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gJ2xpZ2h0JztcbiAgICBASW5wdXQoKSByZXN0b3JlX3N0YXRlOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHByaXZhdGUgX3Jvd3NfaW5pdGlhbDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHByaXZhdGUgX2NvbHNfaW5pdGlhbDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgX3Jlc2l6ZVNlcnZpY2U6IFJlc2l6ZXJFdmVudHNTZXJ2aWNlLFxuICAgICkge1xuICAgICAgICB0aGlzLl9yZXNpemVTZXJ2aWNlLmVtaXR0ZXIuc3Vic2NyaWJlKChlOiBSZXNpemVFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGUucmVzaXplID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhcy5mb3JFYWNoKGFyZWFfcm93ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9IGFyZWFfcm93LmZpbmRJbmRleChhcmVhID0+IGFyZWEgPT09IGUuem9uZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZS5oYW5kbGUgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zW2lkeF0gPSBgJHtlLmV2ZW50LnBhZ2VYIC0gZS5lbGVtZW50X3Bvc2l0aW9uLmxlZnQgKyBlLmhhbmRsZV93aWR0aH1weGA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmhhbmRsZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1tpZHhdID0gYCR7d2luZG93LmlubmVyV2lkdGggLSBlLmV2ZW50LnBhZ2VYICsgKGUuaGFuZGxlX3dpZHRoIC8gMil9cHhgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRBcmVhc1N0eWxlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUucmVzaXplID09PSAndicpIHtcbiAgICAgICAgICAgICAgICBsZXQgaWR4ID0gLTE7XG4gICAgICAgICAgICAgICAgdGhpcy5hcmVhcy5mb3JFYWNoKChhcmVhX3JvdywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJlYV9yb3cuaW5jbHVkZXMoZS56b25lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGUuaGFuZGxlID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvd3NbaWR4XSA9IGAke2UuZWxlbWVudF9wb3NpdGlvbi5ib3R0b20gLSBlLmV2ZW50LnBhZ2VZfXB4YDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUuaGFuZGxlID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZS5yZXNpemVyX3Bvc2l0aW9uLnRvcDogJHtlLnJlc2l6ZXJfcG9zaXRpb24udG9wfTogZS5lbGVtZW50X3Bvc2l0aW9uLmJvdHRvbTogJHtlLmVsZW1lbnRfcG9zaXRpb24uYm90dG9tfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm93c1tpZHhdID0gYCR7KGUucmVzaXplcl9wb3NpdGlvbi50b3AgLSBlLmVsZW1lbnRfcG9zaXRpb24udG9wKSArIChlLmhhbmRsZV93aWR0aCAvIDIpfXB4YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0QXJlYXNTdHlsZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVzdG9yZV9zdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fcm93c19pbml0aWFsID0gdGhpcy5yb3dzO1xuICAgICAgICAgICAgdGhpcy5fY29sc19pbml0aWFsID0gdGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOnJvd3MnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6cm93cycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpjb2x1bW5zJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOmNvbHVtbnMnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2V0QXJlYXNTdHlsZSgpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAnY29sb3JUaGVtZScsIHRoaXMudGhlbWUpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ2NvbG9yVGhlbWUnLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgaWYgKHRoaXMucmVzdG9yZV9zdGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fcm93c19pbml0aWFsID0gdGhpcy5yb3dzO1xuICAgICAgICAgICAgdGhpcy5fY29sc19pbml0aWFsID0gdGhpcy5jb2x1bW5zO1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOnJvd3MnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucm93cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dyYXBwZXI6cm93cycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd3JhcHBlcjpjb2x1bW5zJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3cmFwcGVyOmNvbHVtbnMnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2V0QXJlYXNTdHlsZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEFyZWFzU3R5bGUoKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdncmlkLXRlbXBsYXRlLXJvd3MnLCB0aGlzLnJvd3Muam9pbignICcpKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsIHRoaXMuY29sdW1ucy5qb2luKCcgJykpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC10ZW1wbGF0ZS1hcmVhcycsIHRoaXMuYXJlYXMubWFwKHggPT4gYFwiJHt4LmpvaW4oJyAnKX1cImApLmpvaW4oJyAnKSk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVzdG9yZV9zdGF0ZSkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dyYXBwZXI6cm93cycsIEpTT04uc3RyaW5naWZ5KHRoaXMucm93cykpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dyYXBwZXI6Y29sdW1ucycsIEpTT04uc3RyaW5naWZ5KHRoaXMuY29sdW1ucykpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=