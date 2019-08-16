/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function ResizeEvent() { }
if (false) {
    /** @type {?} */
    ResizeEvent.prototype.zone;
    /** @type {?} */
    ResizeEvent.prototype.resize;
    /** @type {?} */
    ResizeEvent.prototype.handle;
    /** @type {?} */
    ResizeEvent.prototype.handle_width;
    /** @type {?} */
    ResizeEvent.prototype.event;
    /** @type {?} */
    ResizeEvent.prototype.element_position;
    /** @type {?} */
    ResizeEvent.prototype.resizer_position;
}
var ResizerEventsService = /** @class */ (function () {
    function ResizerEventsService() {
        this.emitter = new EventEmitter();
    }
    ResizerEventsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ResizerEventsService.ctorParameters = function () { return []; };
    /** @nocollapse */ ResizerEventsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ResizerEventsService_Factory() { return new ResizerEventsService(); }, token: ResizerEventsService, providedIn: "root" });
    return ResizerEventsService;
}());
export { ResizerEventsService };
if (false) {
    /** @type {?} */
    ResizerEventsService.prototype.emitter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplci1ldmVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZvdW5kcnktc2RrLyIsInNvdXJjZXMiOlsibGliL3Rvb2xzL3Jlc2l6ZXItZXZlbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV6RCxpQ0FRQzs7O0lBUEcsMkJBQWE7O0lBQ2IsNkJBQWtCOztJQUNsQiw2QkFBNEM7O0lBQzVDLG1DQUFxQjs7SUFDckIsNEJBQWtCOztJQUNsQix1Q0FBdUM7O0lBQ3ZDLHVDQUF1Qzs7QUFHM0M7SUFPSTtRQUZBLFlBQU8sR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUV4QyxDQUFDOztnQkFQcEIsVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7Ozs7K0JBZEQ7Q0FvQkMsQUFSRCxJQVFDO1NBTFksb0JBQW9COzs7SUFFN0IsdUNBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzaXplRXZlbnQge1xuICAgIHpvbmU6IHN0cmluZztcbiAgICByZXNpemU6ICdoJyB8ICd2JztcbiAgICBoYW5kbGU6ICd0b3AnIHwgJ3JpZ2h0JyB8ICdib3R0b20nIHwgJ2xlZnQnO1xuICAgIGhhbmRsZV93aWR0aDogbnVtYmVyO1xuICAgIGV2ZW50OiBNb3VzZUV2ZW50O1xuICAgIGVsZW1lbnRfcG9zaXRpb246IERPTVJlY3QgfCBDbGllbnRSZWN0O1xuICAgIHJlc2l6ZXJfcG9zaXRpb246IERPTVJlY3QgfCBDbGllbnRSZWN0O1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6ZXJFdmVudHNTZXJ2aWNlIHtcblxuICAgIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxSZXNpemVFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19