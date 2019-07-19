import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ResizerEventsService {

    emitter: EventEmitter<{
        zone: string,
        resize: 'h' | 'v',
        handle: 'top' | 'right' | 'bottom' | 'left',
        handle_width: number,
        event: MouseEvent,
        element_position: DOMRect,
        resizer_width: number,
    }> = new EventEmitter();

    constructor() { }
}
