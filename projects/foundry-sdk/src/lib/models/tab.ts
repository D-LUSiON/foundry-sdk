export class Tab {
    uid: string;
    title: string;
    active: boolean;
    target: any;

    constructor(data?) {
        if (data) {
            if (data.hasOwnProperty('uid')) { this.uid = data.uid; }
            if (data.hasOwnProperty('title')) { this.title = data.title; }
            if (data.hasOwnProperty('active')) { this.active = data.active; }
            if (data.hasOwnProperty('target')) { this.target = data.target; }
        }
    }
}
