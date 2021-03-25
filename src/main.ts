import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//Burda hangi Module ile çalışayım sorusu.Aşağıdaki (AppModule) dür.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
