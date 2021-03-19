import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ThemeModule {
  name: string;
  properties: any;
}

export const dark: ThemeModule = {
  name: 'dark',
  properties: {
    '--main-bg-color': '#111233',
    '--secondary-bg-color': '#1d1e4f',
    '--text-color': '#7577a6',
    '--heading-color': '#fff',
    '--notif-banner': '#090a1e',
    '--button-color': '#fff',
    '--loader-color': '#fff',
    '--eps-shadow': '0px 4px 74px rgba(0, 0, 0, 0.25)',
    '--play-icon-color-primary': '#fff',
    '--play-icon-color-secondary': '#b40db7',
    '--contributor-shadow': 'none',
  }
};

export const light: ThemeModule = {
  name: 'light',
  properties: {
    '--main-bg-color': '#fff',
    '--secondary-bg-color': '#e9eaf5',
    '--text-color': '#31337e',
    '--heading-color': '#1d1e4f',
    '--notif-banner': '#d3d7f8',
    '--button-color': '#b40db7',
    '--loader-color': '#31337e',
    '--eps-shadow': '0px 4px 7px rgba(0, 0, 0, 0.25)',
    '--play-icon-color-primary': '#b40db7',
    '--play-icon-color-secondary': '#fff',
    '--contributor-shadow': '0px 44px 54px rgba(225, 227, 240, 0.6)',
  }
};
