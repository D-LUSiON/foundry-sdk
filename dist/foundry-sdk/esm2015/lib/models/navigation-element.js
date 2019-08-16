/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class NavigationElement {
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
if (false) {
    /** @type {?} */
    NavigationElement.prototype.title;
    /** @type {?} */
    NavigationElement.prototype.icon;
    /** @type {?} */
    NavigationElement.prototype.action;
    /** @type {?} */
    NavigationElement.prototype.role;
    /** @type {?} */
    NavigationElement.prototype.children;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbGVtZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZm91bmRyeS1zZGsvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL25hdmlnYXRpb24tZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGlCQUFpQjs7OztJQU8xQixZQUFZLElBQUs7UUFDYixJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7YUFBRTtZQUM5RCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQUU7WUFDM0QsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUFFO1lBQ2pFLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFBRTtZQUMzRCxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7YUFBRTtTQUM3RztJQUNMLENBQUM7Q0FDSjs7O0lBZkcsa0NBQWU7O0lBQ2YsaUNBQWM7O0lBQ2QsbUNBQWE7O0lBQ2IsaUNBQWlCOztJQUNqQixxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmF2aWdhdGlvbkVsZW1lbnQge1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIGljb24/OiBzdHJpbmc7XG4gICAgYWN0aW9uPzogYW55O1xuICAgIHJvbGU/OiAnZGl2aWRlcic7XG4gICAgY2hpbGRyZW4/OiBOYXZpZ2F0aW9uRWxlbWVudFtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8pIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCd0aXRsZScpKSB7IHRoaXMudGl0bGUgPSBkYXRhLnRpdGxlOyB9XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnaWNvbicpKSB7IHRoaXMuaWNvbiA9IGRhdGEuaWNvbjsgfVxuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ2FjdGlvbicpKSB7IHRoaXMuYWN0aW9uID0gZGF0YS5hY3Rpb247IH1cbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdyb2xlJykpIHsgdGhpcy5yb2xlID0gZGF0YS5yb2xlOyB9XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnY2hpbGRyZW4nKSkgeyB0aGlzLmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbi5tYXAoeCA9PiBuZXcgTmF2aWdhdGlvbkVsZW1lbnQoeCkpOyB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=