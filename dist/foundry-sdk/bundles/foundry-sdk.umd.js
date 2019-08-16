(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('foundry-sdk', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['foundry-sdk'] = {}, global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResizerEventsService = /** @class */ (function () {
        function ResizerEventsService() {
            this.emitter = new core.EventEmitter();
        }
        ResizerEventsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ResizerEventsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ResizerEventsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ResizerEventsService_Factory() { return new ResizerEventsService(); }, token: ResizerEventsService, providedIn: "root" });
        return ResizerEventsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'fnd-workspace-zone',
                        template: '<ng-content></ng-content>',
                        styles: ["::ng-deep .resizer-handle{position:absolute;z-index:10000;background-color:var(--zone-handle-bg-color);border-width:var(--zone-handle-border-width);border-style:var(--zone-handle-border-style);border-color:var(--zone-handle-border-color)}::ng-deep .resizer-handle-visible{visibility:visible;opacity:1;-webkit-transition:opacity .1s linear;transition:opacity .1s linear}::ng-deep .resizer-handle-hidden{visibility:hidden;opacity:0;-webkit-transition:visibility .5s 1s,opacity 1s linear;transition:visibility .5s 1s,opacity 1s linear}:host-context(fnd-workspace-zone){--scrollbar-color:var(--color-tint);--scrollbar-thumb-color:var(--color-shade);--scrollbar-thumb-hover-color:var(--color-shade-lighter);--scrollbar-thumb-active-color:var(--color-shade-darker);--wrapper-bg-color:var(--color);--wrapper-text-color:var(--color-contrast);--zone-bg-color:var(--color);--zone-text-color:var(--color-contrast);--zone-border-color:var(--color-shade);--zone-border-style:solid;--zone-handle-bg-color:var(--color-shade);--zone-handle-color:var(--color-dark-contrast);--zone-handle-border-width:1px;--zone-handle-border-color:var(--color-shade);display:-webkit-box;display:flex;overflow:auto;word-break:break-all;background-color:var(--zone-bg-color);color:var(--zone-text-color);border-width:0;border-style:var(--zone-border-style);border-color:var(--zone-border-color)}"]
                    }] }
        ];
        /** @nocollapse */
        WorkspaceZoneComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ResizerEventsService }
        ]; };
        WorkspaceZoneComponent.propDecorators = {
            role: [{ type: core.Input }],
            border: [{ type: core.Input }],
            resize_zone: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            overflow_x: [{ type: core.Input }],
            overflow_y: [{ type: core.Input }],
            min_height: [{ type: core.Input }],
            max_height: [{ type: core.Input }],
            direction: [{ type: core.Input }],
            resizers: [{ type: core.Input }],
            resizer_width: [{ type: core.Input }],
            host_min_height: [{ type: core.HostBinding, args: ['style.min-height',] }],
            host_max_height: [{ type: core.HostBinding, args: ['style.max-height',] }],
            host_overfow_x: [{ type: core.HostBinding, args: ['style.overflow-x',] }],
            host_overfow_y: [{ type: core.HostBinding, args: ['style.overflow-y',] }],
            host_flex_direction: [{ type: core.HostBinding, args: ['style.flex-direction',] }],
            host_color_theme: [{ type: core.HostBinding, args: ['attr.colorTheme',] }],
            onMouseEnter: [{ type: core.HostListener, args: ['mouseenter', ['$event'],] }],
            onMouseLeave: [{ type: core.HostListener, args: ['mouseleave', ['$event'],] }]
        };
        return WorkspaceZoneComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'fnd-workspace-wrapper',
                        template: '<ng-content></ng-content>',
                        styles: ["::ng-deep body{margin:0;padding:0;box-sizing:border-box}:host-context(fnd-workspace-wrapper){position:fixed;display:-ms-grid;display:grid;width:100%;height:100%;background-color:var(--wrapper-bg-color);color:var(--wrapper-text-color)}"]
                    }] }
        ];
        /** @nocollapse */
        WorkspaceWrapperComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: core.Renderer2 },
            { type: ResizerEventsService }
        ]; };
        WorkspaceWrapperComponent.propDecorators = {
            rows: [{ type: core.Input }],
            columns: [{ type: core.Input }],
            areas: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            restore_state: [{ type: core.Input }],
            host_theme_class: [{ type: core.HostBinding, args: ['class',] }]
        };
        return WorkspaceWrapperComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FoundrySdkModule = /** @class */ (function () {
        function FoundrySdkModule() {
        }
        FoundrySdkModule.decorators = [
            { type: core.NgModule, args: [{
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
        return FoundrySdkModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavigationElement = /** @class */ (function () {
        function NavigationElement(data) {
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
                    function (x) { return new NavigationElement(x); }));
                }
            }
        }
        return NavigationElement;
    }());

    exports.FoundrySdkModule = FoundrySdkModule;
    exports.NavigationElement = NavigationElement;
    exports.ɵa = WorkspaceZoneComponent;
    exports.ɵb = ResizerEventsService;
    exports.ɵc = WorkspaceWrapperComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=foundry-sdk.umd.js.map
