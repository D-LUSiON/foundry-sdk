import { EventEmitter } from '@angular/core';
export interface ResizeEvent {
    zone: string;
    resize: 'h' | 'v';
    handle: 'top' | 'right' | 'bottom' | 'left';
    handle_width: number;
    event: MouseEvent;
    element_position: DOMRect | ClientRect;
    resizer_position: DOMRect | ClientRect;
}
export declare class ResizerEventsService {
    emitter: EventEmitter<ResizeEvent>;
    constructor();
}
