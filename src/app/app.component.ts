import { Component } from '@angular/core';
import { NavigationElement } from 'foundry-sdk';

@Component({
    selector: 'fnd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    areas = [
        ['header', 'header', 'header'],
        ['shortcuts', 'shortcuts', 'shortcuts'],
        ['sidebar', 'tabs', 'aside'],
        ['sidebar', 'main', 'aside'],
        ['sidebar', 'more', 'aside'],
        ['footer', 'footer', 'footer']
    ];

    columns = ['250px', '1fr', '250px'];

    rows = [
        '30px',
        '30px',
        '30px',
        '1fr',
        '230px',
        '22px'
    ];

    current_theme = 'default-light';

    themes = [
        'default-light',
        'default-dark',
        'orange',
        'blue',
        'red',
        'green',
        'pink',
        'dark-pink',
        'lime',
        'light-lime',
    ];

    main_nav: NavigationElement[] = [
        {
            title: 'File',
            icon: '',
            children: [
                {
                    title: 'New',
                    icon: '',
                },
                {
                    title: 'Open',
                    icon: '',
                },
                {
                    title: 'Save',
                    icon: '',
                },
                {
                    role: 'divider',
                },
                {
                    title: 'Exit',
                    icon: '',
                },
            ]
        },
        {
            title: 'Edit',
            icon: ''
        },
        {
            title: 'View',
            icon: ''
        },
        {
            title: 'About',
            icon: ''
        },
    ];

    constructor() {
        this.current_theme = localStorage.getItem('theme') || this.current_theme;
    }

    setTheme(theme: string) {
        localStorage.setItem('theme', theme);
        this.current_theme = theme;
    }
}
