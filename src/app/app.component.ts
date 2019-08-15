import { Component } from '@angular/core';
import { NavigationElement } from 'foundry-sdk';

@Component({
    selector: 'fnd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    areas = [
        ['header', 'header', 'header', 'header'],
        ['shortcuts', 'sidebar', 'tabs', 'aside'],
        ['shortcuts', 'sidebar', 'main', 'aside'],
        ['shortcuts', 'sidebar', 'more', 'aside'],
        ['footer', 'footer', 'footer', 'footer']
    ];

    columns = ['40px', '350px', '1fr', '250px'];

    rows = [
        '30px',
        '30px',
        '1fr',
        '230px',
        '22px'
    ];

    current_theme = 'dark';

    themes = [
        'light',
        'dark',
        'orange',
        'blue',
        'red',
        'green',
        'pink'
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
        this.current_theme = localStorage.getItem('theme') || 'light';
    }

    setTheme(theme: string) {
        localStorage.setItem('theme', theme);
        this.current_theme = theme;
    }
}
