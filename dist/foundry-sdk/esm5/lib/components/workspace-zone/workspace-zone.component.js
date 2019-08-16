/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';
import { ResizerEventsService } from '../../tools/resizer-events.service';
var WorkspaceZoneComponent = /** @class */ (function () {
    function WorkspaceZoneComponent(_el, _renderer, _resizeService) {
        var _this = this;
        this._el = _el;
        this._renderer = _renderer;
        this._resizeService = _resizeService;
        this.theme = '';
        this.overflow_x = 'clip';
        this.overflow_y = 'clip';
        this.min_height = '0';
        this.max_height = 'auto';
        this.direction = 'column';
        this.resizers = [];
        this.resizer_width = 6;
        this.host_min_height = this.min_height;
        this.host_max_height = this.max_height;
        this.host_overfow_x = this.overflow_x;
        this.host_overfow_y = this.overflow_y;
        this.host_flex_direction = this.direction;
        this.host_color_theme = this.theme;
        this.all_resizers = {};
        this._resizeService.emitter.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (e.zone !== _this.role) {
                _this.resizers.forEach((/**
                 * @param {?} resizer
                 * @return {?}
                 */
                function (resizer) {
                    _this._updateResizerPosition(_this.all_resizers[resizer]);
                }));
            }
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    WorkspaceZoneComponent.prototype.onMouseEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        Object.keys(this.all_resizers).forEach((/**
         * @param {?} resizer
         * @return {?}
         */
        function (resizer) {
            _this._renderer.removeClass(_this.all_resizers[resizer], 'resizer-handle-hidden');
            _this._renderer.addClass(_this.all_resizers[resizer], 'resizer-handle-visible');
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    WorkspaceZoneComponent.prototype.onMouseLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if (!e.relatedTarget || ((/** @type {?} */ (e.relatedTarget))).getAttribute('zone') !== this.role) {
            Object.keys(this.all_resizers).forEach((/**
             * @param {?} resizer
             * @return {?}
             */
            function (resizer) {
                _this._renderer.removeClass(_this.all_resizers[resizer], 'resizer-handle-visible');
                _this._renderer.addClass(_this.all_resizers[resizer], 'resizer-handle-hidden');
            }));
        }
    };
    /**
     * @return {?}
     */
    WorkspaceZoneComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._renderer.setStyle(this._el.nativeElement, 'grid-area', this.role);
        if (this.border) {
            this._renderer.setStyle(this._el.nativeElement, "border-" + this.border + "-width", '1px');
        }
        this.resizers.forEach((/**
         * @param {?} resizer
         * @return {?}
         */
        function (resizer) {
            if (!_this.all_resizers[resizer]) {
                /** @type {?} */
                var resizer_el = _this._renderer.createElement('div');
                _this._renderer.setAttribute(resizer_el, 'zone', _this.role);
                _this._renderer.setAttribute(resizer_el, 'role', resizer);
                _this._renderer.addClass(resizer_el, 'resizer-handle');
                _this._renderer.addClass(resizer_el, 'resizer-handle-hidden');
                switch (resizer) {
                    case 'top':
                    case 'bottom':
                        _this._renderer.setStyle(resizer_el, 'cursor', 'n-resize');
                        break;
                    case 'right':
                    case 'left':
                        _this._renderer.setStyle(resizer_el, 'cursor', 'e-resize');
                        break;
                    default:
                        break;
                }
                _this._updateResizerPosition(resizer_el);
                _this._addMouseDragListeners(resizer_el, resizer);
                _this._renderer.appendChild(document.querySelector('body'), resizer_el);
                _this.all_resizers[resizer] = resizer_el;
            }
            else {
                console.error("You've defined more than one \"" + resizer + "\" resizers!");
            }
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    WorkspaceZoneComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.host_color_theme = this.theme;
        this.host_min_height = this.min_height;
        this.host_max_height = this.max_height;
        this.host_overfow_x = this.overflow_x;
        this.host_overfow_y = this.overflow_y;
        this.host_flex_direction = this.direction;
    };
    /**
     * @return {?}
     */
    WorkspaceZoneComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.host_color_theme = this.theme;
        this.host_min_height = this.min_height;
        this.host_max_height = this.max_height;
        this.host_overfow_x = this.overflow_x;
        this.host_overfow_y = this.overflow_y;
        this.host_flex_direction = this.direction;
    };
    /**
     * @private
     * @param {?} resizer_el
     * @return {?}
     */
    WorkspaceZoneComponent.prototype._updateResizerPosition = /**
     * @private
     * @param {?} resizer_el
     * @return {?}
     */
    function (resizer_el) {
        /** @type {?} */
        var position_info = this._el.nativeElement.getBoundingClientRect();
        /** @type {?} */
        var resizer = resizer_el.getAttribute('role');
        switch (resizer) {
            case 'top':
                this._renderer.setStyle(resizer_el, 'width', position_info.width + "px");
                this._renderer.setStyle(resizer_el, 'height', this.resizer_width + "px");
                this._renderer.setStyle(resizer_el, 'top', position_info.y - (this.resizer_width / 2) + "px");
                this._renderer.setStyle(resizer_el, 'left', position_info.x + "px");
                break;
            case 'right':
                this._renderer.setStyle(resizer_el, 'width', this.resizer_width + "px");
                this._renderer.setStyle(resizer_el, 'height', position_info.height + "px");
                this._renderer.setStyle(resizer_el, 'top', position_info.top + "px");
                this._renderer.setStyle(resizer_el, 'left', position_info.width + position_info.left - this.resizer_width + (this.resizer_width / 2) + "px");
                break;
            case 'bottom':
                // TODO: Fix resizer
                this._renderer.setStyle(resizer_el, 'width', position_info.width + "px");
                this._renderer.setStyle(resizer_el, 'height', this.resizer_width + "px");
                this._renderer.setStyle(resizer_el, 'top', position_info.bottom - this.resizer_width + (this.resizer_width / 2) + "px");
                this._renderer.setStyle(resizer_el, 'left', position_info.x + "px");
                break;
            case 'left':
                this._renderer.setStyle(resizer_el, 'width', this.resizer_width + "px");
                this._renderer.setStyle(resizer_el, 'height', position_info.height + "px");
                this._renderer.setStyle(resizer_el, 'top', position_info.top + "px");
                this._renderer.setStyle(resizer_el, 'left', position_info.left - (this.resizer_width / 2) + "px");
                break;
            default:
                break;
        }
    };
    /**
     * @private
     * @param {?} resizer_el
     * @param {?} resize
     * @return {?}
     */
    WorkspaceZoneComponent.prototype._addMouseDragListeners = /**
     * @private
     * @param {?} resizer_el
     * @param {?} resize
     * @return {?}
     */
    function (resizer_el, resize) {
        var _this = this;
        this._renderer.listen(resizer_el, 'mouseenter', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this._renderer.removeClass(resizer_el, 'resizer-handle-hidden');
            _this._renderer.addClass(resizer_el, 'resizer-handle-visible');
        }));
        this._renderer.listen(resizer_el, 'mouseleave', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!e.relatedTarget || ((/** @type {?} */ (e.relatedTarget))).getAttribute('role') !== _this.role) {
                _this._renderer.removeClass(resizer_el, 'resizer-handle-visible');
                _this._renderer.addClass(resizer_el, 'resizer-handle-hidden');
            }
        }));
        this._renderer.listen(resizer_el, 'mousedown', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this._renderer.setStyle(document.querySelector('body'), 'user-select', 'none');
            /** @type {?} */
            var win_mousemove_fn = _this._renderer.listen(window, 'mousemove', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (['top', 'bottom'].includes(resize)) {
                    _this._renderer.setStyle(resizer_el, 'top', event.pageY + "px");
                }
                else {
                    _this._renderer.setStyle(resizer_el, 'left', event.pageX + "px");
                }
                _this._resizeService.emitter.emit({
                    zone: _this.role,
                    resize: ['top', 'bottom'].includes(resize) ? 'v' : 'h',
                    handle: resize,
                    handle_width: _this.resizer_width,
                    event: event,
                    element_position: _this._el.nativeElement.getBoundingClientRect(),
                    resizer_width: _this.resizer_width,
                });
            }));
            /** @type {?} */
            var win_dragstart_fn = _this._renderer.listen(window, 'dragstart', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }));
            /** @type {?} */
            var win_mouseup_fn = _this._renderer.listen(window, 'mouseup', (/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this._renderer.setStyle(document.querySelector('body'), 'user-select', 'unset');
                win_mousemove_fn();
                win_dragstart_fn();
                win_mouseup_fn();
            }));
        }));
    };
    WorkspaceZoneComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fnd-workspace-zone',
                    template: '<ng-content></ng-content>',
                    styles: ["::ng-deep .resizer-handle{position:absolute;z-index:10000;background-color:var(--zone-handle-bg-color);border-width:var(--zone-handle-border-width);border-style:var(--zone-handle-border-style);border-color:var(--zone-handle-border-color)}::ng-deep .resizer-handle-visible{visibility:visible;opacity:1;-webkit-transition:opacity .1s linear;transition:opacity .1s linear}::ng-deep .resizer-handle-hidden{visibility:hidden;opacity:0;-webkit-transition:visibility .5s 1s,opacity 1s linear;transition:visibility .5s 1s,opacity 1s linear}:host-context(fnd-workspace-zone){--scrollbar-color:var(--color-tint);--scrollbar-thumb-color:var(--color-shade);--scrollbar-thumb-hover-color:var(--color-shade-lighter);--scrollbar-thumb-active-color:var(--color-shade-darker);--wrapper-bg-color:var(--color);--wrapper-text-color:var(--color-contrast);--zone-bg-color:var(--color);--zone-text-color:var(--color-contrast);--zone-border-color:var(--color-shade);--zone-border-style:solid;--zone-handle-bg-color:var(--color-shade);--zone-handle-color:var(--color-dark-contrast);--zone-handle-border-width:1px;--zone-handle-border-color:var(--color-shade);display:-webkit-box;display:flex;overflow:auto;word-break:break-all;background-color:var(--zone-bg-color);color:var(--zone-text-color);border-width:0;border-style:var(--zone-border-style);border-color:var(--zone-border-color)}"]
                }] }
    ];
    /** @nocollapse */
    WorkspaceZoneComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ResizerEventsService }
    ]; };
    WorkspaceZoneComponent.propDecorators = {
        role: [{ type: Input }],
        border: [{ type: Input }],
        resize_zone: [{ type: Input }],
        theme: [{ type: Input }],
        overflow_x: [{ type: Input }],
        overflow_y: [{ type: Input }],
        min_height: [{ type: Input }],
        max_height: [{ type: Input }],
        direction: [{ type: Input }],
        resizers: [{ type: Input }],
        resizer_width: [{ type: Input }],
        host_min_height: [{ type: HostBinding, args: ['style.min-height',] }],
        host_max_height: [{ type: HostBinding, args: ['style.max-height',] }],
        host_overfow_x: [{ type: HostBinding, args: ['style.overflow-x',] }],
        host_overfow_y: [{ type: HostBinding, args: ['style.overflow-y',] }],
        host_flex_direction: [{ type: HostBinding, args: ['style.flex-direction',] }],
        host_color_theme: [{ type: HostBinding, args: ['attr.colorTheme',] }],
        onMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
        onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
    };
    return WorkspaceZoneComponent;
}());
export { WorkspaceZoneComponent };
if (false) {
    /** @type {?} */
    WorkspaceZoneComponent.prototype.role;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.border;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.resize_zone;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.theme;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.overflow_x;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.overflow_y;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.min_height;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.max_height;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.direction;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.resizers;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.resizer_width;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.host_min_height;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.host_max_height;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.host_overfow_x;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.host_overfow_y;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.host_flex_direction;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.host_color_theme;
    /**
     * @type {?}
     * @private
     */
    WorkspaceZoneComponent.prototype._resizer_element;
    /** @type {?} */
    WorkspaceZoneComponent.prototype.all_resizers;
    /**
     * @type {?}
     * @private
     */
    WorkspaceZoneComponent.prototype._el;
    /**
     * @type {?}
     * @private
     */
    WorkspaceZoneComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    WorkspaceZoneComponent.prototype._resizeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXpvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRyeS1zZGsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93b3Jrc3BhY2Utem9uZS93b3Jrc3BhY2Utem9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUVYLFlBQVksRUFHZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUxRTtJQStDSSxnQ0FDWSxHQUFlLEVBQ2YsU0FBb0IsRUFDcEIsY0FBb0M7UUFIaEQsaUJBWUM7UUFYVyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUF4Q3ZDLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsZUFBVSxHQUE0RSxNQUFNLENBQUM7UUFDN0YsZUFBVSxHQUE0RSxNQUFNLENBQUM7UUFDN0YsZUFBVSxHQUFXLEdBQUcsQ0FBQztRQUN6QixlQUFVLEdBQVcsTUFBTSxDQUFDO1FBQzVCLGNBQVMsR0FBcUIsUUFBUSxDQUFDO1FBQ3ZDLGFBQVEsR0FBK0MsRUFBRSxDQUFDO1FBQzFELGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBRUYsb0JBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLG9CQUFlLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxtQkFBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDakMsbUJBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzdCLHdCQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUMscUJBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUs5RCxpQkFB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LEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUVMLFdBQVcsU0FBQyxrQkFBa0I7a0NBQzlCLFdBQVcsU0FBQyxrQkFBa0I7aUNBQzlCLFdBQVcsU0FBQyxrQkFBa0I7aUNBQzlCLFdBQVcsU0FBQyxrQkFBa0I7c0NBQzlCLFdBQVcsU0FBQyxzQkFBc0I7bUNBQ2xDLFdBQVcsU0FBQyxpQkFBaUI7K0JBTzdCLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7K0JBT3JDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBbUsxQyw2QkFBQztDQUFBLEFBek1ELElBeU1DO1NBcE1ZLHNCQUFzQjs7O0lBRS9CLHNDQUFzQjs7SUFDdEIsd0NBQXdCOztJQUN4Qiw2Q0FBNkI7O0lBQzdCLHVDQUE0Qjs7SUFDNUIsNENBQXNHOztJQUN0Ryw0Q0FBc0c7O0lBQ3RHLDRDQUFrQzs7SUFDbEMsNENBQXFDOztJQUNyQywyQ0FBZ0Q7O0lBQ2hELDBDQUFtRTs7SUFDbkUsK0NBQW1DOztJQUVuQyxpREFBbUU7O0lBQ25FLGlEQUFtRTs7SUFDbkUsZ0RBQWtFOztJQUNsRSxnREFBa0U7O0lBQ2xFLHFEQUEwRTs7SUFDMUUsa0RBQThEOzs7OztJQUc5RCxrREFBeUM7O0lBRXpDLDhDQUFxRDs7Ozs7SUFtQmpELHFDQUF1Qjs7Ozs7SUFDdkIsMkNBQTRCOzs7OztJQUM1QixnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgRWxlbWVudFJlZixcbiAgICBSZW5kZXJlcjIsXG4gICAgSW5wdXQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgT25DaGFuZ2VzLFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNpemVyRXZlbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3Rvb2xzL3Jlc2l6ZXItZXZlbnRzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbmQtd29ya3NwYWNlLXpvbmUnLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxuICBzdHlsZVVybHM6IFsnLi93b3Jrc3BhY2Utem9uZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVpvbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgICBASW5wdXQoKSByb2xlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYm9yZGVyOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcmVzaXplX3pvbmU6IHN0cmluZztcbiAgICBASW5wdXQoKSB0aGVtZTogc3RyaW5nID0gJyc7XG4gICAgQElucHV0KCkgb3ZlcmZsb3dfeDogJ3Zpc2libGUnIHwgJ2F1dG8nIHwgJ25vbmUnIHwgJ3Njcm9sbCcgfCAnaW5pdGlhbCcgfCAnY2xpcCcgfCAnb3ZlcmxheScgPSAnY2xpcCc7XG4gICAgQElucHV0KCkgb3ZlcmZsb3dfeTogJ3Zpc2libGUnIHwgJ2F1dG8nIHwgJ25vbmUnIHwgJ3Njcm9sbCcgfCAnaW5pdGlhbCcgfCAnY2xpcCcgfCAnb3ZlcmxheScgPSAnY2xpcCc7XG4gICAgQElucHV0KCkgbWluX2hlaWdodDogc3RyaW5nID0gJzAnO1xuICAgIEBJbnB1dCgpIG1heF9oZWlnaHQ6IHN0cmluZyA9ICdhdXRvJztcbiAgICBASW5wdXQoKSBkaXJlY3Rpb246ICdyb3cnIHwgJ2NvbHVtbicgPSAnY29sdW1uJztcbiAgICBASW5wdXQoKSByZXNpemVyczogQXJyYXk8J3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCc+ID0gW107XG4gICAgQElucHV0KCkgcmVzaXplcl93aWR0aDogbnVtYmVyID0gNjtcblxuICAgIEBIb3N0QmluZGluZygnc3R5bGUubWluLWhlaWdodCcpIGhvc3RfbWluX2hlaWdodCA9IHRoaXMubWluX2hlaWdodDtcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1heC1oZWlnaHQnKSBob3N0X21heF9oZWlnaHQgPSB0aGlzLm1heF9oZWlnaHQ7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vdmVyZmxvdy14JykgaG9zdF9vdmVyZm93X3ggPSB0aGlzLm92ZXJmbG93X3g7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vdmVyZmxvdy15JykgaG9zdF9vdmVyZm93X3kgPSB0aGlzLm92ZXJmbG93X3k7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5mbGV4LWRpcmVjdGlvbicpIGhvc3RfZmxleF9kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICBASG9zdEJpbmRpbmcoJ2F0dHIuY29sb3JUaGVtZScpIGhvc3RfY29sb3JfdGhlbWUgPSB0aGlzLnRoZW1lO1xuXG5cbiAgICBwcml2YXRlIF9yZXNpemVyX2VsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgYWxsX3Jlc2l6ZXJzOiB7IFtrZXk6IHN0cmluZ106IEhUTUxEaXZFbGVtZW50IH0gPSB7fTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbJyRldmVudCddKSBvbk1vdXNlRW50ZXIoZTogTW91c2VFdmVudCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmFsbF9yZXNpemVycykuZm9yRWFjaChyZXNpemVyID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuYWxsX3Jlc2l6ZXJzW3Jlc2l6ZXJdLCAncmVzaXplci1oYW5kbGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSwgJ3Jlc2l6ZXItaGFuZGxlLXZpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsnJGV2ZW50J10pIG9uTW91c2VMZWF2ZShlOiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICghZS5yZWxhdGVkVGFyZ2V0IHx8IChlLnJlbGF0ZWRUYXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpLmdldEF0dHJpYnV0ZSgnem9uZScpICE9PSB0aGlzLnJvbGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuYWxsX3Jlc2l6ZXJzKS5mb3JFYWNoKHJlc2l6ZXIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuYWxsX3Jlc2l6ZXJzW3Jlc2l6ZXJdLCAncmVzaXplci1oYW5kbGUtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuYWxsX3Jlc2l6ZXJzW3Jlc2l6ZXJdLCAncmVzaXplci1oYW5kbGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogUmVzaXplckV2ZW50c1NlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVNlcnZpY2UuZW1pdHRlci5zdWJzY3JpYmUoKGU6IHsgem9uZTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZS56b25lICE9PSB0aGlzLnJvbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZXJzLmZvckVhY2gocmVzaXplciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlc2l6ZXJQb3NpdGlvbih0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC1hcmVhJywgdGhpcy5yb2xlKTtcbiAgICAgICAgaWYgKHRoaXMuYm9yZGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBgYm9yZGVyLSR7dGhpcy5ib3JkZXJ9LXdpZHRoYCwgJzFweCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNpemVycy5mb3JFYWNoKHJlc2l6ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZXJfZWw6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHJlc2l6ZXJfZWwsICd6b25lJywgdGhpcy5yb2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUocmVzaXplcl9lbCwgJ3JvbGUnLCByZXNpemVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhyZXNpemVyX2VsLCAncmVzaXplci1oYW5kbGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhyZXNpemVyX2VsLCAncmVzaXplci1oYW5kbGUtaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc2l6ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICdjdXJzb3InLCAnbi1yZXNpemUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2N1cnNvcicsICdlLXJlc2l6ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZXNpemVyUG9zaXRpb24ocmVzaXplcl9lbCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRNb3VzZURyYWdMaXN0ZW5lcnMocmVzaXplcl9lbCwgcmVzaXplcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCByZXNpemVyX2VsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSA9IHJlc2l6ZXJfZWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFlvdSd2ZSBkZWZpbmVkIG1vcmUgdGhhbiBvbmUgXCIke3Jlc2l6ZXJ9XCIgcmVzaXplcnMhYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob3N0X2NvbG9yX3RoZW1lID0gdGhpcy50aGVtZTtcbiAgICAgICAgdGhpcy5ob3N0X21pbl9oZWlnaHQgPSB0aGlzLm1pbl9oZWlnaHQ7XG4gICAgICAgIHRoaXMuaG9zdF9tYXhfaGVpZ2h0ID0gdGhpcy5tYXhfaGVpZ2h0O1xuICAgICAgICB0aGlzLmhvc3Rfb3ZlcmZvd194ID0gdGhpcy5vdmVyZmxvd194O1xuICAgICAgICB0aGlzLmhvc3Rfb3ZlcmZvd195ID0gdGhpcy5vdmVyZmxvd195O1xuICAgICAgICB0aGlzLmhvc3RfZmxleF9kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG9zdF9jb2xvcl90aGVtZSA9IHRoaXMudGhlbWU7XG4gICAgICAgIHRoaXMuaG9zdF9taW5faGVpZ2h0ID0gdGhpcy5taW5faGVpZ2h0O1xuICAgICAgICB0aGlzLmhvc3RfbWF4X2hlaWdodCA9IHRoaXMubWF4X2hlaWdodDtcbiAgICAgICAgdGhpcy5ob3N0X292ZXJmb3dfeCA9IHRoaXMub3ZlcmZsb3dfeDtcbiAgICAgICAgdGhpcy5ob3N0X292ZXJmb3dfeSA9IHRoaXMub3ZlcmZsb3dfeTtcbiAgICAgICAgdGhpcy5ob3N0X2ZsZXhfZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVzaXplclBvc2l0aW9uKHJlc2l6ZXJfZWw6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uX2luZm86IERPTVJlY3QgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCByZXNpemVyID0gcmVzaXplcl9lbC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKTtcblxuICAgICAgICBzd2l0Y2ggKHJlc2l6ZXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ3dpZHRoJywgYCR7cG9zaXRpb25faW5mby53aWR0aH1weGApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICdoZWlnaHQnLCBgJHt0aGlzLnJlc2l6ZXJfd2lkdGh9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAndG9wJywgYCR7cG9zaXRpb25faW5mby55IC0gKHRoaXMucmVzaXplcl93aWR0aCAvIDIpfXB4YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2xlZnQnLCBgJHtwb3NpdGlvbl9pbmZvLnh9cHhgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAnd2lkdGgnLCBgJHt0aGlzLnJlc2l6ZXJfd2lkdGh9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAnaGVpZ2h0JywgYCR7cG9zaXRpb25faW5mby5oZWlnaHR9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAndG9wJywgYCR7cG9zaXRpb25faW5mby50b3B9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplcl9lbCxcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICBgJHtwb3NpdGlvbl9pbmZvLndpZHRoICsgcG9zaXRpb25faW5mby5sZWZ0IC0gdGhpcy5yZXNpemVyX3dpZHRoICsgKHRoaXMucmVzaXplcl93aWR0aCAvIDIpfXB4YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIC8vIFRPRE86IEZpeCByZXNpemVyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ3dpZHRoJywgYCR7cG9zaXRpb25faW5mby53aWR0aH1weGApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICdoZWlnaHQnLCBgJHt0aGlzLnJlc2l6ZXJfd2lkdGh9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAndG9wJywgYCR7cG9zaXRpb25faW5mby5ib3R0b20gLSB0aGlzLnJlc2l6ZXJfd2lkdGggKyAodGhpcy5yZXNpemVyX3dpZHRoIC8gMil9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAnbGVmdCcsIGAke3Bvc2l0aW9uX2luZm8ueH1weGApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ3dpZHRoJywgYCR7dGhpcy5yZXNpemVyX3dpZHRofXB4YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2hlaWdodCcsIGAke3Bvc2l0aW9uX2luZm8uaGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ3RvcCcsIGAke3Bvc2l0aW9uX2luZm8udG9wfXB4YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2xlZnQnLCBgJHtwb3NpdGlvbl9pbmZvLmxlZnQgLSAodGhpcy5yZXNpemVyX3dpZHRoIC8gMil9cHhgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRNb3VzZURyYWdMaXN0ZW5lcnMocmVzaXplcl9lbDogSFRNTERpdkVsZW1lbnQsIHJlc2l6ZTogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKHJlc2l6ZXJfZWwsICdtb3VzZWVudGVyJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHJlc2l6ZXJfZWwsICdyZXNpemVyLWhhbmRsZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHJlc2l6ZXJfZWwsICdyZXNpemVyLWhhbmRsZS12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbihyZXNpemVyX2VsLCAnbW91c2VsZWF2ZScsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUucmVsYXRlZFRhcmdldCB8fCAoZS5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gdGhpcy5yb2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MocmVzaXplcl9lbCwgJ3Jlc2l6ZXItaGFuZGxlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhyZXNpemVyX2VsLCAncmVzaXplci1oYW5kbGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbihyZXNpemVyX2VsLCAnbW91c2Vkb3duJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbl9tb3VzZW1vdmVfZm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4od2luZG93LCAnbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFsndG9wJywgJ2JvdHRvbSddLmluY2x1ZGVzKHJlc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ3RvcCcsIGAke2V2ZW50LnBhZ2VZfXB4YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2xlZnQnLCBgJHtldmVudC5wYWdlWH1weGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVTZXJ2aWNlLmVtaXR0ZXIuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIHpvbmU6IHRoaXMucm9sZSxcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBbJ3RvcCcsICdib3R0b20nXS5pbmNsdWRlcyhyZXNpemUpID8gJ3YnIDogJ2gnLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IHJlc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlX3dpZHRoOiB0aGlzLnJlc2l6ZXJfd2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3Bvc2l0aW9uOiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgICAgICByZXNpemVyX3dpZHRoOiB0aGlzLnJlc2l6ZXJfd2lkdGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHdpbl9kcmFnc3RhcnRfZm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4od2luZG93LCAnZHJhZ3N0YXJ0JywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHdpbl9tb3VzZXVwX2ZuID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ21vdXNldXAnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICd1c2VyLXNlbGVjdCcsICd1bnNldCcpO1xuICAgICAgICAgICAgICAgIHdpbl9tb3VzZW1vdmVfZm4oKTtcbiAgICAgICAgICAgICAgICB3aW5fZHJhZ3N0YXJ0X2ZuKCk7XG4gICAgICAgICAgICAgICAgd2luX21vdXNldXBfZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==