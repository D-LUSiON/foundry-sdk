import { Injectable, EventEmitter } from '@angular/core';

export interface ResizeEvent {
    zone: string;
    resize: 'h' | 'v';
    handle: 'top' | 'right' | 'bottom' | 'left';
    handle_width: number;
    event: MouseEvent;
    element_position: DOMRect | ClientRect;
    resizer_position: DOMRect | ClientRect;
}

@Injectable({
    providedIn: 'root'
})
export class ResizerEventsService {

    emitter: EventEmitter<ResizeEvent> = new EventEmitter();

    constructor() { }
}
