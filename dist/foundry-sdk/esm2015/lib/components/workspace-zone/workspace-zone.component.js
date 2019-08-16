/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Renderer2, Input, HostBinding, HostListener } from '@angular/core';
import { ResizerEventsService } from '../../tools/resizer-events.service';
export class WorkspaceZoneComponent {
    /**
     * @param {?} _el
     * @param {?} _renderer
     * @param {?} _resizeService
     */
    constructor(_el, _renderer, _resizeService) {
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
        (e) => {
            if (e.zone !== this.role) {
                this.resizers.forEach((/**
                 * @param {?} resizer
                 * @return {?}
                 */
                resizer => {
                    this._updateResizerPosition(this.all_resizers[resizer]);
                }));
            }
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseEnter(e) {
        Object.keys(this.all_resizers).forEach((/**
         * @param {?} resizer
         * @return {?}
         */
        resizer => {
            this._renderer.removeClass(this.all_resizers[resizer], 'resizer-handle-hidden');
            this._renderer.addClass(this.all_resizers[resizer], 'resizer-handle-visible');
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseLeave(e) {
        if (!e.relatedTarget || ((/** @type {?} */ (e.relatedTarget))).getAttribute('zone') !== this.role) {
            Object.keys(this.all_resizers).forEach((/**
             * @param {?} resizer
             * @return {?}
             */
            resizer => {
                this._renderer.removeClass(this.all_resizers[resizer], 'resizer-handle-visible');
                this._renderer.addClass(this.all_resizers[resizer], 'resizer-handle-hidden');
            }));
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.resizers.forEach((/**
             * @param {?} resizer
             * @return {?}
             */
            resizer => {
                this._updateResizerPosition(this.all_resizers[resizer]);
            }));
        }), 200);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._renderer.setStyle(this._el.nativeElement, 'grid-area', this.role);
        if (this.border) {
            this._renderer.setStyle(this._el.nativeElement, `border-${this.border}-width`, '1px');
        }
        this.resizers.forEach((/**
         * @param {?} resizer
         * @return {?}
         */
        resizer => {
            if (!this.all_resizers[resizer]) {
                /** @type {?} */
                const resizer_el = this._renderer.createElement('div');
                this._renderer.setAttribute(resizer_el, 'zone', this.role);
                this._renderer.setAttribute(resizer_el, 'role', resizer);
                this._renderer.addClass(resizer_el, 'resizer-handle');
                this._renderer.addClass(resizer_el, 'resizer-handle-hidden');
                switch (resizer) {
                    case 'top':
                    case 'bottom':
                        this._renderer.setStyle(resizer_el, 'cursor', 'n-resize');
                        break;
                    case 'right':
                    case 'left':
                        this._renderer.setStyle(resizer_el, 'cursor', 'e-resize');
                        break;
                    default:
                        break;
                }
                this._updateResizerPosition(resizer_el);
                this._addMouseDragListeners(resizer_el, resizer);
                this._renderer.appendChild(document.querySelector('body'), resizer_el);
                this.all_resizers[resizer] = resizer_el;
            }
            else {
                console.error(`You've defined more than one "${resizer}" resizers!`);
            }
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.host_color_theme = this.theme;
        this.host_min_height = this.min_height;
        this.host_max_height = this.max_height;
        this.host_overfow_x = this.overflow_x;
        this.host_overfow_y = this.overflow_y;
        this.host_flex_direction = this.direction;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.host_color_theme = this.theme;
        this.host_min_height = this.min_height;
        this.host_max_height = this.max_height;
        this.host_overfow_x = this.overflow_x;
        this.host_overfow_y = this.overflow_y;
        this.host_flex_direction = this.direction;
    }
    /**
     * @private
     * @param {?} resizer_el
     * @return {?}
     */
    _updateResizerPosition(resizer_el) {
        /** @type {?} */
        const position_info = this._el.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const resizer = resizer_el.getAttribute('role');
        this._renderer.setStyle(resizer_el, 'overflow', `hidden`);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this._renderer.setStyle(resizer_el, 'overflow', `auto`);
        }), 3);
        switch (resizer) {
            case 'top':
                this._renderer.setStyle(resizer_el, 'width', `${position_info.width}px`);
                this._renderer.setStyle(resizer_el, 'height', `${this.resizer_width}px`);
                this._renderer.setStyle(resizer_el, 'top', `${position_info.y - (this.resizer_width / 2)}px`);
                this._renderer.setStyle(resizer_el, 'left', `${position_info.x}px`);
                break;
            case 'right':
                this._renderer.setStyle(resizer_el, 'width', `${this.resizer_width}px`);
                this._renderer.setStyle(resizer_el, 'height', `${position_info.height}px`);
                this._renderer.setStyle(resizer_el, 'top', `${position_info.top}px`);
                this._renderer.setStyle(resizer_el, 'left', `${position_info.width + position_info.left - this.resizer_width + (this.resizer_width / 2)}px`);
                break;
            case 'bottom':
                this._renderer.setStyle(resizer_el, 'width', `${position_info.width}px`);
                this._renderer.setStyle(resizer_el, 'height', `${this.resizer_width}px`);
                this._renderer.setStyle(resizer_el, 'top', `${position_info.bottom - this.resizer_width + (this.resizer_width / 2)}px`);
                this._renderer.setStyle(resizer_el, 'left', `${position_info.x}px`);
                break;
            case 'left':
                this._renderer.setStyle(resizer_el, 'width', `${this.resizer_width}px`);
                this._renderer.setStyle(resizer_el, 'height', `${position_info.height}px`);
                this._renderer.setStyle(resizer_el, 'top', `${position_info.top}px`);
                this._renderer.setStyle(resizer_el, 'left', `${position_info.left - (this.resizer_width / 2)}px`);
                break;
            default:
                break;
        }
    }
    /**
     * @private
     * @param {?} resizer_el
     * @param {?} resize
     * @return {?}
     */
    _addMouseDragListeners(resizer_el, resize) {
        this._renderer.listen(resizer_el, 'mouseenter', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this._renderer.removeClass(resizer_el, 'resizer-handle-hidden');
            this._renderer.addClass(resizer_el, 'resizer-handle-visible');
        }));
        this._renderer.listen(resizer_el, 'mouseleave', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            if (!e.relatedTarget || ((/** @type {?} */ (e.relatedTarget))).getAttribute('role') !== this.role) {
                this._renderer.removeClass(resizer_el, 'resizer-handle-visible');
                this._renderer.addClass(resizer_el, 'resizer-handle-hidden');
            }
        }));
        this._renderer.listen(resizer_el, 'mousedown', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this._renderer.setStyle(document.querySelector('body'), 'user-select', 'none');
            /** @type {?} */
            const win_mousemove_fn = this._renderer.listen(window, 'mousemove', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                switch (resize) {
                    case 'top':
                        this._renderer.setStyle(resizer_el, 'top', `${event.pageY}px`);
                        break;
                    case 'right':
                        this._renderer.setStyle(resizer_el, 'left', `${event.pageX + this.resizer_width}px`);
                        break;
                    case 'bottom':
                        // TODO: Fix bottom resizer
                        this._renderer.setStyle(resizer_el, 'top', `${event.pageY}px`);
                        break;
                    case 'left':
                        this._renderer.setStyle(resizer_el, 'left', `${event.pageX - (this.resizer_width / 2)}px`);
                        break;
                }
                this._resizeService.emitter.emit((/** @type {?} */ ({
                    zone: this.role,
                    resize: ['top', 'bottom'].includes(resize) ? 'v' : 'h',
                    handle: resize,
                    handle_width: this.resizer_width,
                    event,
                    element_position: this._el.nativeElement.getBoundingClientRect(),
                    resizer_position: resizer_el.getBoundingClientRect(),
                })));
            }));
            /** @type {?} */
            const win_dragstart_fn = this._renderer.listen(window, 'dragstart', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                event.preventDefault();
                event.stopPropagation();
                return false;
            }));
            /** @type {?} */
            const win_mouseup_fn = this._renderer.listen(window, 'mouseup', (/**
             * @param {?} event
             * @return {?}
             */
            (event) => {
                this._renderer.setStyle(document.querySelector('body'), 'user-select', 'unset');
                win_mousemove_fn();
                win_dragstart_fn();
                win_mouseup_fn();
            }));
        }));
    }
}
WorkspaceZoneComponent.decorators = [
    { type: Component, args: [{
                selector: 'fnd-workspace-zone',
                template: '<ng-content></ng-content>',
                styles: ["::ng-deep .resizer-handle{position:absolute;z-index:10000;background-color:var(--zone-handle-bg-color);border-width:var(--zone-handle-border-width);border-style:var(--zone-handle-border-style);border-color:var(--zone-handle-border-color)}::ng-deep .resizer-handle-visible{visibility:visible;opacity:1;-webkit-transition:opacity .1s linear;transition:opacity .1s linear}::ng-deep .resizer-handle-hidden{visibility:hidden;opacity:0;-webkit-transition:visibility .5s 1s,opacity 1s linear;transition:visibility .5s 1s,opacity 1s linear}:host-context(fnd-workspace-zone){--scrollbar-color:var(--color-tint);--scrollbar-thumb-color:var(--color-shade);--scrollbar-thumb-hover-color:var(--color-shade-lighter);--scrollbar-thumb-active-color:var(--color-shade-darker);--wrapper-bg-color:var(--color);--wrapper-text-color:var(--color-contrast);--zone-bg-color:var(--color);--zone-text-color:var(--color-contrast);--zone-border-color:var(--color-shade);--zone-border-style:solid;--zone-handle-bg-color:var(--color-shade);--zone-handle-color:var(--color-dark-contrast);--zone-handle-border-width:1px;--zone-handle-border-color:var(--color-shade);display:-webkit-box;display:flex;overflow:auto;word-break:break-all;background-color:var(--zone-bg-color);color:var(--zone-text-color);border-width:0;border-style:var(--zone-border-style);border-color:var(--zone-border-color)}"]
            }] }
];
/** @nocollapse */
WorkspaceZoneComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ResizerEventsService }
];
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
    onMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }],
    onResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlLXpvbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRyeS1zZGsvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy93b3Jrc3BhY2Utem9uZS93b3Jrc3BhY2Utem9uZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBRVQsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUVYLFlBQVksRUFHZixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQWUsTUFBTSxvQ0FBb0MsQ0FBQztBQU92RixNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7SUFrRC9CLFlBQ1ksR0FBZSxFQUNmLFNBQW9CLEVBQ3BCLGNBQW9DO1FBRnBDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQWhEdkMsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixlQUFVLEdBQTRFLE1BQU0sQ0FBQztRQUM3RixlQUFVLEdBQTRFLE1BQU0sQ0FBQztRQUM3RixlQUFVLEdBQVcsR0FBRyxDQUFDO1FBQ3pCLGVBQVUsR0FBVyxNQUFNLENBQUM7UUFDNUIsY0FBUyxHQUFxQixRQUFRLENBQUM7UUFDdkMsYUFBUSxHQUErQyxFQUFFLENBQUM7UUFDMUQsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFFRixvQkFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDbEMsb0JBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2xDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNqQyxtQkFBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0Isd0JBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQyxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFD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U0FBQyxrQkFBa0I7NkJBQzlCLFdBQVcsU0FBQyxrQkFBa0I7a0NBQzlCLFdBQVcsU0FBQyxzQkFBc0I7K0JBQ2xDLFdBQVcsU0FBQyxpQkFBaUI7MkJBTzdCLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7MkJBT3JDLFlBQVksU0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7dUJBU3JDLFlBQVksU0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUF4Q3pDLHNDQUFzQjs7SUFDdEIsd0NBQXdCOztJQUN4Qiw2Q0FBNkI7O0lBQzdCLHVDQUE0Qjs7SUFDNUIsNENBQXNHOztJQUN0Ryw0Q0FBc0c7O0lBQ3RHLDRDQUFrQzs7SUFDbEMsNENBQXFDOztJQUNyQywyQ0FBZ0Q7O0lBQ2hELDBDQUFtRTs7SUFDbkUsK0NBQW1DOztJQUVuQyxpREFBbUU7O0lBQ25FLGlEQUFtRTs7SUFDbkUsZ0RBQWtFOztJQUNsRSxnREFBa0U7O0lBQ2xFLHFEQUEwRTs7SUFDMUUsa0RBQThEOzs7OztJQUc5RCxrREFBeUM7O0lBRXpDLDhDQUFxRDs7Ozs7SUEyQmpELHFDQUF1Qjs7Ozs7SUFDdkIsMkNBQTRCOzs7OztJQUM1QixnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkluaXQsXG4gICAgRWxlbWVudFJlZixcbiAgICBSZW5kZXJlcjIsXG4gICAgSW5wdXQsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgT25DaGFuZ2VzLFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZXNpemVyRXZlbnRzU2VydmljZSwgUmVzaXplRXZlbnQgfSBmcm9tICcuLi8uLi90b29scy9yZXNpemVyLWV2ZW50cy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdmbmQtd29ya3NwYWNlLXpvbmUnLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gICAgc3R5bGVVcmxzOiBbJy4vd29ya3NwYWNlLXpvbmUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2Vab25lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCkgcm9sZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGJvcmRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHJlc2l6ZV96b25lOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdGhlbWU6IHN0cmluZyA9ICcnO1xuICAgIEBJbnB1dCgpIG92ZXJmbG93X3g6ICd2aXNpYmxlJyB8ICdhdXRvJyB8ICdub25lJyB8ICdzY3JvbGwnIHwgJ2luaXRpYWwnIHwgJ2NsaXAnIHwgJ292ZXJsYXknID0gJ2NsaXAnO1xuICAgIEBJbnB1dCgpIG92ZXJmbG93X3k6ICd2aXNpYmxlJyB8ICdhdXRvJyB8ICdub25lJyB8ICdzY3JvbGwnIHwgJ2luaXRpYWwnIHwgJ2NsaXAnIHwgJ292ZXJsYXknID0gJ2NsaXAnO1xuICAgIEBJbnB1dCgpIG1pbl9oZWlnaHQ6IHN0cmluZyA9ICcwJztcbiAgICBASW5wdXQoKSBtYXhfaGVpZ2h0OiBzdHJpbmcgPSAnYXV0byc7XG4gICAgQElucHV0KCkgZGlyZWN0aW9uOiAncm93JyB8ICdjb2x1bW4nID0gJ2NvbHVtbic7XG4gICAgQElucHV0KCkgcmVzaXplcnM6IEFycmF5PCd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnPiA9IFtdO1xuICAgIEBJbnB1dCgpIHJlc2l6ZXJfd2lkdGg6IG51bWJlciA9IDY7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1pbi1oZWlnaHQnKSBob3N0X21pbl9oZWlnaHQgPSB0aGlzLm1pbl9oZWlnaHQ7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS5tYXgtaGVpZ2h0JykgaG9zdF9tYXhfaGVpZ2h0ID0gdGhpcy5tYXhfaGVpZ2h0O1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcmZsb3cteCcpIGhvc3Rfb3ZlcmZvd194ID0gdGhpcy5vdmVyZmxvd194O1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcmZsb3cteScpIGhvc3Rfb3ZlcmZvd195ID0gdGhpcy5vdmVyZmxvd195O1xuICAgIEBIb3N0QmluZGluZygnc3R5bGUuZmxleC1kaXJlY3Rpb24nKSBob3N0X2ZsZXhfZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgQEhvc3RCaW5kaW5nKCdhdHRyLmNvbG9yVGhlbWUnKSBob3N0X2NvbG9yX3RoZW1lID0gdGhpcy50aGVtZTtcblxuXG4gICAgcHJpdmF0ZSBfcmVzaXplcl9lbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGFsbF9yZXNpemVyczogeyBba2V5OiBzdHJpbmddOiBIVE1MRGl2RWxlbWVudCB9ID0ge307XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJywgWyckZXZlbnQnXSkgb25Nb3VzZUVudGVyKGU6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5hbGxfcmVzaXplcnMpLmZvckVhY2gocmVzaXplciA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSwgJ3Jlc2l6ZXItaGFuZGxlLWhpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5hbGxfcmVzaXplcnNbcmVzaXplcl0sICdyZXNpemVyLWhhbmRsZS12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbJyRldmVudCddKSBvbk1vdXNlTGVhdmUoZTogTW91c2VFdmVudCkge1xuICAgICAgICBpZiAoIWUucmVsYXRlZFRhcmdldCB8fCAoZS5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ3pvbmUnKSAhPT0gdGhpcy5yb2xlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmFsbF9yZXNpemVycykuZm9yRWFjaChyZXNpemVyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSwgJ3Jlc2l6ZXItaGFuZGxlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSwgJ3Jlc2l6ZXItaGFuZGxlLWhpZGRlbicpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSkgb25SZXNpemUoZXZlbnQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZXJzLmZvckVhY2gocmVzaXplciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVzaXplclBvc2l0aW9uKHRoaXMuYWxsX3Jlc2l6ZXJzW3Jlc2l6ZXJdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9lbDogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJpdmF0ZSBfcmVzaXplU2VydmljZTogUmVzaXplckV2ZW50c1NlcnZpY2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6ZVNlcnZpY2UuZW1pdHRlci5zdWJzY3JpYmUoKGU6IHsgem9uZTogc3RyaW5nLCBldmVudDogTW91c2VFdmVudCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAoZS56b25lICE9PSB0aGlzLnJvbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZXJzLmZvckVhY2gocmVzaXplciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJlc2l6ZXJQb3NpdGlvbih0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZ3JpZC1hcmVhJywgdGhpcy5yb2xlKTtcbiAgICAgICAgaWYgKHRoaXMuYm9yZGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBgYm9yZGVyLSR7dGhpcy5ib3JkZXJ9LXdpZHRoYCwgJzFweCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNpemVycy5mb3JFYWNoKHJlc2l6ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZXJfZWw6IEhUTUxEaXZFbGVtZW50ID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHJlc2l6ZXJfZWwsICd6b25lJywgdGhpcy5yb2xlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUocmVzaXplcl9lbCwgJ3JvbGUnLCByZXNpemVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhyZXNpemVyX2VsLCAncmVzaXplci1oYW5kbGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhyZXNpemVyX2VsLCAncmVzaXplci1oYW5kbGUtaGlkZGVuJyk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc2l6ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICdjdXJzb3InLCAnbi1yZXNpemUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2N1cnNvcicsICdlLXJlc2l6ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVSZXNpemVyUG9zaXRpb24ocmVzaXplcl9lbCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRNb3VzZURyYWdMaXN0ZW5lcnMocmVzaXplcl9lbCwgcmVzaXplcik7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCByZXNpemVyX2VsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbF9yZXNpemVyc1tyZXNpemVyXSA9IHJlc2l6ZXJfZWw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFlvdSd2ZSBkZWZpbmVkIG1vcmUgdGhhbiBvbmUgXCIke3Jlc2l6ZXJ9XCIgcmVzaXplcnMhYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5ob3N0X2NvbG9yX3RoZW1lID0gdGhpcy50aGVtZTtcbiAgICAgICAgdGhpcy5ob3N0X21pbl9oZWlnaHQgPSB0aGlzLm1pbl9oZWlnaHQ7XG4gICAgICAgIHRoaXMuaG9zdF9tYXhfaGVpZ2h0ID0gdGhpcy5tYXhfaGVpZ2h0O1xuICAgICAgICB0aGlzLmhvc3Rfb3ZlcmZvd194ID0gdGhpcy5vdmVyZmxvd194O1xuICAgICAgICB0aGlzLmhvc3Rfb3ZlcmZvd195ID0gdGhpcy5vdmVyZmxvd195O1xuICAgICAgICB0aGlzLmhvc3RfZmxleF9kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaG9zdF9jb2xvcl90aGVtZSA9IHRoaXMudGhlbWU7XG4gICAgICAgIHRoaXMuaG9zdF9taW5faGVpZ2h0ID0gdGhpcy5taW5faGVpZ2h0O1xuICAgICAgICB0aGlzLmhvc3RfbWF4X2hlaWdodCA9IHRoaXMubWF4X2hlaWdodDtcbiAgICAgICAgdGhpcy5ob3N0X292ZXJmb3dfeCA9IHRoaXMub3ZlcmZsb3dfeDtcbiAgICAgICAgdGhpcy5ob3N0X292ZXJmb3dfeSA9IHRoaXMub3ZlcmZsb3dfeTtcbiAgICAgICAgdGhpcy5ob3N0X2ZsZXhfZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVzaXplclBvc2l0aW9uKHJlc2l6ZXJfZWw6IEhUTUxEaXZFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHBvc2l0aW9uX2luZm86IERPTVJlY3QgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCByZXNpemVyID0gcmVzaXplcl9lbC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAnb3ZlcmZsb3cnLCBgaGlkZGVuYCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ292ZXJmbG93JywgYGF1dG9gKTtcbiAgICAgICAgfSwgMyk7XG4gICAgICAgIHN3aXRjaCAocmVzaXplcikge1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAnd2lkdGgnLCBgJHtwb3NpdGlvbl9pbmZvLndpZHRofXB4YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2hlaWdodCcsIGAke3RoaXMucmVzaXplcl93aWR0aH1weGApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICd0b3AnLCBgJHtwb3NpdGlvbl9pbmZvLnkgLSAodGhpcy5yZXNpemVyX3dpZHRoIC8gMil9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAnbGVmdCcsIGAke3Bvc2l0aW9uX2luZm8ueH1weGApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICd3aWR0aCcsIGAke3RoaXMucmVzaXplcl93aWR0aH1weGApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICdoZWlnaHQnLCBgJHtwb3NpdGlvbl9pbmZvLmhlaWdodH1weGApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICd0b3AnLCBgJHtwb3NpdGlvbl9pbmZvLnRvcH1weGApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgICAgICAgICAgICAgICByZXNpemVyX2VsLFxuICAgICAgICAgICAgICAgICAgICAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIGAke3Bvc2l0aW9uX2luZm8ud2lkdGggKyBwb3NpdGlvbl9pbmZvLmxlZnQgLSB0aGlzLnJlc2l6ZXJfd2lkdGggKyAodGhpcy5yZXNpemVyX3dpZHRoIC8gMil9cHhgXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ3dpZHRoJywgYCR7cG9zaXRpb25faW5mby53aWR0aH1weGApO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICdoZWlnaHQnLCBgJHt0aGlzLnJlc2l6ZXJfd2lkdGh9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAndG9wJywgYCR7cG9zaXRpb25faW5mby5ib3R0b20gLSB0aGlzLnJlc2l6ZXJfd2lkdGggKyAodGhpcy5yZXNpemVyX3dpZHRoIC8gMil9cHhgKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAnbGVmdCcsIGAke3Bvc2l0aW9uX2luZm8ueH1weGApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ3dpZHRoJywgYCR7dGhpcy5yZXNpemVyX3dpZHRofXB4YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2hlaWdodCcsIGAke3Bvc2l0aW9uX2luZm8uaGVpZ2h0fXB4YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ3RvcCcsIGAke3Bvc2l0aW9uX2luZm8udG9wfXB4YCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUocmVzaXplcl9lbCwgJ2xlZnQnLCBgJHtwb3NpdGlvbl9pbmZvLmxlZnQgLSAodGhpcy5yZXNpemVyX3dpZHRoIC8gMil9cHhgKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9hZGRNb3VzZURyYWdMaXN0ZW5lcnMocmVzaXplcl9lbDogSFRNTERpdkVsZW1lbnQsIHJlc2l6ZTogJ3RvcCcgfCAncmlnaHQnIHwgJ2JvdHRvbScgfCAnbGVmdCcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIubGlzdGVuKHJlc2l6ZXJfZWwsICdtb3VzZWVudGVyJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHJlc2l6ZXJfZWwsICdyZXNpemVyLWhhbmRsZS1oaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHJlc2l6ZXJfZWwsICdyZXNpemVyLWhhbmRsZS12aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbihyZXNpemVyX2VsLCAnbW91c2VsZWF2ZScsIChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUucmVsYXRlZFRhcmdldCB8fCAoZS5yZWxhdGVkVGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gdGhpcy5yb2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MocmVzaXplcl9lbCwgJ3Jlc2l6ZXItaGFuZGxlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyhyZXNpemVyX2VsLCAncmVzaXplci1oYW5kbGUtaGlkZGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpc3RlbihyZXNpemVyX2VsLCAnbW91c2Vkb3duJywgKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSwgJ3VzZXItc2VsZWN0JywgJ25vbmUnKTtcbiAgICAgICAgICAgIGNvbnN0IHdpbl9tb3VzZW1vdmVfZm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4od2luZG93LCAnbW91c2Vtb3ZlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChyZXNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICd0b3AnLCBgJHtldmVudC5wYWdlWX1weGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICdsZWZ0JywgYCR7ZXZlbnQucGFnZVggKyB0aGlzLnJlc2l6ZXJfd2lkdGh9cHhgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogRml4IGJvdHRvbSByZXNpemVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShyZXNpemVyX2VsLCAndG9wJywgYCR7ZXZlbnQucGFnZVl9cHhgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHJlc2l6ZXJfZWwsICdsZWZ0JywgYCR7ZXZlbnQucGFnZVggLSAodGhpcy5yZXNpemVyX3dpZHRoIC8gMil9cHhgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc2l6ZVNlcnZpY2UuZW1pdHRlci5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgem9uZTogdGhpcy5yb2xlLFxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IFsndG9wJywgJ2JvdHRvbSddLmluY2x1ZGVzKHJlc2l6ZSkgPyAndicgOiAnaCcsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogcmVzaXplLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVfd2lkdGg6IHRoaXMucmVzaXplcl93aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfcG9zaXRpb246IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZXJfcG9zaXRpb246IHJlc2l6ZXJfZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgICAgICAgICAgfSBhcyBSZXNpemVFdmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHdpbl9kcmFnc3RhcnRfZm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4od2luZG93LCAnZHJhZ3N0YXJ0JywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHdpbl9tb3VzZXVwX2ZuID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ21vdXNldXAnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksICd1c2VyLXNlbGVjdCcsICd1bnNldCcpO1xuICAgICAgICAgICAgICAgIHdpbl9tb3VzZW1vdmVfZm4oKTtcbiAgICAgICAgICAgICAgICB3aW5fZHJhZ3N0YXJ0X2ZuKCk7XG4gICAgICAgICAgICAgICAgd2luX21vdXNldXBfZm4oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==