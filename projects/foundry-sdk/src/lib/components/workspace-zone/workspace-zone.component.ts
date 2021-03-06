import {
    Component,
    OnInit,
    ElementRef,
    Renderer2,
    Input,
    HostBinding,
    AfterViewInit,
    HostListener,
    OnChanges,
    SimpleChanges,
    Host
} from '@angular/core';
import { ResizerEventsService, ResizeEvent } from '../../tools/resizer-events.service';
import { WorkspaceWrapperComponent } from '../workspace-wrapper/workspace-wrapper.component';

@Component({
    selector: 'fnd-workspace-zone',
    template: '<ng-content></ng-content>',
    styleUrls: ['./workspace-zone.component.scss']
})
export class WorkspaceZoneComponent implements OnInit, OnChanges, AfterViewInit {

    @Input() role: string;
    @Input() borders: string[] = [];
    @Input() resize_zone: string;
    @Input() theme: string = '';
    @Input() overflow_x: 'visible' | 'auto' | 'none' | 'scroll' | 'initial' | 'clip' | 'overlay' = 'clip';
    @Input() overflow_y: 'visible' | 'auto' | 'none' | 'scroll' | 'initial' | 'clip' | 'overlay' = 'clip';
    @Input() min_height: string = '0';
    @Input() max_height: string = 'auto';
    @Input() direction: 'row' | 'column' = 'column';
    @Input() resizers: Array<'top' | 'right' | 'bottom' | 'left'> = [];
    @Input() resizer_width: number = 6;

    @HostBinding('style.min-height') host_min_height = this.min_height;
    @HostBinding('style.max-height') host_max_height = this.max_height;
    @HostBinding('style.overflow-x') host_overfow_x = this.overflow_x;
    @HostBinding('style.overflow-y') host_overfow_y = this.overflow_y;
    @HostBinding('style.flex-direction') host_flex_direction = this.direction;
    @HostBinding('attr.colorTheme') host_color_theme = this.theme;


    private _resizer_element: HTMLDivElement;

    all_resizers: { [key: string]: HTMLDivElement } = {};

    min_size: number = 0;

    @HostListener('mouseenter', ['$event']) onMouseEnter(e: MouseEvent) {
        Object.keys(this.all_resizers).forEach(resizer => {
            this._renderer.removeClass(this.all_resizers[resizer], 'resizer-handle-hidden');
            this._renderer.addClass(this.all_resizers[resizer], 'resizer-handle-visible');
        });
    }

    @HostListener('mouseleave', ['$event']) onMouseLeave(e: MouseEvent) {
        if (!e.relatedTarget || (e.relatedTarget as HTMLDivElement).getAttribute('zone') !== this.role) {
            Object.keys(this.all_resizers).forEach(resizer => {
                this._renderer.removeClass(this.all_resizers[resizer], 'resizer-handle-visible');
                this._renderer.addClass(this.all_resizers[resizer], 'resizer-handle-hidden');
            });
        }
    }

    @HostListener('window:resize', ['$event']) onResize(event) {
        setTimeout(() => {
            this.resizers.forEach(resizer => {
                this._updateResizerPosition(this.all_resizers[resizer]);
            });
        }, 200);
    }

    constructor(
        private _el: ElementRef,
        private _renderer: Renderer2,
        private _resizeService: ResizerEventsService,
        @Host() private _wrapper: WorkspaceWrapperComponent
    ) {
        this.min_size = _wrapper.min_size;

        this._resizeService.emitter.subscribe((e: { zone: string, event: MouseEvent }) => {
            if (e.zone !== this.role) {
                this.resizers.forEach(resizer => {
                    this._updateResizerPosition(this.all_resizers[resizer]);
                });
            }
        });
    }

    ngOnInit() {
        this._renderer.setStyle(this._el.nativeElement, 'grid-area', this.role);
        this.borders.forEach(border => {
            this._renderer.setStyle(this._el.nativeElement, `border-${border}-width`, '1px');
        });

        // FIXME: When zone has two resizers (bottom and right for example), the bottom one is bugged
        this.resizers.forEach(resizer => {
            if (!this.all_resizers[resizer]) {
                const resizer_el: HTMLDivElement = this._renderer.createElement('div');
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
            } else {
                console.error(`You've defined more than one "${resizer}" resizers!`);
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.host_color_theme = this.theme;
        this.host_min_height = this.min_height;
        this.host_max_height = this.max_height;
        this.host_overfow_x = this.overflow_x;
        this.host_overfow_y = this.overflow_y;
        this.host_flex_direction = this.direction;
        this.min_size = this._wrapper.min_size;
    }

    ngAfterViewInit(): void {
        this.host_color_theme = this.theme;
        this.host_min_height = this.min_height;
        this.host_max_height = this.max_height;
        this.host_overfow_x = this.overflow_x;
        this.host_overfow_y = this.overflow_y;
        this.host_flex_direction = this.direction;
        this.min_size = this._wrapper.min_size;
    }

    private _updateResizerPosition(resizer_el: HTMLDivElement): void {
        const position_info: DOMRect = this._el.nativeElement.getBoundingClientRect();
        const resizer = resizer_el.getAttribute('role');

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
                this._renderer.setStyle(
                    resizer_el,
                    'left',
                    `${position_info.width + position_info.left - this.resizer_width + (this.resizer_width / 2)}px`
                );
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

    private _addMouseDragListeners(resizer_el: HTMLDivElement, resize: 'top' | 'right' | 'bottom' | 'left'): void {
        this._renderer.listen(resizer_el, 'mouseenter', () => {
            this._renderer.removeClass(resizer_el, 'resizer-handle-hidden');
            this._renderer.addClass(resizer_el, 'resizer-handle-visible');
        });

        this._renderer.listen(resizer_el, 'mouseleave', (e: MouseEvent) => {
            if (!e.relatedTarget || (e.relatedTarget as HTMLElement).getAttribute('role') !== this.role) {
                this._renderer.removeClass(resizer_el, 'resizer-handle-visible');
                this._renderer.addClass(resizer_el, 'resizer-handle-hidden');
            }
        });

        this._renderer.listen(resizer_el, 'mousedown', () => {
            this._renderer.setStyle(document.querySelector('body'), 'user-select', 'none');
            this._renderer.setStyle(resizer_el, 'visibility', `hidden`);
            const win_mousemove_fn = this._renderer.listen(window, 'mousemove', (event: MouseEvent) => {
                const client_rect = this._el.nativeElement.getBoundingClientRect();
                switch (resize) {
                    case 'top':
                        if (client_rect.height - (this.resizer_width / 2) > this.min_size) {
                            this._renderer.setStyle(resizer_el, 'top', `${event.pageY}px`);
                        }
                        break;
                    case 'bottom':
                        if (client_rect.height + (this.resizer_width / 2) > this.min_size) {
                            this._renderer.setStyle(resizer_el, 'top', `${event.pageY}px`);
                        }
                        break;
                    case 'right':
                        if (client_rect.width - (this.resizer_width / 2) > this.min_size) {
                            this._renderer.setStyle(resizer_el, 'left', `${event.pageX + this.resizer_width}px`);
                        }
                        break;
                    case 'left':
                        if (client_rect.width - (this.resizer_width / 2) > this.min_size) {
                            this._renderer.setStyle(resizer_el, 'left', `${event.pageX - (this.resizer_width / 2)}px`);
                        }
                        break;
                }

                this._resizeService.emitter.emit({
                    zone: this.role,
                    resize: ['top', 'bottom'].includes(resize) ? 'v' : 'h',
                    handle: resize,
                    handle_width: this.resizer_width,
                    event,
                    element_position: this._el.nativeElement.getBoundingClientRect(),
                    resizer_position: resizer_el.getBoundingClientRect(),
                } as ResizeEvent);

                // Force redraw of browser window because of a bug with fast resizing
                this._renderer.setStyle(this._el.nativeElement, 'display', `none`);
                this._renderer.removeStyle(this._el.nativeElement, 'display');
            });
            const win_dragstart_fn = this._renderer.listen(window, 'dragstart', (event: MouseEvent) => {
                event.preventDefault();
                event.stopPropagation();
                return false;
            });
            const win_mouseup_fn = this._renderer.listen(window, 'mouseup', () => {
                this._renderer.removeStyle(document.querySelector('body'), 'user-select');
                this._renderer.removeStyle(resizer_el, 'visibility');
                win_mousemove_fn();
                win_dragstart_fn();
                win_mouseup_fn();
                this._updateResizerPosition(resizer_el);
            });
        });
    }

}
