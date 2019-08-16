import { EventEmitter, Injectable, ɵɵdefineInjectable, Component, ElementRef, Renderer2, Input, HostBinding, HostListener, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResizerEventsService {
    constructor() {
        this.emitter = new EventEmitter();
    }
}
ResizerEventsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ResizerEventsService.ctorParameters = () => [];
/** @nocollapse */ ResizerEventsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ResizerEventsService_Factory() { return new ResizerEventsService(); }, token: ResizerEventsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WorkspaceZoneComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class WorkspaceWrapperComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FoundrySdkModule {
}
FoundrySdkModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    WorkspaceZoneComponent,
                    WorkspaceWrapperComponent,
                ],
                imports: [],
                exports: [
                    WorkspaceZoneComponent,
                    WorkspaceWrapperComponent,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationElement {
    /**
     * @param {?=} data
     */
    constructor(data) {
        if (data) {
            if (data.hasOwnProperty('title')) {
                this.title = data.title;
            }
            if (data.hasOwnProperty('icon')) {
                this.icon = data.icon;
            }
            if (data.hasOwnProperty('action')) {
                this.action = data.action;
            }
            if (data.hasOwnProperty('role')) {
                this.role = data.role;
            }
            if (data.hasOwnProperty('children')) {
                this.children = data.children.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => new NavigationElement(x)));
            }
        }
    }
}

export { FoundrySdkModule, NavigationElement, WorkspaceZoneComponent as ɵa, ResizerEventsService as ɵb, WorkspaceWrapperComponent as ɵc };
//# sourceMappingURL=foundry-sdk.js.map
