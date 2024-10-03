import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, withPreloading, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './authInterceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withPreloading(PreloadAllModules)), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withFetch(), withInterceptors([authInterceptor]))]
};

//export const baseUrl: string = "http://20.244.43.11:5000/api/";

export const baseUrl: string = "http://192.168.0.155:5000/api/";