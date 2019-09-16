import { Component } from '@angular/core';
import { NavigationElement, Tab } from 'foundry-sdk';

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
        ['sidebar2', 'main', 'aside'],
        ['sidebar2', 'more', 'aside'],
        ['footer', 'footer', 'footer']
    ];

    columns = ['250px', '1fr', '250px'];

    rows = [
        '30px',
        '30px',
        '22px',
        '1fr',
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

    tabs: Tab[] = [
        new Tab({ title: 'Tab 1'}),
        new Tab({ title: 'Tab 2'}),
        new Tab({ title: 'Tab 3'}),
    ];

    constructor() {
        this.current_theme = localStorage.getItem('theme') || this.current_theme;
    }

    setTheme(theme: string) {
        localStorage.setItem('theme', theme);
        this.current_theme = theme;
    }
}
