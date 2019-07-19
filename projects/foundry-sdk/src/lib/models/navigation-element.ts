export class NavigationElement {
    title?: string;
    icon?: string;
    action?: any;
    role?: 'divider';
    children?: NavigationElement[];

    constructor(data?) {
        if (data) {
            if (data.hasOwnProperty('title')) { this.title = data.title; }
            if (data.hasOwnProperty('icon')) { this.icon = data.icon; }
            if (data.hasOwnProperty('action')) { this.action = data.action; }
            if (data.hasOwnProperty('role')) { this.role = data.role; }
            if (data.hasOwnProperty('children')) { this.children = data.children.map(x => new NavigationElement(x)); }
        }
    }
}
