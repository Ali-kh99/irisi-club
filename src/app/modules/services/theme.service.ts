import { Injectable } from '@angular/core';
import {dark, light, ThemeModule} from '../theme/theme.module';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private active: ThemeModule = dark;
  private availableThemes: ThemeModule[] = [light, dark];

  getAvailableThemes(): ThemeModule[] {
    return this.availableThemes;
  }

  getActiveTheme(): ThemeModule {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === dark.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(dark);
  }

  setLightTheme(): void {
    this.setActiveTheme(light);
  }

  setActiveTheme(theme: ThemeModule): void {
    this.active = theme;

    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }
}
