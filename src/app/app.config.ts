import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Provides zone change detection with event coalescing for efficient change detection.
     */ provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Configures the Angular router with the application's defined routes.
     */ provideRouter(routes),

    /**
     * Configures the HTTP client with the fetch strategy for handling HTTP requests.
     */
    provideHttpClient(withFetch()),

    /**
     * Imports and sets up translation modules for internationalization (i18n).
     * It uses a factory method to load translation files from the specified location.
     */
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
}

/**
 * Factory function to load translation files from the 'assets/i18n' folder with '.json' extension.
 * @param http The HttpClient instance used to make HTTP requests.
 * @returns A new instance of TranslateHttpLoader to load translation files.
 */
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json')
}
